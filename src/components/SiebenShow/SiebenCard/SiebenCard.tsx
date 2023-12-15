//libs
import { FC } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";
const blockAnimationRight = {
    hidden: {
        x: 700,
        opacity: 0
    },
    visible: () => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    })
}
const blockAnimationLeft = {
    hidden: {
        x: -700,
        opacity: 0
    },
    visible: () => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    })
}
const AnimImage = motion(Image);
const SiebenCard: FC<{ image: string, imgWidth: number, imgHeight: number, title: string, desc: string, index: number, countColor: string }> = ({ image, title, desc, index, countColor, imgHeight, imgWidth }) => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.8, once: true }}
            className={styles.container}>
            <div className={styles.image}>
                <AnimImage width={imgWidth} height={imgHeight} priority variants={index % 2 === 0 ? blockAnimationLeft : blockAnimationRight} custom={1} src={image} alt={"OEG Image"} />
            </div>
            <motion.div variants={index % 2 === 0 ? blockAnimationRight : blockAnimationLeft} custom={1} className={styles.text}>
                <div className={styles.projectCount} style={{ color: countColor }} >0{index + 1}</div>
                <h4 className={`${global.mediumTitle} ${styles.title}`}>{title}</h4>
                <p className={styles.desc}>{desc}</p>
            </motion.div>
        </motion.div>
    );
};

export default SiebenCard;