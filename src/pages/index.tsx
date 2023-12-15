//libs
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";
//components
import MainPageBanner from "@/components/MainPageBanner/MainPageBanner"
import OurServices from "@/components/OurServices/OurServices"
import Layout from "@/components/Layout/Layout"
import OurProjects from "@/components/OurProjects/OurProjects";
import MainAboutUs from "@/components/MainAboutUs/MainAboutUs";
import OurPartners from "@/components/OurPartners/OurPartners";
import MainContactForm from "@/components/MainContactForm/MainContactForm";
import React, { useEffect } from 'react';
import Script from "next/script";
import MainPageBannerV2 from "@/components/MainPageBannerV2/MainPageBannerV2";
import OurMission from "@/components/OurMission/OurMission";
import OldTrustCompanies from "@/components/TrustCompanies/OldTrustCompanies";
import UberUnsV2 from "@/components/UberUnsV2/UberUnsV2";
import WhyUsBlock from '@/components/WhyUsBlock/WhyUsBlock';
import OurServicesV2 from '@/components/OurServicesV2/OurServicesV2';
import MainOurTeamV2 from '@/components/MainOurTeamV2/MainOurTeamV2';
import CallToActionBannerV2 from '@/components/CallToActionBannerV2/CallToActionBannerV2';
import MainNewsBlockV2 from '@/components/MainNewsBlockV2/MainNewsBlockV2';
import ReviewsSliderV2 from "@/components/ReviewsSliderV2/ReviewsSliderV2";

const Index = () => {
  const { t } = useTranslation("translate")


  const [ourServicesRef, ourServicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ourProjectsRef, ourProjectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [mainAboutUsRef, mainAboutUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ourPartnersRef, ourPartnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [mainContactFormRef, mainContactFormInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    getScrollHeight()

    window.addEventListener('scroll', setScrollHeight)
    return () => {
      window.removeEventListener('scroll', setScrollHeight)
    }
    // eslint-disable-next-line 
  }, [])

  const setScrollHeight = () => {
    if (window.scrollY) {
      localStorage.setItem('MainPageScrollHeight', window.scrollY.toString())
    }
  }
  const getScrollHeight = async () => {
    const height = await localStorage.getItem('MainPageScrollHeight')
    await window.scrollTo({ top: height ? +height : 0, behavior: 'auto' })

  }

  return (
    <>
      <Head>
        <title>{t("homepage_meta_meta_title")}</title>
        <meta name="description" content={t("SEODescrHomePage")} />
      </Head>
      <Layout t={t}>
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"} />
        <Script id={"google-analytics"} strategy={"afterInteractive"}>
          {
            `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
          }
        </Script>
        <div style={{width: "100%"}}>
          <MainPageBannerV2 t={t} />
          <OurMission />
          <div style={{ marginBottom: "clamp(5rem, 3.864rem + 5.68vw, 7.5rem)" }}><OldTrustCompanies /></div>
          <UberUnsV2 />
          <WhyUsBlock />
          <OurServicesV2 />
          <MainOurTeamV2 />
          <ReviewsSliderV2/>
          <CallToActionBannerV2 />
          <MainNewsBlockV2 />
        </div>
        {/*<MainPageBanner t={t} />*/}
        {/*<motion.div*/}
        {/*  ref={ourServicesRef}*/}
        {/*  initial="hidden"*/}
        {/*  animate={ourServicesInView ? 'visible' : 'hidden'}*/}
        {/*  variants={variants}*/}
        {/*  transition={{ duration: 1 }}*/}
        {/*>*/}
        {/*  <OurServices t={t} />*/}
        {/*</motion.div>*/}
        {/*<motion.div*/}
        {/*  ref={ourProjectsRef}*/}
        {/*  initial="hidden"*/}
        {/*  animate={ourProjectsInView ? 'visible' : 'hidden'}*/}
        {/*  variants={variants}*/}
        {/*  transition={{ duration: 1 }}*/}
        {/*>*/}
        {/*  <OurProjects t={t} />*/}
        {/*</motion.div>*/}
        {/*<motion.div*/}
        {/*  ref={mainAboutUsRef}*/}
        {/*  initial="hidden"*/}
        {/*  animate={mainAboutUsInView ? 'visible' : 'hidden'}*/}
        {/*  variants={variants}*/}
        {/*  transition={{ duration: 1 }}*/}
        {/*>*/}
        {/*  <MainAboutUs t={t} />*/}
        {/*</motion.div>*/}
        {/*<motion.div*/}
        {/*  ref={ourPartnersRef}*/}
        {/*  initial="hidden"*/}
        {/*  animate={ourPartnersInView ? 'visible' : 'hidden'}*/}
        {/*  variants={variants}*/}
        {/*  transition={{ duration: 1 }}*/}
        {/*>*/}
        {/*  <OurPartners t={t} />*/}
        {/*</motion.div>*/}
        {/*<motion.div*/}
        {/*  ref={mainContactFormRef}*/}
        {/*  initial="hidden"*/}
        {/*  animate={mainContactFormInView ? 'visible' : 'hidden'}*/}
        {/*  variants={variants}*/}
        {/*  transition={{ duration: 1 }}*/}
        {/*>*/}
        {/*  <MainContactForm t={t} />*/}
        {/*</motion.div>*/}
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