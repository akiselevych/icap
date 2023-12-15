//libs
import Image from "next/image";
import { motion } from 'framer-motion';
import { FC } from "react";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { ITranslateProp } from "@/types";

//images
import { baseImageUrl } from "@/services/API";
const apple = `${baseImageUrl}/icons/apple.svg`
const android = `${baseImageUrl}/icons/android.svg`

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.45,
            delay: custom * 0.3
        }
    })
}
const AcrossPlatforms: FC<ITranslateProp> = ({ t }) => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.8, once: true }} className={styles.container}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>{t("mobile-applications_heading_h2_1")}</h2>
            <div className={styles.content}>
                <div className={styles.block}>
                    <motion.div variants={textAnimation} custom={1} className={styles.blockIcon}><Image width={64} height={64} src={apple} alt={"apple icon"} /></motion.div>
                    <motion.h4 variants={textAnimation} custom={4} className={styles.blockTitle}>{t("mobileAppsPlatforms2")}</motion.h4>
                    <motion.p variants={textAnimation} custom={7} className={styles.blockText}>{t("mobileAppsPlatforms3")}</motion.p>
                </div>
                <div className={styles.block}>
                    <motion.div variants={textAnimation} custom={1} className={styles.blockIcon}><Image width={64} height={64} src={android} alt={"android icon"} /></motion.div>
                    <motion.h4 variants={textAnimation} custom={4} className={styles.blockTitle}>{t("mobileAppsPlatforms4")}</motion.h4>
                    <motion.p variants={textAnimation} custom={7} className={styles.blockText}>{t("mobileAppsPlatforms5")}</motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default AcrossPlatforms;
