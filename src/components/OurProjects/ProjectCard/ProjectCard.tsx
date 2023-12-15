//libs
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";

export interface ProjectCardProps {
  logoURL: string;
  logoWidth: number;
  logoHeight: number;
  projectPhoto: string;
  imgWidth: number;
  imgHeight: number;
  macBook: boolean;
  count: string;
  title: string;
  desc: string;
  backGroundColor: string;
  countColor: string;
  learnMoreLink?: string;
  index: number;
}
const AnimImage = motion(Image);

const blockAnimationTop = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
const blockAnimationLeft = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
const blockAnimationRight = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  }),
};

const ProjectCard: FC<ProjectCardProps> = ({
  logoURL,
  projectPhoto,
  count,
  title,
  desc,
  backGroundColor,
  countColor,
  macBook,
  learnMoreLink,
  index,
  imgHeight,
  imgWidth,
  logoHeight,
  logoWidth,
}) => {
  const getDots = () => {
    switch (countColor) {
      case "#2F80ED":
        return `url("/images/blueDotsBg.svg") , url("/images/blueDotsBg.svg")`;
      case "#219653":
        return `url("/images/greenDotsBg.svg") , url("/images/greenDotsBg.svg")`;
      case "#5D5FEF":
        return `url("/images/violetDotsBg.svg") , url("/images/violetDotsBg.svg")`;
      case "#EF5DA8":
        return `url("/images/redDotsBg.svg") , url("/images/redDotsBg.svg")`;
    }
  };
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.8, once: true }}
      className={styles.projectWrapper}
      style={{
        backgroundColor: backGroundColor,
        backgroundImage: getDots(),
      }}
    >
      <div className={styles.projectLogoWrapper}>
        <AnimImage
          width={logoWidth}
          height={logoHeight}
          priority
          variants={index % 2 ? blockAnimationRight : blockAnimationLeft}
          src={logoURL}
          alt={"Project Logo"}
          className={styles.projectLogo}
        />
      </div>
      <div
        style={macBook ? {} : { alignItems: "center" }}
        className={styles.projectBody}
      >
        <AnimImage
          width={imgWidth}
          height={imgHeight}
          variants={index % 2 ? blockAnimationRight : blockAnimationLeft}
          src={projectPhoto}
          alt={"Project Screenshots"}
          className={`${styles.projectSS} ${
            macBook ? styles.macbook : styles.phone
          }`}
        />
        <div className={styles.projectText}>
          <motion.div
            variants={blockAnimationTop}
            className={styles.projectCount}
            style={{ color: countColor }}
          >
            {count}
          </motion.div>
          <motion.h4
            variants={blockAnimationTop}
            className={`${global.mediumTitle} ${styles.projectTitle}`}
          >
            {title}
          </motion.h4>
          <motion.p
            variants={index % 2 ? blockAnimationLeft : blockAnimationRight}
            className={styles.projectDesc}
          >
            {desc}
          </motion.p>
          {learnMoreLink && learnMoreLink && (
            <motion.a
              target="_blank"
              href={learnMoreLink}
              variants={index % 2 ? blockAnimationLeft : blockAnimationRight}
              style={{ color: countColor }}
              className={styles.link}
            >
              Mehr erfahren
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.03369 6.31779C7.03369 6.15503 6.96858 6.00529 6.84489 5.8881L1.68864 0.836019C1.57145 0.725342 1.42822 0.666748 1.25895 0.666748C0.926921 0.666748 0.666504 0.920654 0.666504 1.2592C0.666504 1.42195 0.731608 1.57169 0.835775 1.68237L5.57536 6.31779L0.835775 10.9532C0.731608 11.0639 0.666504 11.2071 0.666504 11.3764C0.666504 11.7149 0.926921 11.9688 1.25895 11.9688C1.42822 11.9688 1.57145 11.9102 1.68864 11.7931L6.84489 6.74747C6.96858 6.62378 7.03369 6.48055 7.03369 6.31779Z"
                  fill={countColor}
                />
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
