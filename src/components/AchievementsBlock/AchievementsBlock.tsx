//libs
import { motion } from 'framer-motion';
import { FC, Fragment } from 'react'
import CountUp from "react-countup";
//types
import { ITranslateProp } from "@/types";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"

interface IProps extends ITranslateProp {
  data: {
    value: number,
    text: string,
    sufix?: string
    prefix?: string
  }[]
}

const AchievementsBlock: FC<IProps> = ({ t, data }) => {

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
      <h2 className={`${global.sectionTitle} ${styles.title}`}>
        Our achievements
      </h2>
      <p className={styles.subtitle}>
        We always strive for excellence!
      </p>
      <div className={styles.achivementsBlock}>
        {
          data.map((achievement, i) => (
            <Fragment key={i}>
              <div className={styles.achievement} >
                <div className={styles.value}>
                  <CountUp
                    suffix={achievement.sufix}
                    prefix={achievement.prefix}
                    start={0}
                    end={achievement.value}
                    className={styles.value}
                    enableScrollSpy={true}
                  />

                </div>
                <div className={styles.text}>
                  {achievement.text}
                </div>
              </div>
              {
                i !== data.length - 1 && <span className={styles.divider}></span>
              }
            </Fragment>
          ))
        }
      </div>
    </motion.section>
  )
}

export default AchievementsBlock