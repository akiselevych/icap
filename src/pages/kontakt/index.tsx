//components
import Image from 'next/image'
import Layout from '@/components/Layout/Layout'
import StartProjectForm from '@/components/StartProjectForm/StartProjectForm'
import Head from 'next/head'
//libs
import { motion } from 'framer-motion';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import { baseImageUrl } from "@/services/API";
import Script from "next/script";
import React from "react";
const VolkerHütter = `${baseImageUrl}/employeesImages/EllipseVolkerHutter.webp`

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5,
    }
  }
};

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    duration: 3,
  }
};

const ContactPage = () => {
  const { t } = useTranslation("translate")

  return (
    <>
      <Head>
        <title>{t("SEOTitleKontactPage")}</title>
        <meta name="description" content={t("SEODescrKontactPage")} />
      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-kontakt"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerKontakt = window.dataLayerKontakt || [];
                    function gtag(){dataLayerKontakt.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <motion.ul
          className={styles.container}
          variants={container}
          initial="hidden"
          animate="visible">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className={styles.calendlyBlock}>
            <motion.li variants={item} className={styles.infoBlock}>
              <div className={styles.infoRow}>ICAP Group GmbH</div>
              <div className={styles.infoRow}>{t("address part 1")}</div>
              <div className={styles.infoRow}>{t("address part 2")}</div>
              <div className={styles.infoRow}>{t("address part 3")}</div>
            </motion.li>
            <motion.li variants={item} className={styles.contactPersonBlock}>
              <Image width={310} height={310} className={styles.image} alt="Volker Hütter" src={VolkerHütter} style={{ borderRadius: "50%", width: "256px", height: "256px" }} />
              <div className={styles.infoRow}>Volker Hütter</div>
              <a target="_blank" href='https://calendly.com/icapgroup/digitalisierung-automatisierung' className={classNames(global.secondaryButton, styles.btn)}>{t("bottomBarMainPageSectionNavigation5")}</a>
            </motion.li>
          </motion.ul>
          <motion.li variants={item} className={styles.startProjectBlock}>
            <StartProjectForm t={t} />
          </motion.li>
        </motion.ul>
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

export default ContactPage