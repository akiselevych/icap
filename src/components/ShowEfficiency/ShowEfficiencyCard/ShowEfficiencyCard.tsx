//libs
import React, { FC } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import classNames from 'classnames';


const blockAnimationRight = {
    hidden: {
        x: -700,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.3,
        }
    }
}
const blockAnimationLeft = {
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
const AnimImage = motion(Image);

const ShowEfficiencyCard: FC<{
    macBook?: boolean, bgColor: string, image: string, count: number, title: string, text: string, index: number, countColor: string, imgWidth: number, imgHeight: number,
}> = ({ image, bgColor, count, title, text, index, countColor, macBook, imgHeight, imgWidth }) => {
    return (
        <motion.div initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.8, once: true }}
            style={{ backgroundColor: bgColor }}
            className={classNames(styles.container, macBook ? styles.macBookCard : "")}
            key={count}>
            <div className={styles.image}>
                <AnimImage width={imgWidth} height={imgHeight} priority variants={index % 2 === 0 ? blockAnimationRight : blockAnimationLeft} src={image} alt={"image"} />
            </div>
            <div className={styles.content}>
                <motion.p variants={index % 2 === 0 ? blockAnimationLeft : blockAnimationRight} style={{ color: countColor }} className={styles.count}>0{count}</motion.p>
                <motion.h2 variants={index % 2 === 0 ? blockAnimationLeft : blockAnimationRight} className={`${global.mediumTitle}`}>{title}</motion.h2>
                <motion.p variants={index % 2 === 0 ? blockAnimationLeft : blockAnimationRight} className={styles.text}>{text}</motion.p>
            </div>
        </motion.div>
    );
};

export default ShowEfficiencyCard;
