"use client"
import { StaticImageData } from 'next/image'
import { FC, useEffect } from 'react'
import { motion } from 'framer-motion';
//components
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import classNames from 'classnames'
//images
import { baseImageUrl } from "@/services/API";
const closeIcon = `${baseImageUrl}/icons/close.svg`


type Props = {
  title: string,
  text: string,
  image: string,
  onClose: () => void
}

const ModalWindow: FC<Props> = ({ text, title, image, onClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }

  }, [])



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.overlay}
      onClick={onClose}
    >
      <div className={styles.container}>
        <Image onClick={onClose} className={styles.closeIcon} width={24} height={24} alt="close" src={closeIcon} />
        <Image width={188} height={217} alt={title} src={image} />
        <div className={styles.textBlock}>
          <h2 className={classNames(global.mediumTitle, styles.title)}>
            {title}
          </h2>
          <p className={classNames(global.Body2, styles.text)}>
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ModalWindow