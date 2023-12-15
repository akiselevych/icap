//libs
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";
import React, { useMemo } from "react";
import Head from "next/head";
//types
import { OurWorkProps } from "@/components/OurWork/OurWork";
//components
import Layout from "@/components/Layout/Layout";
import AchievementsBlock from "@/components/AchievementsBlock/AchievementsBlock";
import ReviewsSlider from "@/components/ReviewsSlider/ReviewsSlider";
import TechnologiesLogos from "@/components/TechnologiesLogos/TechnologiesLogs";
import Faq from "@/components/Faq/Faq";
import NewPageBanner from "@/components/NewPageBanner";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import WebAppMainSteps from "@/components/WebAppMainSteps/WebAppMainSteps";
import FreeCall from "@/components/FreeCall";
import OurWork from "@/components/OurWork/OurWork";
import Cta from "@/components/Cta";
//images
import { baseImageUrl } from "@/services/API";
import pageBanner from "../../../public/assets/webpage/webpageBanner.png"
import service1 from "../../../public/assets/servicesIcons/sevice1.svg"
import service2 from "../../../public/assets/servicesIcons/sevice2.svg"
import service3 from "../../../public/assets/servicesIcons/sevice3.svg"
import service4 from "../../../public/assets/servicesIcons/sevice4.svg"
import service5 from "../../../public/assets/servicesIcons/sevice5.svg"
import service6 from "../../../public/assets/servicesIcons/sevice6.svg"
import notebook from "../../../public/assets/webpage/notebook.svg";
import mobileNotebook from "../../../public/assets/webpage/mobileNotebook.svg";
import elipses from "../../../public/assets/webpage/elipses.svg";
import mobileElipses from "../../../public/assets/webpage/mobileElipses.svg";
import like from "../../../public/assets/OurWork/pen.svg"
import laptop from "../../../public/assets/OurWork/laptop.svg"
import lock from "../../../public/assets/OurWork/lock.svg"
import pplogo from "../../../public/assets/OurWork/PPmanagerLogo.svg"
import ppBanner from "../../../public/assets/OurWork/ppBanner.png"

import oeg1 from "../../../public/assets/webpage/oeg1.png"
import oeg2 from "../../../public/assets/webpage/oeg2.png"
import oeg3 from "../../../public/assets/webpage/oeg3.png"
import oeg4 from "../../../public/assets/webpage/oeg4.png"
import icon1 from "../../../public/assets/webpage/icon1.svg"
import icon2 from "../../../public/assets/webpage/icon2.svg"
import icon3 from "../../../public/assets/webpage/icon3.svg"
import icon4 from "../../../public/assets/webpage/icon4.svg"
//styles
import global from "@/styles/global.module.scss";

const hero = `${baseImageUrl}/WebAnw.webp`;

const questions = [
  {
    text: "How long does it typically take to develop a web app?",
    answer:
      "Web app development timelines vary based on complexity, but basic apps take a few months, and complex projects can take longer.",
  },
  {
    text: "What is the cost associated with web app development?",
    answer:
      "The cost associated with web app development can vary significantly depending on factors such as the complexity of the app, the features and functionality required, the technology stack used, the development team's location and expertise, and project management expenses.",
  },
  {
    text: "Do you provide ongoing maintenance and support for web apps after development?",
    answer:
      "Yes, we provide comprehensive ongoing maintenance and support services for web apps developed by our team. Our dedicated team of experienced IT professionals is committed to ensuring the continued functionality, security, and performance of your web application.",
  },
  {
    text: "What technologies do you use for web app development?",
    answer:
      "We utilize a range of modern technologies tailored to each project's needs, including HTML, CSS, JavaScript, and various backend frameworks and databases.",
  },
  {
    text: " Can you integrate existing systems into the new web app?",
    answer:
      "Absolutely, we specialize in integrating existing systems and databases into new web applications to ensure seamless functionality and data consistency.",
  },
  {
    text: "How can I order web application development service?",
    answer:
      "To order our web app development services, you can contact us {посилання на сторінку з контакт формою} through our website, email, or phone. We will discuss your requirements, provide a detailed proposal, and guide you through the ordering process.",
  },
];

const WebAnwendungen = () => {
  const { t } = useTranslation("translate");
  const achivements = useMemo(() => {
    return [
      {
        value: 10,
        sufix: "+",
        text: "Clients",
      },
      {
        value: 20000,
        prefix: ">",
        sufix: " €",
        text: "Average additional profit per year",
      },
      {
        value: 100,
        sufix: "%",
        text: "Customer retention rate",
      },
    ];
    // eslint-disable-next-line
  }, [t]);
  const services = useMemo(() => {
    return [
      {
        icon: service1,
        title: "Custom Web Application Development",
        text: "Our custom web app development services are focused on the meticulous creation of tailored digital solutions that perfectly correspond with your business needs.",
      },
      {
        icon: service2,
        title: "Website Design and Development",
        text: "We specialize in Website Design and Development, creating visually appealing and user-friendly websites suited to your goals and brand. Our experienced team guarantees maximum functionality and rapid response times for successful web solutions, assisting you in building a robust online presence.",
      },
      {
        icon: service3,
        title: "E-Commerce Development",
        text: "We are experts in E-Commerce Development, building comprehensive online shopping platforms and e-commerce websites. Our expertise covers various areas, such as well-crafted product catalogs, reliable and secure payment gateways, effective inventory management systems, and smooth order processing.",
      },
      {
        icon: service4,
        title: "Optimization of an existing website/app",
        text: "Our optimization service is designed to enhance the performance and user experience of your existing website or application. We systematically analyze, fine-tune, and implement improvements to boost loading speeds, user engagement, and overall efficiency.",
      },
      {
        icon: service5,
        title: "Search Engine Optimization ",
        text: "Our aim at Search Engine Optimization (SEO) is to increase the visibility of your website on search engines such as Google. We put into practice proven techniques to raise your website's visibility online, increase organic traffic, and boost your search engine rankings.",
      },
      {
        icon: service6,
        title: "Website Performance Optimization",
        text: "Our website performance optimization solution aims to improve your website's overall efficiency, speed, and responsiveness. We use cutting-edge techniques to optimize code, reduce file sizes, and apply best practices so your website loads faster and offers an outstanding user experience.",
      },
    ];
    // eslint-disable-next-line
  }, [t]);
  const STEPS = useMemo(() => {
    return [
      {
        image: oeg1,
        icon: icon1,
        imgWidth: 485,
        imgHeight: 293,
        title: "Planning and Conceptualization",
        desc: "We establish goals for the project at this stage and conduct market research to get new ideas and insights. We select the right technological stack along with creating a comprehensive project roadmap.",
      },
      {
        image: oeg2,
        icon: icon2,
        imgWidth: 485,
        imgHeight: 293,
        title: "Design and Prototyping",
        desc: "Throughout this step, we focus on UX/UI design, wireframing, and prototypes to deliver a user-friendly, aesthetically pleasing, and responsive web application. We prioritize design improvement prompted by feedback.",
      },
      {
        image: oeg3,
        icon: icon3,
        imgWidth: 485,
        imgHeight: 293,
        title: "Development and Implementation",
        desc: "We perform backend and front-end web application development and database design and implement security measures for data protection and user authentication.",
      },
      {
        image: oeg4,
        icon: icon4,
        imgWidth: 485,
        imgHeight: 293,
        title: "Deployment and Maintenance",
        desc:
          "Testing: We conduct comprehensive tests, addressing functionality, usability, performance," +
          " and security to identify and resolve any issues. Deployment: We handle the deployment of your" +
          " web app to a production server or cloud platform with secure configurations. Monitoring and Maintenance: We set up monitoring tools for performance tracking and regularly update the application.",
      },
    ];
    // eslint-disable-next-line
  }, [t])

  const ourWorkProps: OurWorkProps = useMemo(() => {
    return {
      t,
      title: "Our Work in Action!",
      dataBlock: [
        {
          type: "default",
          icon: laptop,
          title: "Dominance in Local Search Rankings",
          text: "Our web app offers comprehensive functionality to streamline your business operations. With our platform, you can efficiently manage your schedule with our integrated calendar system, generate estimates, automate billing, and receive automatic order confirmations. Convenience and effectiveness all at one location."
        },
        {
          type: "default",
          icon: laptop,
          title: "Dominance in Local Search Rankings",
          text: "Our web app offers comprehensive functionality to streamline your business operations. With our platform, you can efficiently manage your schedule with our integrated calendar system, generate estimates, automate billing, and receive automatic order confirmations. Convenience and effectiveness all at one location."
        },
        // {
        //   type: "default",
        //   icon: laptop,
        //   title: "Dominance in Local Search Rankings",
        //   text: "Our web app offers comprehensive functionality to streamline your business operations. With our platform, you can efficiently manage your schedule with our integrated calendar system, generate estimates, automate billing, and receive automatic order confirmations. Convenience and effectiveness all at one location."
        // },
        //EXAMPLE FOR OTHER PAGES
        {
          type: "results",
          title: "Results",
          resultsInfo: [
            {
              title: "Reduction in Errors",
              value: "98%"
            },
            {
              title: "Сost savings per year",
              value: "7500$",
            },
            {
              title: "Lower Administrative Costs",
              value: <>
                30%
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 18L13.5 8.5L8.5 13.5L1 6" stroke="#0E65F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17 18H23V12" stroke="#0E65F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </>
            },
            {
              title: "Systems integration",
              value: "100%",
            },
          ]
        }
      ],
      rightCol: {
        logo: pplogo,
        centralImage: ppBanner,
        bgColor: "rgba(130, 180, 101, 0.17)"
      }
    }
    // eslint-disable-next-line
  }, [t])
  return (
    <>
      <Head>
        <title>{t("web-applications_meta_meta_title")}</title>
        <meta name="description" content={t("SEODescrWebAnwendungenPage")} />
      </Head>
      <Script
        src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"}
        strategy={"afterInteractive"}
      />
      <Script
        id={"google-analytics-web-anwendungen"}
        strategy={"afterInteractive"}
      >
        {`
                    window.dataLayerWebAnwendungen = window.dataLayerWebAnwendungen || [];
                    function gtag(){dataLayerWebAnwendungen.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `}
      </Script>
      <Layout t={t}>
        <NewPageBanner
          title={
            <>
              <span style={{ color: "#0e65f1" }} className={global.pageTitle}>
                Software
              </span>{" "}
              Development Services
            </>
          }
          desc={<>Crafting Innovative Web Solutions!</>}
          image={pageBanner}
        />
        <AchievementsBlock t={t} data={achivements} />
        <ServicesBlock
          title="Software Development Services We Offer"
          t={t}
          data={services}
        />
        <Cta
          background="#F7F7F7"
          title="Empower Your Vision: Let's Build Your Web App Together!"
          textColor="#1F2125"
          buttonText="Book consultation"
          buttonType="primaryButton"
          image={notebook}
          mobileImage={mobileNotebook}
        />
        <ReviewsSlider />
        <TechnologiesLogos t={t} />
        <OurWork {...ourWorkProps} />
        <WebAppMainSteps steps={STEPS} t={t} />
        <Cta
          background="#0E65F1"
          title="Your path to the next market success begins with us. Reach out today and let's make it happen together."
          textColor="#fff"
          buttonText="Book consultation"
          buttonType="secondaryButton"
          image={elipses}
          mobileImage={mobileElipses}
        />
        <Faq {...{ questions, title: "FAQ's" }} />
        <FreeCall link={"https://calendly.com/icapgroup/app"} />
        {/* <AnwendungenPageBanner
          title={t("topBarDropdownMenuWebpageButton1")}
          desc={t("webAppsSection1")}
          image={hero}
          imgHeight={400}
          imgWidth={362}
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
          ref={AnalysisRef}
          initial="hidden"
          animate={AnalysisInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Analysis t={t} />
        </motion.div> */}
      </Layout>
    </>
  );
};

//@ts-ignore
export async function getStaticProps({ locale }) {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ["translate"])),
      // Will be passed to the page component as props
    },
  };
}

export default WebAnwendungen;
