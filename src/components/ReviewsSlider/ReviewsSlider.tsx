//libs
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
const person = `${baseImageUrl2}/personIcon.svg`
import img1 from './icons/1.png'
import img2 from './icons/2.png'
import img3 from './icons/3.png'
//services
import { baseImageUrl2 } from "@/services/API";


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
const ReviewsSlider = () => {
  const options = {
    type: 'loop',
    perPage: 1,
    interval: 3000,
    speed: 1200,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    hasTrack: false
  };
  const handleAmount = () => {
    return typeof window != "undefined" && window.innerWidth > 800
  }
  return (
    <motion.section className={styles.container} initial="hidden"
      whileInView="visible"
      variants={variant}
      viewport={{ once: true, amount: handleAmount() ? 0.8 : 0.4 }}>
      <div className={styles.left}>
        <h2 className={`${global.sectionTitle} ${styles.title}`}>Das sagen unsere Kunden</h2>
        <p className={styles.desc}>Erfahren Sie, was unsere Kunden über uns und ihre Erfahrungen mit unseren Produkten oder Dienstleistungen sagen.</p>
      </div>
      <div className={styles.right}>
        <Splide className={`${styles.slider} reviews`} options={options}>
          {MOCK_REVIEWS.map((review, i) => (
            <SplideSlide className={styles.slide} key={i}>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewPerson}>
                  <Image width={64} height={64} src={review.image} alt={review.name} className={styles.image} />
                  <div className={styles.info}>
                    <h5 className={styles.name}>{review.name}</h5>
                    <p className={styles.company}>{review.company}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </motion.section>
  );
};

export default ReviewsSlider;
