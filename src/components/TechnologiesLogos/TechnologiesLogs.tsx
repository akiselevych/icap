//libs
import { motion } from 'framer-motion';
import { FC } from 'react'
import Image from 'next/image';
//types
import { ITranslateProp } from "@/types";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import react from "../../../public/assets/technologies/react.svg"
import redux from "../../../public/assets/technologies/redux.svg"
import phyton from "../../../public/assets/technologies/phyton.svg"
import api from "../../../public/assets/technologies/api.svg"
import django from "../../../public/assets/technologies/django.svg"
import next from "../../../public/assets/technologies/next.svg"

const logos = [react, django, phyton, next, redux, api]

interface IProps extends ITranslateProp {
}
const TechnologiesLogos: FC<IProps> = ({ t }) => {

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
      viewport={{ once: true, amount: 0.8 }}
      className={styles.container}
    >
      <div className={styles.content}>
        <h2 className={`${global.sectionTitle} ${styles.title}`}>
          Technologies we use
        </h2>
        <div className={styles.logosBlock}>
          {
            logos.map((image, i) => (
              <Image className={styles.logo} key={i} width={94} height={94} src={image} alt='' />
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}

export default TechnologiesLogos