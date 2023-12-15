import { FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion';
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
import { ITranslateProp } from '@/types'
import classNames from 'classnames';
import Link from "next/link";

interface Props {
  text: string;
  image: StaticImageData | string
  number: number

}

const cardVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
};



const Card: FC<Props> = ({ text, image, number }) => {

  return (
    <motion.div
      className={classNames(styles.motionDiv, styles.conrainer)}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.8 }}>
      <div className={styles.topBlock}>
        <Image className={styles.image} width={120} height={120} alt='' src={image} />
        <p className={styles.text}>
          {text}
        </p>
      </div>

    </motion.div>
  )
}

export default Card