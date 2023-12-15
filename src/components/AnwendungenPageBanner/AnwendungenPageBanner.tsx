//libs
import { FC } from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const AnwendungenPageBanner: FC<{ title: string, desc: string, image: string, imgWidth: number, imgHeight: number }> = ({ title, desc, image, imgHeight, imgWidth }) => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={`${global.pageTitle} ${styles.title}`}>{title}</h1>
                <p className={styles.desc}>{desc}</p>
            </div>
            <div className={styles.image}>
                <Image width={imgWidth} height={imgHeight} src={image} alt={"Anwendungen Hero Image"} />
            </div>
            <div className={styles.radial1}></div>
            <div className={styles.radial2}></div>
        </section>
    );
};

export default AnwendungenPageBanner;
