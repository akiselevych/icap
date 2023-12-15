//libs
import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from "@/styles/global.module.scss";
//images
const icon1 = `${baseImageUrl2}/fixedPrice.svg`
const icon2 = `${baseImageUrl2}/googlePageIcon.svg`
const icon3 = `${baseImageUrl2}/inquiriesIcon.svg`
import {baseImageUrl2} from "@/services/API";
import {scrollToSection} from "@/utils/scrollToSection";

const variant = {
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
const WorkWithUs = () => {
    return (
        <section className={styles.container}>
            <motion.h2 className={`${styles.title} ${global.sectionTitle}`} initial="hidden"
                       whileInView="visible"
                       variants={variant}
                       viewport={{ once: true, amount: 1 }}>
                Wir GARANTIEREN Kundenanfragen
            </motion.h2>
            <motion.p initial="hidden"
                      whileInView="visible"
                      variants={variant}
                      viewport={{ once: true, amount: 1 }} className={styles.desc}>Warum trauen wir uns das?</motion.p>
            <div className={styles.content}>
                <motion.div className={styles.card} initial="hidden"
                       whileInView="visible"
                       variants={variant}
                       viewport={{ once: true, amount: 1 }}>
                    <p className={styles.number}>01</p>
                    <h4 className={styles.cardTitle}>Analyse</h4>
                    <p className={styles.cardDesc}>Umfangreiche, individuelle Analyse Ihres Angebotes, dem maximalen Absatzmarktes, historische Werte, Konkurrenzanalyse und wo Sie gerade stehen - wie viel kann man noch rausholen?</p>
                </motion.div>
                <motion.div className={styles.card} initial="hidden"
                       whileInView="visible"
                       variants={variant}
                       viewport={{ once: true, amount: 1 }}>
                    <p className={styles.number}>02</p>
                    <h4 className={styles.cardTitle}>Wertschöpfungs-analyse</h4>
                    <p className={styles.cardDesc}>Wir errechnen mathematisch was für einen Wert wir für Sie kreieren und die konkrete Anzahl an Kundenanfragen, die wir Ihnen garantieren können. - Sie erhalten ein Angebot innerhalb der Preisspanne</p>
                </motion.div>
                <motion.div className={styles.card} initial="hidden"
                       whileInView="visible"
                       variants={variant}
                       viewport={{ once: true, amount: 1 }}>
                    <p className={styles.number}>03</p>
                    <h4 className={styles.cardTitle}>Präzisionsarbeit</h4>
                    <p className={styles.cardDesc}>Wir arbeiten in der Regel mindestens einen Monat an Ihrer neuen Webseite - es soll alles perfekt sein. Dann geht es in die Praxis.</p>
                </motion.div>
            </div>
            <div className={`${styles.headerBtn} ${global.primaryButton}`} onClick={() => scrollToSection("pricePlans")}>Kostenlose Beratung</div>
        </section>
    );
};

export default WorkWithUs;
