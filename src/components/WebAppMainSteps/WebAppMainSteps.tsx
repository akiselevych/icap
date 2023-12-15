//libs
import Image, {StaticImageData} from "next/image";
import { FC, useMemo } from "react";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//types
import { ITranslateProp } from "@/types";
//components
import WebAppCard from "@/components/WebAppMainSteps/WebAppCard/WebAppCard";
//images
import { baseImageUrl } from "@/services/API";

interface Props extends ITranslateProp{
    steps: {
        image: StaticImageData,
        imgWidth: number,
        imgHeight: number,
        icon: StaticImageData
        title: string,
        desc: string,
    }[]
}

const WebAppMainSteps: FC<Props> = ({ t,steps }) => {


    return (
        <section className={styles.container}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>Main Steps in the Web App Development Process</h2>
            <div className={styles.content}>
                {steps.map(({ image, title, desc, imgHeight, imgWidth,icon }, i) => (
                    <WebAppCard
                        icon={icon}
                        imgHeight={imgHeight}
                        imgWidth={imgWidth}
                        key={i}
                        image={image} title={title}
                        desc={desc}
                        index={i} />
                ))}
            </div>
        </section>
    );
};

export default WebAppMainSteps;
