//libs
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useMemo } from "react"
//components
import Layout from "@/components/Layout/Layout"
import OurProcess from "@/components/OurProcess/OurProcess";
import ShowEfficiency from "@/components/ShowEfficiency/ShowEfficiency";
import Analysis from "@/components/Analysis/Analysis";
import Head from "next/head";
import AnwendungenPageBanner from "@/components/AnwendungenPageBanner/AnwendungenPageBanner";
//images
import { baseImageUrl } from "@/services/API";
import Script from "next/script";
const automatisierungBanner = `${baseImageUrl}/automatisierungBanner.webp`;
const img1 = `${baseImageUrl}/OegImages/OEGOneProjectStep1.webp`
const img2 = `${baseImageUrl}/OegImages/OEGOneProjectStep2.webp`
const img3 = `${baseImageUrl}/OegImages/OEGOneProjectStep3.webp`
const img4 = `${baseImageUrl}/OegImages/OEGOneProjectStep4.webp`
const img5 = `${baseImageUrl}/OegImages/OEGOneProjectStep5.webp`


const AutomatisierungPage = () => {
  const { t } = useTranslation("translate")

  const [ourProcessRef, ourProcessInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ShowEfficiencyRef, ShowEfficiencyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [AnalysisRef, AnalysisInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const CARDS = useMemo(() => {
    return [
      {
        image: img1,
        title: t("AutomationExample2"),
        text: t("AutomationExample3"),
        imgWidth: 456,
        imgHeight: 276,
      },
      {
        image: img2,
        title: t("AutomationExample4"),
        text: t("AutomationExample5"),
        imgWidth: 456,
        imgHeight: 276,
      },
      {
        image: img3,
        title: t("AutomationExample6"),
        text: t("AutomationExample7"),
        imgWidth: 456,
        imgHeight: 276,
      },
      {
        image: img4,
        title: t("AutomationExample8"),
        text: t("AutomationExample9"),
        imgWidth: 456,
        imgHeight: 276,
      },
      {
        image: img5,
        title: t("AutomationExample10"),
        text: t("AutomationExample11"),
        imgWidth: 456,
        imgHeight: 276,
      }
    ];
  }, [t])
  return (
    <>
      <Head>
        <title>{t("automation_meta_meta_title")}</title>
        <meta name="description" content={t("SEODescrAutomatisierungPage")} />
      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-automatisierung"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerAutomatisierung = window.dataLayerAutomatisierung || [];
                    function gtag(){dataLayerAutomatisierung.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <AnwendungenPageBanner
          title={t('topBarDropdownMenuWebpageButton4')}
          desc={t('AutomationSection4')}
          image={automatisierungBanner}
          imgHeight={408}
          imgWidth={371}
        />
        <motion.div
          ref={ourProcessRef}
          initial="hidden"
          animate={ourProcessInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <OurProcess t={t} />
        </motion.div>
        <motion.div
          ref={ShowEfficiencyRef}
          initial="hidden"
          animate={ShowEfficiencyInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <ShowEfficiency
            macbook={true}
            countColor='#219653'
            title={t("automation_heading_h2_1")}
            bgColor="#F2FBF8"
            cards={CARDS} />
        </motion.div>
        <motion.div
          ref={AnalysisRef}
          initial="hidden"
          animate={AnalysisInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Analysis t={t} />
        </motion.div>
      </Layout>
    </>
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


export default AutomatisierungPage