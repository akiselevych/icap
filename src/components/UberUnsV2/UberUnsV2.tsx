//libs
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'
//images
import image from '../../../public/assets/uberunsImage.png'

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

const UberUnsV2 = () => {
    const handleViewPort = () => {
        return typeof window != 'undefined' && window.innerWidth > 680
    }
    return (
        <section className={styles.container}>
            <motion.p className={styles.smallText} initial="hidden"
                      whileInView="visible"
                      variants={variant}
                      viewport={{once: true, amount: 0.8}}>Über uns</motion.p>
            <motion.h2 initial="hidden"
                       whileInView="visible"
                       variants={variant}
                       viewport={{once: true, amount: 0.8}} className={`${global.sectionTitle} ${styles.title}`}>Entdecken Sie die ICAP Group GmbH: Unsere Vision,
                Werte und Mission</motion.h2>
            <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: handleViewPort() ? 0.8 : 0.4}} className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={"People"} className={styles.image}/>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h5 className={styles.cardTitle}>Unser Auftrag</h5>
                        <p className={styles.cardDesc}>Die Deutsche Wirtschaft zu digitalisieren.</p>
                    </div>
                    <div className={styles.card}>
                        <h5 className={styles.cardTitle}>Unsere Vision</h5>
                        <p className={styles.cardDesc}>Zukunftsfähigkeit durch nahtlose digitale
                            LösungenZukunftsfähigkeit durch nahtlose digitale Lösungen.</p>
                    </div>
                    <div className={styles.card}>
                        <h5 className={styles.cardTitle}>Unsere Werte</h5>
                        <p className={styles.cardDesc}>Vertrauen und Integrität. Wir stehen Ihnen als Fels in der
                            Brandung zur Seite und sorgen für eine sichere, leistungsfähige, zukunftsorientierte
                            IT-Infrastruktur in Ihrem Unternehmen.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default UberUnsV2;
