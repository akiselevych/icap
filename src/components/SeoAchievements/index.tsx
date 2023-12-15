import React from "react";
import styles from "./styles.module.scss";
import line from "../../../public/assets/icons/line.svg";
import background from "../../../public/assets/seoAchievBack.png";
import mobileBackground from "../../../public/assets/seopage/seoAchievMobileBack.png";
import Image from "next/image";

interface ICardsInfo {
  id: number;
  rating: string;
  label: string;
}

const cardsInfo: ICardsInfo[] = [
  {
    id: 1,
    rating: "100+",
    label: "Satisfied Customers",
  },
  {
    id: 2,
    rating: "3.000+",
    label: "Pages Optimized",
  },
  {
    id: 3,
    rating: "100%",
    label: "Customer Retention Rate",
  },
];

const SeoAchievements = () => {
  return (
    <section className={styles.container}>
      <Image className={styles.background} src={background} alt="background" priority />
      <Image className={styles.mobileBackground} src={mobileBackground} alt="background" priority />
      <div className={styles.titles}>
        <h1 className={styles.title}>Our Achievements</h1>
        <h2 className={styles.subtitle}>We always strive for excellence!</h2>
      </div>
      <div className={styles.cards}>
        {cardsInfo.map((info) => {
          return (
            <div key={info.id} className={styles.gappedFlex}>
              <div className={styles.card}>
                <span className={styles.rating}>{info.rating}</span>
                <p className={styles.label}>{info.label}</p>
              </div>
              {info.id !== cardsInfo.length && <Image className={styles.verticalLine} src={line} alt="line" />}
              {info.id !== cardsInfo.length && <hr className={styles.horizontalLine} /> }
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SeoAchievements;
