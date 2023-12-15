//libs
import Script from "next/script";
import React, {useMemo} from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//components
import Layout from "@/components/Layout/Layout"
import Head from "next/head";
import NewPageBanner from "@/components/NewPageBanner";
import AchievementsBlock from "@/components/AchievementsBlock/AchievementsBlock";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import Cta from "@/components/Cta";
//images
import pageBanner from "../../../public/assets/mobilepage/mobilePageBanner.png"
import service1 from "../../../public/assets/mobilepage/service1.svg";
import service2 from "../../../public/assets/mobilepage/service2.svg";
import service3 from "../../../public/assets/mobilepage/service3.svg";
import service4 from "../../../public/assets/mobilepage/service4.svg";
import service5 from "../../../public/assets/mobilepage/service5.svg";
import service6 from "../../../public/assets/mobilepage/service6.svg";
import ctaImage from "../../../public/assets/mobilepage/ctaImage.png";
import ctaMobileImage from "../../../public/assets/mobilepage/ctaMobileImage.png";
//styles
import global from "@/styles/global.module.scss"




const MobileAnwendungen = () => {
  const { t } = useTranslation("translate")
    const achivements = useMemo(() => {
        return [
            {
                value: 10,
                sufix: "+",
                text: "Clients"
            },
            {
                value: 20000,
                prefix: ">",
                sufix: " €",
                text: "Average additional profit per year"
            },
            {
                value: 100,
                sufix: "%",
                text: "Customer retention rate"
            }
        ]
        // eslint-disable-next-line
    }, [t])
    const services = useMemo(() => {
        return [
            {
                icon: service1,
                title: "iOS App Development",
                text: "We can develop innovative and tailored mobile applications for iOS, leveraging cutting-edge technologies and best practices in user experience design."
            },
            {
                icon: service2,
                title: "iOS App Development Android App Development",
                text: "We specialize in Android app development, creating custom applications for a wide range of Android devices, from smartphones to tablets and beyond."
            },
            {
                icon: service3,
                title: "Cross-Platform App Development",
                text: "We excel in cross-platform app development, allowing you to reach a broader audience with a single codebase. Our approach saves time and resources while ensuring a consistent user experience and functionality across platforms."
            },
            {
                icon: service4,
                title: "Mobile UI/UX Design",
                text: "Our Mobile UI/UX Design services are dedicated to creating intuitive and visually stunning interfaces tailored for mobile devices. We prioritize user-centered design principles to ensure your app delivers an exceptional and engaging user experience."
            },
            {
                icon: service5,
                title: "Mobile App Testing and Quality Assurance",
                text: "We conduct rigorous testing across various devices and scenarios, addressing functionality, performance, security, and compatibility. Our meticulous approach ensures your app is bug-free, responsive, and fully prepared for success in the dynamic mobile landscape."
            },
            {
                icon: service6,
                title: "Mobile App Maintenance and Support",
                text: "We offer ongoing support, updates, and maintenance services to keep your mobile apps up-to-date, secure, and compatible with evolving operating systems and devices. Your app's performance and security are our priorities, ensuring a seamless user experience as technology evolves."
            },
        ]
        // eslint-disable-next-line
    }, [t])
  return (
    <>
      <Head>
        <title>{t("mobile-applications_meta_meta_title")}</title>
        <meta name="description" content={t("SEODescrMobileAnwendungenPage")} />
      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"} />
      <Script id={"google-analytics-mobile-anwendungen"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerMobileAnwendungen = window.dataLayerMobileAnwendungen || [];
                    function gtag(){dataLayerMobileAnwendungen.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <NewPageBanner
            title={
          <>
            <span style={{color: "#0e65f1"}} className={global.pageTitle}>Mobile App</span> Development Services
          </>
            }
            desc={
          <>
            Transforming ideas into user-centric mobile apps that delight and deliver!
          </>
            }
            image={pageBanner}
        />
          <AchievementsBlock data={achivements} t={t}/>
          <ServicesBlock title={"Mobile App Development Services We Offer"} data={services} t={t}/>
          <Cta
              background={"#F7F7F7"}
              title={"Let's develop an app with a million downloads together!"}
              textColor={"#1F2125"}
              buttonText={"Book consultation"}
              buttonType={"primaryButton"}
              image={ctaImage}
              mobileImage={ctaMobileImage}
              imageWidth={345}
              imageHeight={240}
              mobileImageWidth={229}
              mobileImageHeight={261}
          />
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

export default MobileAnwendungen;