//libs
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";

interface ICTA {
  background: string;
  title: string;
  textColor: string;
  buttonText: string;
  buttonType: "primaryButton" | "secondaryButton";
  image: StaticImageData;
  mobileImage: StaticImageData;
  imageWidth?: number;
  imageHeight?: number;
  mobileImageWidth?: number;
  mobileImageHeight?: number;
}

const Cta = ({
  background,
  title,
  textColor,
  buttonText,
  buttonType,
  image,
  mobileImage,
  imageWidth,
  imageHeight,
  mobileImageWidth,
  mobileImageHeight,
}: ICTA) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
      className={styles.container}
      style={{ background: background }}
    >
      <div className={styles.content}>
        <h1 className={styles.title} style={{ color: textColor }}>
          {title}
        </h1>
        <Link
          href={"/kontakt"}
          style={
            buttonType === "secondaryButton" ? { color: "#1F2125" } : undefined
          }
          className={`${`${
            buttonType === "primaryButton"
              ? global.primaryButton
              : global.secondaryButton
          }`} ${styles.btn}`}
        >
          {buttonText}
        </Link>
      </div>
      <Image
        className={styles.image}
        src={image}
        width={imageWidth}
        height={imageHeight}
        alt="image"
      />
      <Image
        className={styles.mobileImage}
        src={mobileImage}
        width={mobileImageWidth}
        height={mobileImageHeight}
        alt="mobile_image"
      />
    </motion.section>
  );
};

export default Cta;
