//components
import Layout from "@/components/Layout/Layout"
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard"
import Head from "next/head";
import Image from "next/image";
import EmptyListBanner from "@/components/EmptyListBanner/EmptyListBanner"
//utils
import sortObjByOrder from "@/utils/sortObjByOrder";
//libs
import classNames from "classnames"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';
import React, { useMemo, useEffect } from "react";
//redux
import { fetchWorkers } from "@/reduxFolder/slices/Workers.slice";
//types
import { RootStateType, AppDispatch, IworkerItem } from '@/types';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import { baseImageUrl, baseImageUrl2 } from "@/services/API";

//images
const spinnerImage = `${baseImageUrl2}/spinner.svg`
import ErrorBanner from "@/components/ErrorBanner/ErrorBanner";
import Script from "next/script";



const AboutUsPage = () => {
  const { t } = useTranslation("translate")
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const dispatch = useDispatch<AppDispatch>()
  const workers = useSelector((state: RootStateType) => state.Workers.workers)
  const loadWorkersSatatus = useSelector((state: RootStateType) => state.Workers.loadWorkersSatatus)

  useEffect(() => {
    if (!workers.length) dispatch(fetchWorkers())
    //eslint-disable-next-line
  }, [])

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };
  const variants1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      }
    },
  };




  const spinner = loadWorkersSatatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadWorkersSatatus === 'error' ? <ErrorBanner t={t} /> : null
  const content = loadWorkersSatatus === 'idle' ? sortObjByOrder<IworkerItem>(workers).map(({ email, name, position, image }, index) => (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      variants={variants1}
      viewport={{ once: true, amount: 0.8 }}
    >
      <EmployeeCard email={email} name={name} image={image} role={position !== "Others" ? t(position) : undefined} />
    </motion.div>
  )) : null



  return (
    <>
      <Head>
        <meta name="description" content="Erfahren Sie mehr über ICAP Group GmbH, unser Engagement und unsere Expertise. Wir sind Ihr vertrauenswürdiger Partner für innovative Lösungen in den Bereichen Automatisierung, Digitalisierung und mehr." />
      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-uber-uns"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerUberUns = window.dataLayerUberUns || [];
                    function gtag(){dataLayerUberUns.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <motion.div
          style={{ width: "100%" }}
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <div className={styles.container}>
            <div className={classNames(global.pageTitle, styles.title)}>{t("bottomBarMainPageSectionNavigation4")}</div>
            <div
              className={styles.cardContaier}>
              {spinner}
              {content}
              {error}
              {content && !workers.length && <EmptyListBanner t={t} />}
            </div>
          </div>
        </motion.div>

      </Layout></>
  )
}

//@ts-ignore
export async function getStaticProps({ locale }) {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['translate'])),
      // Will be passed to the page component as props
    },
  }
}

export default AboutUsPage