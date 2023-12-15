//libs
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useMemo } from 'react';
//cpmponents
import Layout from "@/components/Layout/Layout"
import ShowEfficiency from "@/components/ShowEfficiency/ShowEfficiency";
import AnwendungenPageBanner from "@/components/AnwendungenPageBanner/AnwendungenPageBanner";
import OurProcess from "@/components/OurProcess/OurProcess";
import Head from "next/head";
//images
import { baseImageUrl } from "@/services/API";
const img1 = `${baseImageUrl}/SiebenImages/sieben3.webp`
const img2 = `${baseImageUrl}/SiebenImages/sieben4.webp`
const img3 = `${baseImageUrl}/SiebenImages/sieben5.webp`
const hero = `${baseImageUrl}/DigAnw.webp`;

import Analysis from "@/components/Analysis/Analysis";
import Script from "next/script";



const Index = () => {
  const { t } = useTranslation("translate")

  const CARDS = useMemo(() => {
    return [
      {
        image: img1,
        title: t("DigitalizationExample2"),
        text: t("DigitalizationExample3"),
        imgWidth: 535,
        imgHeight: 419,
      },
      {
        image: img2,
        title: t("DigitalizationExample4"),
        text: t("DigitalizationExample5"),
        imgWidth: 535,
        imgHeight: 419,

      },
      {
        image: img3,
        title: t("DigitalizationExample6"),
        text: t("DigitalizationExample7"),
        imgWidth: 535,
        imgHeight: 419,
      }
    ]
  }, [t])


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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <Head>
        <title>{t("digitalization_meta_meta_title")}</title>
        <meta name="description" content={t("SEODescrDigitalisierungPage")} />
      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-digitalisierung"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerDigitalisierung = window.dataLayerDigitalisierung || [];
                    function gtag(){dataLayerDigitalisierung.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <AnwendungenPageBanner
          title={t("topBarDropdownMenuWebpageButton3")}
          desc={t("DigitalizationSection3")}
          image={hero}
          imgHeight={408}
          imgWidth={287}
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
          <ShowEfficiency cards={CARDS}
            countColor='#2F80ED'
            title={t("repeated-blocks_heading_h2_1")}
            bgColor="#EFFAFD" />
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

export default Index