//libs
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import styles from "./styles.module.scss";
//images
import like from "../../../public/assets/icons/like.svg";
import user from "../../../public/assets/icons/user.svg";
import notebook from "../../../public/assets/seopage/notebook.png";
import background from "../../../public/assets/seopage/seoActionBack.svg";
import suLogo from "../../../public/assets/seopage/suLogo.svg";

const SeoAction = () => {
  const variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
  };
  return (
    <section className={styles.container}>
      <motion.h1 initial="hidden"
                 whileInView="visible"
                 variants={variants}
                 viewport={{once: true, amount: 0.8}} className={styles.mainTitle}>Our Work in Action!</motion.h1>
      <motion.div initial="hidden"
                  whileInView="visible"
                  variants={variants}
                  viewport={{once: true, amount: 0.3}} className={styles.cards}>
        <div className={styles.textCard}>
          <div className={styles.info}>
            <Image src={like} alt="like" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                Dominance in Local Search Rankings
              </h2>
              <p className={styles.text}>
                A focused local SEO strategy propelled SU to the first page in
                search results for moving services within the target city. This
                top ranking significantly boosted their local customer base,
                reinforcing their position as market leaders in the region.
              </p>
            </div>
          </div>
          <hr />
          <div className={styles.info}>
            <Image src={user} alt="user" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                Improved Online Engagement and Conversion Rates
              </h2>
              <p className={styles.text}>
                By optimizing SU web content and implementing custom link
                building strategy, not only enhanced the search rankings but
                also the site&apos;s user engagement. This led to the increase in
                overall click-through rates and an improvement in online
                conversion rates, turning website visits into actionable
                customer inquiries.
              </p>
            </div>
          </div>
          <hr />
          <div className={styles.results}>
            <h2 className={styles.title}>Results</h2>
            <div className={styles.blocks}>
              <div className={styles.block}>
                <p className={styles.procents}>48%</p>
                <p className={styles.result}>Search engine traffic increased</p>
              </div>
              <div className={styles.block}>
                <p className={styles.procents}>62%</p>
                <p className={styles.result}>Rose to Google&apos;s top 30</p>
              </div>
              <div className={styles.block}>
                <p className={styles.procents}>X4</p>
                <p className={styles.result}>Increased organic traffic</p>
              </div>
              <div className={styles.block}>
                <p className={styles.procents}>1100</p>
                <p className={styles.result}>Referring links</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageCard}>
          <Image
            className={styles.background}
            src={background}
            alt="background"
            priority
            
          />
          <Image className={styles.suLogo} src={suLogo} alt="su_logo" />
          <Image
            className={styles.content}
            src={notebook}
            alt="notebook&Phone"
            width={438}
            height={238}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SeoAction;
