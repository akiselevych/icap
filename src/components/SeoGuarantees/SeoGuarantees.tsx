//libs
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import icon1 from '../../../public/assets/seopage/icons/1.svg'
import icon2 from '../../../public/assets/seopage/icons/2.svg'
import icon3 from '../../../public/assets/seopage/icons/3.svg'
import radial from '../../../public/assets/seopage/radial1.png'

const SeoGuarantees = () => {

    const variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        },
    };

    const variantsCard = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            }
        },
    };

    return (
        <section className={styles.container}>
            <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{once: true, amount: 0.8}} className={styles.top}>
                <p className={styles.smallText}>We guarantee</p>
                <h2 className={`${global.sectionTitle} ${styles.title}`}>Google page 1 in your city</h2>
                <p className={styles.text}>After just 6 months (up to 25,000 residents, individual review necessary)</p>
            </motion.div>
            <div className={styles.bottom}>
                <Image src={radial} alt={"radial"} className={styles.radial}/>
                <motion.article initial="hidden"
                                whileInView="visible"
                                variants={variantsCard}
                                viewport={{once: true, amount: 0.8}} className={styles.card}>
                    <div className={styles.head}>
                        <Image src={icon1} alt={"Improved Organic Traffic"} className={styles.icon}/>
                        <h5 className={styles.cardTite}>Improved Organic Traffic</h5>
                    </div>
                    <p className={styles.cardText}>Our team's SEO strategies will substantially increase your website's
                        organic traffic, enhancing its visibility on search engine results pages (SERPs) and drawing in
                        more potential customers and users.</p>
                </motion.article>
                <motion.article initial="hidden"
                                whileInView="visible"
                                variants={variantsCard}
                                viewport={{once: true, amount: 0.8}} className={styles.card}>
                    <div className={styles.head}>
                        <Image src={icon2} alt={"Higher Search Engine Rankings"} className={styles.icon}/>
                        <h5 className={styles.cardTite}>Higher Search Engine Rankings</h5>
                    </div>
                    <p className={styles.cardText}>Your website will ascend to higher rankings on search engines such as
                        Google through effective keyword optimization, technical enhancements, and strategic link
                        building. This elevated visibility will bolster your website's competitiveness.</p>
                </motion.article>
                <motion.article initial="hidden"
                                whileInView="visible"
                                variants={variantsCard}
                                viewport={{once: true, amount: 0.8}} className={styles.card}>
                    <div className={styles.head}>
                        <Image src={icon3} alt={"Increased Conversions and Revenue"} className={styles.icon}/>
                        <h5 className={styles.cardTite}>Increased Conversions and Revenue</h5>
                    </div>
                    <p className={styles.cardText}>Your website will see improved performance, attracting targeted
                        traffic and enhancing the user experience, potentially boosting conversions and revenue. A
                        successful SEO strategy is crucial for achieving these goals, whether it's lead generation,
                        sales, or user engagement.</p>
                </motion.article>
            </div>
        </section>
    );
};

export default SeoGuarantees;
