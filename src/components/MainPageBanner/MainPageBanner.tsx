//libs
import { motion, useAnimation } from "framer-motion";
import { FC } from "react";
//components
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";
//images
import { baseImageUrl } from "@/services/API";
const businessSoftware = `${baseImageUrl}/businessSoftware.webp`;
import {ITranslateProp, RootStateType} from "@/types";
import {useSelector} from "react-redux";

const textAnimation = {
  hidden: {
    x: -600,
    opacity: 0,
  },
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      delay: 0.3,
    },
  }),
};

const imageAnimation = {
  hidden: {
    x: 600,
    opacity: 0,
  },
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      delay: 0.15,
    },
  }),
};

const AnimImage = motion(Image);

const MainPageBanner: FC<ITranslateProp> = ({ t }) => {
  const images = useSelector((state: RootStateType) => state.ImagesContent.images);
  return (
    <>
      <motion.div
        initial={"hidden"}
        animate="visible"
        viewport={{ once: true }}
        className={styles.container}
      >
        <motion.div className={styles.col} variants={textAnimation}>
          <div className={styles.textBlock}>
            <motion.h1 className={`${global.pageTitle} ${styles.title}`}>
              {t("homepage_heading_h1_1").split(" ")[0]} <br />
              {t("homepage_heading_h1_1").split(" ")[1]} <br />
              <span className={styles.textSpan}>
                {t("homepage_heading_h1_1").split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>
            <motion.div className={styles.subTitle}>
              {t("mainMenuWebpageBanner2")}
            </motion.div>
          </div>
          <Link href="/kontakt" className={styles.btn}>
            <motion.div className={global.primaryButton}>
              {t("mainMenuWebpageBanner3")}
            </motion.div>
          </Link>
        </motion.div>
        <div className={styles.col}>
          <AnimImage
            width={558}
            height={502}
            priority
            loading="eager"
            variants={imageAnimation}
            initial={{ y: -10, x: 600, opacity: 0 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
            className={styles.banner}
            src={images.find(p => p.id === 1)?.images.find(i => i.id === 1)?.image as string}
            alt="businessSoftware"
          />
        </div>
        <div className={styles.radial1}></div>
        <div className={styles.radial2}></div>
        <div className={styles.radial3}></div>
      </motion.div>
    </>
  );
};

export default MainPageBanner;
