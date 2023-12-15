//libs
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import image1 from '../../../public/assets/bc.png';

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


const OurMission = () => {
    return (
        <motion.section className={styles.container} initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: 0.8}}>
            <div className={styles.cards}>
                <div className={styles.card}>Software</div>
                <div className={styles.card}>Apps</div>
                <div className={styles.card}>Webseiten</div>
                <div className={styles.card}>Automatisierung</div>
            </div>
            <div className={styles.imageWrapper}>
                <Image src={image1} alt={"working people"} className={styles.image}/>
            </div>
            <div className={styles.numbers}>
                <div className={styles.number}>
                    <p className={styles.numberTitle}>{">1.000.000 €"}</p>
                    <p className={styles.numberText}>für unsere Kunden kreierter Wert</p>
                </div>
                <div className={styles.smalls}>
                    <div className={styles.number}>
                        <p className={styles.numberTitle}>21+</p>
                        <p className={styles.numberText}>Mitarbeiter</p>
                    </div>
                    <div className={styles.number}>
                        <p className={styles.numberTitle}>20+</p>
                        <p className={styles.numberText}>Projekte 2023</p>
                    </div>
                </div>
            </div>
            <div className={styles.secondImage}>
                <h4 className={styles.title}>Unser Auftrag</h4>
                <p className={styles.desc}>
                    Fortschritt fördern, Vertrauen schaffen: Mit Integrität zu Spitzenleistungen innovieren
                </p>
            </div>
        </motion.section>
    );
};

export default OurMission;
