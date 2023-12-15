//libs
import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
//@ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import '@splidejs/react-splide/css';
//images
const person = `${baseImageUrl2}/personIcon.svg`
import img1 from './icons/1.png'
import img2 from './icons/2.png'
import img3 from './icons/3.png'
//services
import {baseImageUrl2} from "@/services/API";


const MOCK_REVIEWS = [
    {
        image: img1,
        name: "Yanik Melber",
        company: "Mitbegründer SIEBEN Umzüge GmbH",
        text: "“Wir sind begeistert von der Website, die von der ICAP  entworfen und entwickelt wurde. Von Anfang bis Ende hat ihr Team Professionalität, Kreativität und ein ausgeprägtes Verständnis für unsere Marke bewiesen. Die Website ist visuell atemberaubend, benutzerfreundlich und hat unsere Erwartungen übertroffen.”"
    },
    {
        image: img2,
        name: "Loris Kalich",
        company: "Steinmacher & Kalich Group GmbH",
        text: "“Hut ab vor der ICAP für ihre hervorragenden Webdesign-Fähigkeiten. Unsere Website ist nicht nur ein echter Hingucker, sondern auch leicht zu navigieren. Der gesamte Prozess verlief reibungslos, und das Endergebnis spricht Bände. Sehr empfehlenswert!.”"
    },
    {
        image: img3,
        name: "Merab Tedoradze",
        company: "Merab Tedoradze Unternehmensberatung",
        text: "“Meine Zusammenarbeit mit den Jungs von ICAP war spitze! Junges Team mit Biss und voller Einsatzbereitschaft führt zu garantierten Lösungen. Top, kann ich nur weiterempfehlen!”"
    },
];
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
const ReviewsSliderV2 = () => {
    const options = {
        rewind: true,
        perPage: typeof window != 'undefined' && window.innerWidth > 945 ? 2 : 1,
        speed: 1200,
        gap: typeof window != 'undefined' && window.innerWidth > 945 ? 15 : 0,
        arrows: typeof window != 'undefined' && window.innerWidth > 945,
    };
    const handleAmount = () => {
        return typeof window != "undefined" && window.innerWidth > 800
    }
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <motion.p  initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: 0.8}} className={styles.smallText}>Testimonials</motion.p>
                <motion.h2 initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: 0.8}}  className={`${global.sectionTitle} ${styles.title}`}>Das sagen unsere Kunden</motion.h2>
                <motion.p  initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: 0.8}} className={styles.desc}>Erfahren Sie, was unsere Kunden über uns und ihre Erfahrungen mit unseren Produkten oder Dienstleistungen sagen.</motion.p>
            </div>
            <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: 0.4}} className={styles.right}>
                <Splide className={`${styles.slider} reviewsV2 reviews`} options={options}>
                    {MOCK_REVIEWS.map((review, i) => (
                        <SplideSlide className={styles.slide} key={i}>
                            <div className={styles.reviewCard}>
                                <div className={styles.imageWrapper}>
                                    <Image src={review.image} alt={review.name}
                                           className={styles.image}/>
                                </div>
                                <div className={styles.reviewPerson}>
                                    <div className={styles.info}>
                                        <h5 className={styles.name}>{review.name}</h5>
                                        <p className={styles.company}>{review.company}</p>
                                    </div>
                                </div>
                                <p className={styles.reviewText}>{review.text}</p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </motion.div>
        </section>
    );
};

export default ReviewsSliderV2;
