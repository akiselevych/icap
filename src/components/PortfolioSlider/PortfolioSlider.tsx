//libs
import React from 'react';
import Image from "next/image";
import {motion} from 'framer-motion'
//@ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
//styles
import styles from './styles.module.scss'
import '@splidejs/react-splide/css';
//images
const img1 = `${baseImageUrl2}/siebenMainPage.png`
const img2 = `${baseImageUrl2}/honestMainPage.png`
const img3 = `${baseImageUrl2}/verwalterMainPage.png`
const img4 = `${baseImageUrl2}/skgMainPage.png`
const img5 = `${baseImageUrl2}/ppManagerMainPage.png`
const img6 = `${baseImageUrl2}/aberleScreen.webp`
const img7 = `${baseImageUrl2}/peklinScreen.webp`
const img8 = `${baseImageUrl2}/tedoradzeScreen.webp`
import {baseImageUrl2} from "@/services/API";


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

const PortfolioSlider = () => {
    const options = {
        type: 'loop',
        perPage: 1,
        interval: 4000,
        speed: 1000,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
    };
    return (
        <motion.section className={styles.container} initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{ once: true, amount: 0.6 }}>
            <Splide className={`${styles.slider} portfolio`} options={options}>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img1} loading={"eager"} priority alt={"Sieben Umzuege"} className={styles.slideImage}/>
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img2} loading={"eager"} priority alt={"Honest Photography"} className={styles.slideImage}/>
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img3} loading={"eager"} priority alt={"Verwalte"} className={styles.slideImage}/>
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img4} loading={"eager"} priority alt={"SKG website"} className={styles.slideImage}/>
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img5} loading={"eager"} priority alt={"PP Manager"} className={styles.slideImage}/>
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img6} loading={"eager"} priority alt={"Aberle Partner"} className={styles.slideImage}/>
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img7} loading={"eager"} priority alt={"Ivan Peklin"} className={styles.slideImage}/>
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    <Image width={1024} height={614} src={img8} loading={"eager"} priority alt={"Tedoradze website"} className={styles.slideImage}/>
                </SplideSlide>
            </Splide>
        </motion.section>
    );
};

export default PortfolioSlider;
