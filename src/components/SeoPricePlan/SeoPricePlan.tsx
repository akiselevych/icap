//libs
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//components
import PricePlanCard from "@/components/SeoPricePlan/PricePlanCard/PricePlanCard";

const prices = [
    {
        price: "1500€",
        planName: "Basic SEO",
        desc: "Ideal for freelance SEOs, small  projects and marketing consultants.",
        points: [
            "Website-Audit","Basic Custom SEO Strategy","Website Optimization","Mobile-Friendliness Audit",
            "URL Structure Optimization","Keyword Research: Basic (Up to 5 groups)",
            "Monthly Reporting", "Basic Link Building Strategy"
        ],
        isFav: false
    },
    {
        price: "3000€",
        planName: "Advanced SEO",
        desc: "Improved option for medium-sized businesses and small sites.",
        points: [
            "Website-Audit","Basic Custom SEO Strategy","Website Optimization","Mobile-Friendliness Audit",
            "URL Structure Optimization","Keyword Research: Advanced (10-15 groups)",
            "Weekly Reporting with Analysis", "Comprehensive Link Building & Internal Linking",
            "Google My Business Optimization","Content Strategy Plan"
        ],
        isFav: true
    },
    {
        price: "5000€",
        planName: "Premium SEO",
        desc: "The best option for large companies and serious businesses.",
        points: [
            "Website-Audit","Basic Custom SEO Strategy","Website Optimization","Mobile-Friendliness Audit",
            "URL Structure Optimization","Keyword Research: Pro (20-25 groups)",
            "Weekly Reporting with Analysis", "Comprehensive Link Building & Internal Linking",
            "Google My Business Optimization","Content Strategy Plan", "Weekly Reporting + 24/7 Online Personal manager"
        ],
        isFav: false
    },

]

const SeoPricePlan = () => {
    const variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        },
    };
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}></div>
            <motion.h2 initial="hidden"
                       whileInView="visible"
                       variants={variants}
                       viewport={{once: true, amount: 0.8}} className={`${global.sectionTitle} ${styles.title}`}>Choose the <span className={`${global.sectionTitle} ${styles.colored}`}>SEO</span> Plan That Suits You!</motion.h2>
            <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{once: true, amount: 0.3}} className={styles.content}>
                {prices.map(({price,points,planName,isFav, desc},i) => (
                    <PricePlanCard key={i} planName={planName} price={price} points={points} isFav={isFav} desc={desc}/>
                ))}
            </motion.div>
        </section>
    );
};

export default SeoPricePlan;
