import { FC, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
import { ITranslateProp } from '@/types'
import classNames from 'classnames';
import Link from "next/link";

interface Props extends ITranslateProp {
    card: {
        title: string,
        subTitle: string,
        icon: string
        activeIcon: string
        path: string
    }
}

const cardVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
        }
    }
};



const ServiceCard: FC<Props> = ({ card, t }) => {
    const [activeCard, setActiveCard] = useState(false)

    return (
        <motion.div
            className={styles.motionDiv}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.8 }}>
            <Link
                href={card.path}
                className={classNames(styles.card, activeCard ? styles.activeText : "")}
                onMouseEnter={() => setActiveCard(true)}
                onMouseLeave={() => setActiveCard(false)}
                onTouchStart={() => setActiveCard(true)}
                onTouchEnd={() => setActiveCard(false)}
                style={activeCard ? { backgroundColor: "#0E65F1" } : {}}>
                <Image width={64} height={64} className={styles.cardIcon} src={activeCard ? card.activeIcon : card.icon} alt={card.title} />
                <div className={styles.cardTextBlock}>
                    <div className={global.smallTitle}>{card.title}</div>
                    <div className={styles.cardSubTitle}>{card.subTitle}</div>
                </div>
                <div className={classNames(styles.cardLink, activeCard ? styles.activeLink : "")}>
                    {t('ourServicesWebpageSection3')}
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.03369 6.31773C7.03369 6.15497 6.96858 6.00523 6.84489 5.88804L1.68864 0.835958C1.57145 0.725281 1.42822 0.666687 1.25895 0.666687C0.926921 0.666687 0.666504 0.920593 0.666504 1.25914C0.666504 1.42189 0.731608 1.57163 0.835775 1.68231L5.57536 6.31773L0.835775 10.9532C0.731608 11.0638 0.666504 11.207 0.666504 11.3764C0.666504 11.7149 0.926921 11.9688 1.25895 11.9688C1.42822 11.9688 1.57145 11.9102 1.68864 11.793L6.84489 6.74741C6.96858 6.62372 7.03369 6.48049 7.03369 6.31773Z" fill={activeCard ? "#fff" : "#0E65F1"} />
                    </svg>

                </div>
            </Link>
        </motion.div>
    )
}

export default ServiceCard