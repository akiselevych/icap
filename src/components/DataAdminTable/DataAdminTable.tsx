//libs
import React, {useMemo, useState} from "react";import {useSelector} from "react-redux";
import {Languages, RootStateType} from "@/types";

//styles
import styles from './styles.module.scss'
//components
import HeadlineLayout from "@/components/DataAdminTable/layouts/HeadlineLayout/HeadlineLayout";
import MetaLayout from "@/components/DataAdminTable/layouts/MetaLayout/MetaLayout";
//services
import { withAuth } from "@/services/AuthWrapper";
import ImageLayout from "@/components/DataAdminTable/layouts/ImageLayout/ImageLayout";
import ContentLayout from "@/components/DataAdminTable/layouts/ContentLayout/ContentLayout";
import Image from "next/image";
import {baseImageUrl2} from "@/services/API";
const spinnerImage = `${baseImageUrl2}/spinner.svg`


const DataAdminTable = ({page,activeLang}: {page: string,activeLang: string}) => {
    const [section, setSection] = useState<"headline" | "image" | "meta">("headline");
    const content = useSelector((state: RootStateType) => state.StaticContent.content);
    const textContent = useSelector((state: RootStateType) => state.StaticContent.textContent);
    const images = useSelector((state: RootStateType) => state.ImagesContent.images);

    const imagesHeads = images.find(i => i.page_name === page)?.images;

    const objectContent = content.find(d => d.page_name === page && d.language === Languages[activeLang as keyof typeof Languages]);

    const headlineHeads = () => {
        if(page !== "content" && !!objectContent){
            const keys = Object.keys(objectContent.heading_tags);
            return keys.map(k => ({ tag: k, text: (objectContent.heading_tags as {[key: string]: string})[k] }));
        }
    }


    const metaHeads = () => {
        if(page !== "content" && !!objectContent){
            const keys = Object.keys(objectContent.meta_tags);
            return keys.map(k => ({ tag: k, text: (objectContent.meta_tags as {[key: string]: string})[k] }));
        }
    }


    const currentLangObj = textContent.find(p => p.language === activeLang);


    const textContentHeads = () => {
        if (page === "content"){
            if(!!currentLangObj){
                const keys = Object.keys(currentLangObj.content);
                return keys.map((k,i)=> ({ tag: k, text: (currentLangObj.content)[k] }));
            }
        }
    }

    return (
        <div className={styles.container}>
            {page !== "content" && <div className={styles.header}>
                <div className={`${styles.tab} ${section === "headline" && styles.activeTab}`}
                     onClick={() => setSection("headline")}>Headline
                </div>
                <div className={`${styles.tab} ${section === "image" && styles.activeTab}`}
                     onClick={() => setSection("image")}>Image
                </div>
                <div className={`${styles.tab} ${section === "meta" && styles.activeTab}`}
                     onClick={() => setSection("meta")}>Meta
                </div>
            </div>}
            <div className={styles.table}>
                {page !== "content" && section === "headline" && <HeadlineLayout heads={headlineHeads() || []} pageId={objectContent?.id || 0}/>}
                {page !== "content" && section === "meta" && <MetaLayout heads={metaHeads() || []} pageId={objectContent?.id || 0}/>}
                {page !== "content" && section === "image" && <ImageLayout images={imagesHeads || []} pageId={objectContent?.id || 0}/>}
                {page === "content" && <ContentLayout pageId={currentLangObj?.id || 0} heads={textContentHeads() || []}/>}
            </div>
        </div>
    );
};

export default DataAdminTable;
