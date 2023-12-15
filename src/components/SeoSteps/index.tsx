//libs
import React from "react";
import Image, {StaticImageData} from "next/image";
import {motion} from "framer-motion";
//styles
import styles from "./styles.module.scss";
//images
import message from "../../../public/assets/icons/message.svg";
import settings from "../../../public/assets/icons/settings.svg";
import key from "../../../public/assets/icons/key.svg";
import magic from "../../../public/assets/icons/magic.svg";
import pencil from "../../../public/assets/icons/pencil.svg";
import git from "../../../public/assets/icons/git.svg";
import background from "../../../public/assets/seopage/seoStepsBack.png";

interface ICardsInfo {
  id: number;
  icon: StaticImageData;
  title: string;
  text: string;
}

const cardsInfo: ICardsInfo[] = [
  {
    id: 1,
    icon: message,
    title: "Technical Website Analysis",
    text: "Our team conducts a comprehensive technical SEO analysis of your website to identify quick wins and untapped potential.",
  },
  {
    id: 2,
    icon: settings,
    title: "Authority Strategy & Link Building",
    text: "We leverage our link-building expertise to boost your website's authority and credibility in your industry by acquiring high-quality backlinks.",
  },
  {
    id: 3,
    icon: key,
    title: "Keyword Research",
    text: "Our research experts analyze your website, competitors, and keyword tools to pinpoint valuable keywords and opportunities for improvement.",
  },
  {
    id: 4,
    icon: magic,
    title: "On-Page SEO",
    text: "We fine-tune your on-page elements, including meta tags, headings, and images, to align with your chosen keywords.",
  },
  {
    id: 5,
    icon: pencil,
    title: "Content Optimization",
    text: "We propose technical and content-focused optimizations to enhance your website's performance and user experience",
  },
  {
    id: 6,
    icon: git,
    title: "Monitoring & Reporting",
    text: "We continuously monitor your website's progress, providing regular reports and making adjustments to ensure ongoing SEO success.",
  },
];

const SeoSteps = () => {
  const variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
  };

  const variantsCard = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      }
    },
  };
  return (
    <section className={styles.container}>
      <Image priority className={styles.background} src={background} alt="background" width={1222} height={542} />
      <motion.h1 initial="hidden"
                 whileInView="visible"
                 variants={variants}
                 viewport={{once: true, amount: 0.8}} className={styles.mainTitle}>
        Step-by-step Search Engine Optimization With ICAP
      </motion.h1>
      <div className={styles.cards}>
        {cardsInfo.map((info) => {
          return (
            <motion.div initial="hidden"
                        whileInView="visible"
                        variants={variantsCard}
                        viewport={{once: true, amount: 0.8}} key={info.id} className={styles.card}>
              <Image src={info.icon} alt="card_icon" />
              <div className={styles.content}>
                <h2 className={styles.title}>{info.title}</h2>
                <p className={styles.text}>{info.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SeoSteps;
