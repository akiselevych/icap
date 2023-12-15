//libs
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import volker from './images/volker.png'
import yana from './images/yana.png'
import daniil from './images/daniil.png'
import mail from './images/emailIcon.svg'

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

const NewAboutUs = () => {
    return (
        <section className={styles.container}>
            <motion.h2 initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{ once: true, amount: 0.6}} className={`${global.sectionTitle} ${styles.title}`}>Bei uns sind Sie in guten Händen</motion.h2>
            <motion.p initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{ once: true, amount: 0.6}} className={styles.desc}>
                Willkommen bei ICAP – Ihrem Innovationspartner für herausragende Webentwicklung. Unsere Experten kombinieren technische Exzellenz mit kreativem Flair, um maßgeschneiderte Lösungen zu schaffen. Entdecken Sie die Köpfe hinter unseren bahnbrechenden Websites, wo Talent und Hingabe den Kern unseres Erfolgs bilden.Willkommen in der Welt der Zukunft, willkommen bei ICAP.
            </motion.p>
            <div className={styles.content}>
                <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{ once: true, amount: 0.6}} className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image src={volker} alt={"Volker Hütter"} className={styles.personImage}/>
                        <a href="mailto:volkerhuetter@icapgroupgmbh.com" className={styles.mailIcon}><Image src={mail} alt={"mail icon"}/></a>
                    </div>
                    <h5 className={styles.name}>Volker Hütter</h5>
                    <p className={styles.position}>Geschäftsführer & Projektleiter</p>
                </motion.div>
                <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{ once: true, amount: 0.6}} className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image src={yana} alt={"Yana Koval"} className={styles.personImage}/>
                        <a href="mailto:yana.koval@icapgroupgmbh.com" className={styles.mailIcon}><Image src={mail} alt={"mail icon"}/></a>
                    </div>
                    <h5 className={styles.name}>Yana Koval</h5>
                    <p className={styles.position}>Design Leiterin</p>
                </motion.div>
                <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{ once: true, amount: 0.6}} className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image src={daniil} alt={"Daniil Rudenko"} className={styles.personImage}/>
                        <a href="mailto:daniil.rudenko@icapgroupgmbh.com" className={styles.mailIcon}><Image src={mail} alt={"mail icon"}/></a>
                    </div>
                    <h5 className={styles.name}>Daniil Rudenko</h5>
                    <p className={styles.position}>Technischer Leiter</p>
                </motion.div>
            </div>
        </section>
    );
};

export default NewAboutUs;
