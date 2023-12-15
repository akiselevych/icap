//libs
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
//components
import Layout from "@/components/Layout/Layout";
import NewPageBanner from "../../components/NewPageBanner";
import SeoAchievements from "@/components/SeoAchievements";
import SeoAction from "@/components/SeoAction";
import NewTrustCompanies from "@/components/SeoTrustUsCompanies/NewTrustCompanies";
import SeoGuarantees from "@/components/SeoGuarantees/SeoGuarantees";
import SeoPricePlan from "@/components/SeoPricePlan/SeoPricePlan";
import FreeCall from "@/components/FreeCall";
import Faq from "@/components/Faq/Faq";
import ReviewsSlider from "@/components/ReviewsSlider/ReviewsSlider";
import AchievementsBlock from "@/components/AchievementsBlock/AchievementsBlock";
import SeoSteps from "@/components/SeoSteps";
import Cta from "@/components/Cta";
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";
//images
import bannerImage from "../../../public/assets/seopage/seoPageBanner2.png";
import charts from "../../../public/assets/seopage/charts.svg";
import mobileCharts from "../../../public/assets/seopage/mobileCharts.svg";

const Page = () => {
  const { t } = useTranslation("translate");

  const faqs = [
    {
      text: "What is SEO?",
      answer:
        "Search engine optimization, or SEO, is the process of making a website or online content more visible and highly ranked on search engine results pages (SERPs). It entails a variety of tactics and methods, including as link development, technological improvements, content improvement, and keyword optimization, all with the goal of drawing natural (unpaid) traffic from search engines like Google.",
    },
    {
      text: "What is SEO content?",
      answer:
        "Written, graphic, or multimedia content produced with the intention of raising a website's search engine results and drawing in natural traffic is referred to as SEO content. It is purposefully designed to include pertinent keywords and phrases that people frequently type into search engines.",
    },
    {
      text: "How does SEO work?",
      answer:
        "Technical SEO, content, and website authority are all factors in SEO. To rank better in the search results, you need to focus on each of these three pillars. It is highly unlikely that you will rank well in the search engines if you leave one or two unchecked.",
    },
  ];

  const achivements = [
    {
      value: 100,
      sufix: "+",
      text: "Satisfied Customers",
    },
    {
      value: 3000,
      sufix: "+",
      text: "Pages Optimized",
    },
    {
      value: 100,
      sufix: "%",
      text: "Customer Retention Rate",
    },
  ];
  return (
    <>
      <Layout t={t}>
        <NewPageBanner
          title={
            <>
              Search Engine Optimization{" "}
              <span
                style={{ color: "#0e65f1" }}
                className={`${global.pageTitle}`}
              >
                Services
              </span>
            </>
          }
          desc={
            <>
              Maximize your online presence with our SEO services.
              <br /> Get your business noticed!
            </>
          }
          image={bannerImage}
        />
        <AchievementsBlock data={achivements} t={t} />
        <SeoGuarantees />
        <Cta
          background="#F7F7F7"
          title="Do You Want an Appointment With One of Our SEO Specialists?"
          textColor="#1F2125"
          buttonText="Get in contact"
          buttonType="primaryButton"
          image={charts}
          mobileImage={mobileCharts}
        />
        <SeoSteps />
        <SeoPricePlan />
        <SeoAction />
        <FreeCall link={"https://calendly.com/icapgroup/google-seite-1"} />
        <ReviewsSlider />
        <Faq questions={faqs} title={"FAQ'S"} />
      </Layout>
    </>
  );
};
// <section className={styles.container}>
//     <div className={styles.left}>
//         <h1 className={`${global.pageTitle} ${styles.title}`}>Search Engine Optimization <span
//             className={`${styles.colored} ${global.pageTitle}`}>Services</span></h1>
//         <p className={styles.desc}>Maximize your online presence with our SEO services.
//             <br/> Get your business noticed!</p>
//         <Link href={"/kontakt"} className={`${global.primaryButton} ${styles.btn}`}>Get in contact</Link>
//     </div>
//     <div className={styles.right}>
//         <Image src={img} alt={"Search Engine Optimization Services"} className={styles.image}/>
//     </div>
// </section>

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

export default Page;
