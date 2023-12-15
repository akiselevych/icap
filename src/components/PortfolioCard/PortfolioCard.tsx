//components
import Image from 'next/image'
//libs
import { FC } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { ITranslateProp } from '@/types';
//images
import { baseImageUrl2 } from "@/services/API"
const arr = `${baseImageUrl2}/viewMoreBlueArr.svg`

interface PortfolioCardProps extends ITranslateProp {
  image: string,
  title: string,
  link: string,
}

const PortfolioCard: FC<PortfolioCardProps> = ({ title, image, link, t }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} width={325} height={208} loading="eager" src={image} alt={title} />
        <div className={styles.textBlock}>
          <div className={global.smallTitle}>{title}</div>
          <a href={link} target='_blank' className={styles.cardLink}>
            {t("visitWebsite")}
            <Image width={16} height={16} src={arr} alt={"arrow"} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioCard