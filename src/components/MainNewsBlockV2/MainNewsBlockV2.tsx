//libs
import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";
import {motion} from "framer-motion";
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'
import '@splidejs/react-splide/css';
//components
import Skeleton from "@/components/UI/Skeleton/Skeleton";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
import EmptyListBanner from "../EmptyListBanner/EmptyListBanner";
import NewsCardV2 from "./NewsCardV2/NewsCardV2";
//@ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
//redux
import {useDispatch, useSelector} from "react-redux";
import {RootStateType, AppDispatch} from "@/types";
import {fetchNews} from "@/reduxFolder/slices/News.slice";
//images
import {baseImageUrl2} from "@/services/API"

const arr = `${baseImageUrl2}/viewMoreBlueArr.svg`
import classNames from "classnames";

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

const MainNewsBlockV2 = () => {
    const dispatch = useDispatch<AppDispatch>();
    const news = useSelector((state: RootStateType) => state.News.news);
    const loadNewsStatus = useSelector((state: RootStateType) => state.News.loadNewsStatus);

    useEffect(() => {
        if (!news.length) dispatch(fetchNews());
        //eslint-disable-next-line
    }, [])

    const desktopContent = loadNewsStatus === 'idle' ? news.concat(news).concat(news).map((card, i) =>
        <NewsCardV2 {...card} key={card.id}/>) : null
    const mobileContent = loadNewsStatus === 'idle' ? news.concat(news).concat(news).map((card, i) => {
        return (
            <SplideSlide className={`${styles.slide} news`} key={i}>
                <NewsCardV2 {...card} />
            </SplideSlide>
        )
    }) : null

    const error = loadNewsStatus === 'error' ? "error..." : null

    const desktopLoading = loadNewsStatus === 'loading' ? (new Array(3).fill(null).map((item, i) => {
        return <Skeleton className={styles.skeletCard} key={Math.random()}/>
    })) : null
    const mobileLoading = loadNewsStatus === 'loading' ? (new Array(1).fill(null).map((item, i) => {
        return <Skeleton className={styles.skeletCard} key={Math.random()}/>
    })) : null
    return (
        <section className={styles.container}>
            <div className={styles.titleBlock}>
                <motion.p initial="hidden"
                          whileInView="visible"
                          variants={variant}
                          viewport={{once: true, amount: 0.8}} className={styles.smallText}>
                    Blog
                </motion.p>
                <motion.h2 initial="hidden"
                           whileInView="visible"
                           variants={variant}
                           viewport={{once: true, amount: 0.8}} className={`${global.sectionTitle} ${styles.title}`}>
                    Entdecke die Welt des Digitalen: Faszinierende Einblicke in Web- und Mobile Entwicklung
                </motion.h2>
            </div>
            <motion.div  initial="hidden"
                         whileInView="visible"
                         variants={variant}
                         viewport={{once: true, amount: 0.5}} className={styles.content}>
                <div className={styles.desktopContainer}>
                    {desktopContent}
                    {desktopLoading}
                </div>
                <div className={styles.mobileContainer}>
                    {
                        !!mobileContent &&
                        <Splide className={`${styles.slider} news`} options={options}>
                            {mobileContent}
                        </Splide>
                    }
                    {mobileLoading}
                </div>
                {error}
                {desktopContent && mobileContent && !!!news.length && "empty List..."}
            </motion.div>
            <Link href="/news" className={classNames(global.secondaryButton, styles.btn)}>
                Alle Artikel lesen
            </Link>
        </section>
    );
};

export default MainNewsBlockV2;
