//libs
import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//components
import Layout from "@/components/Layout/Layout";
import AdminTopBar from "@/components/AdminTopBar/AdminTopBar";
import DataAdminTable from "@/components/DataAdminTable/DataAdminTable";
import ErrorBanner from "@/components/ErrorBanner/ErrorBanner";
//types
import {AppDispatch, RootStateType} from "@/types";
//redux
import {
    fetchAllContent,
    fetchAllTextContent,
    fetchPendingStatus,
    rebuildApplication
} from "@/reduxFolder/slices/StaticContent.slice";
//services
import {baseImageUrl2} from "@/services/API";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import EmptyListBanner from "@/components/EmptyListBanner/EmptyListBanner";
//images
const spinnerImage = `${baseImageUrl2}/spinner.svg`
//services
import { withAuth } from "@/services/AuthWrapper";
import {fetchAllImages} from "@/reduxFolder/slices/ImagesContent.slice";


const jobIds: string[] = [];

const Page = () => {
    const [activeLang, setActiveLang] = useState<"EN" | "UA" | "DE">("EN");
    const { t } = useTranslation("translate");
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const content = useSelector((state: RootStateType) => state.StaticContent.content);
    const textContent = useSelector((state: RootStateType) => state.StaticContent.textContent);
    const pendingChanges = useSelector((state: RootStateType) => state.StaticContent.pendingChanges);
    const images = useSelector((state: RootStateType) => state.ImagesContent.images);
    const loadContentStatus = useSelector((state: RootStateType) => state.StaticContent.loadContentStatus)
    useEffect(() => {
        if (!content.length) {
            dispatch(fetchAllContent());
        }
        if (!images.length){
            dispatch(fetchAllImages());
        }
        if (!textContent.length){
            dispatch(fetchAllTextContent())
        }
        dispatch(fetchPendingStatus());
        //eslint-disable-next-line
    }, []);


    const handleClassName = (pathName: string) =>  {
        return router.asPath.split("/").at(-1) === pathName ? styles.activePage : '';
    }

    const capitalizeFirstLetter = (string: string) => {
        return string.split("/").at(-1)!.charAt(0).toUpperCase() + string.split("/").at(-1)!.slice(1);
    }

    const spinner = loadContentStatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null;
    const error = loadContentStatus === 'error' ? <ErrorBanner t={t} /> : null;
    const render = loadContentStatus === "idle" ? (
        <>
            <div className={styles.header}>
                <h3 className={styles.pageName}>
                    {capitalizeFirstLetter(router.asPath)}</h3>
                <button onClick={() => {
                    dispatch(rebuildApplication());
                }} type={"button"} disabled={!pendingChanges} className={`${global.primaryButton} ${styles.saveBtn}`}>Save</button>
            </div>
            <div className={styles.content}>
                <div className={styles.filterBlock}>
                    <div className={styles.pages}>
                        <Link
                            href={"/admin/static-content/homepage"}
                            className={`${styles.page} ${handleClassName("homepage")}`}>Homepage</Link>
                        <Link
                            href={"/admin/static-content/web-applications"}
                            className={`${styles.page} ${handleClassName("web-applications")}`}>Web Applications</Link>
                        <Link
                            href={"/admin/static-content/mobile-applications"}
                            className={`${styles.page} ${handleClassName("mobile-applications")}`}>Mobile Applications</Link>
                        <Link
                            href={"/admin/static-content/digitalization"}
                            className={`${styles.page} ${handleClassName("digitalization")}`}>Digitalization</Link>
                        <Link
                            href={"/admin/static-content/automation"}
                            className={`${styles.page} ${handleClassName("automation")}`}>Automation</Link>
                        <Link
                            href={"/admin/static-content/website"}
                            className={`${styles.page} ${handleClassName("website")}`}>Website</Link>
                        <Link
                            href={"/admin/static-content/content"}
                            className={`${styles.page} ${handleClassName("content")}`}>Content</Link>
                        <Link
                            href={"/admin/static-content/repeated-blocks"}
                            className={`${styles.page} ${handleClassName("repeated-blocks")}`}>Repeated blocks</Link>
                    </div>
                    <div className={styles.langs}>
                        <div
                            onClick={() => setActiveLang("EN")}
                            className={`${styles.lang} ${activeLang === "EN" && styles.activeLang}`}>EN</div>
                        <div
                            onClick={() => setActiveLang("DE")}
                            className={`${styles.lang} ${activeLang === "DE" && styles.activeLang}`}>DE</div>
                        <div
                            onClick={() => setActiveLang("UA")}
                            className={`${styles.lang} ${activeLang === "UA" && styles.activeLang}`}>UA</div>
                    </div>
                </div>
                <DataAdminTable activeLang={activeLang} page={router.asPath.split("/").at(-1) as string}/>
            </div>
        </>
    ) : null;

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <Layout t={t}>
                <div className={styles.wrapper}>
                    {<AdminTopBar page="static-content" isSpecial={false}/>}
                    <div className={styles.container}>
                        <ErrorBoundary t={t}>
                            {render}
                            {spinner}
                            {error}
                            {render && !content.length && <EmptyListBanner t={t} />}
                        </ErrorBoundary>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export async function getStaticPaths() {
    const paths = jobIds.map((jobId) => ({
        params: { jobId },
    }));

    return { paths, fallback: true };
}

//@ts-ignore
export async function getStaticProps({ locale }) {
    return {
        props: {
            //@ts-ignore
            ...(await serverSideTranslations(locale, ['translate'])),
            // Will be passed to the page component as props
        },
    }
}
export default withAuth(Page);
