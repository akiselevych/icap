//libs
import { motion } from 'framer-motion';
import { FC } from 'react'
import Image, { StaticImageData } from 'next/image';
//types
import { ITranslateProp } from "@/types";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"


interface IProps extends ITranslateProp {
  title: string;
  data: {
    icon: string | StaticImageData;
    title: string;
    text: string
  }[]
}
const ServicesBlock: FC<IProps> = ({ title, data }) => {

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
  };

  const variantsCard = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
      viewport={{ once: true, amount: 0.1 }}
      className={styles.container}
    >
      <motion.h2 initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.8 }} className={`${global.sectionTitle} ${styles.title}`}>
        {title}
      </motion.h2>
      <div className={styles.cardsBlock}>
        {
          data.map((card, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variantsCard}
              viewport={{ once: true, amount: 0.8 }}
              key={i}
              className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image className={styles.icon} width={40} height={40} src={card.icon} alt='' />
              </div>
              <h5 className={styles.cardTitle}>
                {card.title}
              </h5>
              <p className={styles.cardText}>
                {card.text}
              </p>
            </motion.div>
          ))
        }
      </div>
    </motion.section>
  )
}

export default ServicesBlock