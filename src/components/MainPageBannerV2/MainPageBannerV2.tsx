//libs
import {FC} from "react";
import {motion} from "framer-motion";
//types
import {ITranslateProp} from "@/types";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import Link from "next/link";

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

const MainPageBannerV2 : FC<ITranslateProp> = ({ t }) => {
    return (
        <motion.section className={styles.container} initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: 0.8}}>
            <h1 className={`${global.pageTitle} ${styles.title}`}>Führende Softwareentwicklung in Heilbronn</h1>
            <p className={styles.desc}>
                Entdecken Sie eine Zukunft voller Möglichkeiten mit der ICAP Group GmbH, wo unser unermüdliches Engagement für hervorragende Leistungen heute das Vertrauen schafft, das Sie morgen befähigt. Erkunden Sie unsere Welt der Expertise und entdecken Sie den Weg zu Ihrem Erfolg
            </p>
            <Link href={"/kontakt"} className={`${global.primaryButton} ${styles.btn}`}>Beratung erhalten</Link>
        </motion.section>
    );
};

export default MainPageBannerV2;
