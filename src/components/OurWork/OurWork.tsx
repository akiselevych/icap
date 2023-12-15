//libs
import { motion } from 'framer-motion';
import { FC, Fragment, ReactNode } from 'react'
import CountUp from "react-countup";
//components
import Image from 'next/image';
//types
import { ITranslateProp } from "@/types";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
import { StaticImageData } from 'next/image';

export interface OurWorkProps extends ITranslateProp {
  title: string
  dataBlock: {
    type: "default" | "results"
    icon?: string | StaticImageData
    title: string
    text?: string;
    resultsInfo?:
    {
      title?: string
      value?: ReactNode
    }[]
  }[]
  rightCol: {
    logo: string | StaticImageData
    centralImage: string | StaticImageData
    bgColor: string,
    styles?: {
      [key: string]: string
    }
  }
}

const OurWork: FC<OurWorkProps> = ({ title, dataBlock, rightCol }) => {

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.container}
    >
      <h2 className={`${global.sectionTitle} ${styles.title}`}>
        {title}
      </h2>
      <div className={styles.content}>
        <div className={styles.leftCol}>
          {
            dataBlock.map((block, i) => (
              <Fragment key={i}>
                {
                  block.type === "default" ?
                    <div key={i} className={styles.defaultBlock}>
                      <div className={styles.iconWrapper}>
                        <Image width={24} height={24} src={block.icon || ''} alt={block.title} className={styles.icon} />
                      </div>
                      <div className={styles.textInfo}>
                        <h6 className={styles.textInfo_title}>
                          {block.title}
                        </h6>
                        <p className={styles.textInfo_text}>
                          {block.text}
                        </p>
                      </div>
                    </div>
                    :
                    <div className={styles.resultsBlock}>
                      <h6 className={styles.resultsInfo_title}>
                        {block.title}
                      </h6>
                      <div className={styles.resultsList}>
                        {
                          block.resultsInfo && block.resultsInfo.map((info, i) => (
                            <div key={i} className={styles.resultsItem}>
                              <div className={styles.value}>
                                {info.value}
                              </div>
                              <p>{info.title}</p>
                            </div>
                          ))

                        }
                      </div>
                    </div>
                }
                {
                  i !== dataBlock.length - 1 &&
                  <span className={styles.divider} />
                }
              </Fragment>
            ))
          }
        </div>
        <div style={{
          backgroundColor: rightCol.bgColor,
          ...rightCol.styles
        }}
          className={styles.rightCol}>
          <Image height={58} width={200} alt="" src={rightCol.logo} className={styles.logo} />
          <Image alt="" src={rightCol.centralImage} className={styles.centralImage} />
        </div>
      </div>
    </motion.section>
  )
}

export default OurWork