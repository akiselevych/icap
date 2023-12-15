//libs
import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import classNames from 'classnames';
//types
import { IjobItem } from '@/types';
//images
import { baseImageUrl2 } from "@/services/API"
const arr = `${baseImageUrl2}/viewMoreBlueArr.svg`
const clock = `${baseImageUrl2}/clock.svg`


const JobPositionCard: FC<Partial<IjobItem>> = ({ name, date, city, type, description, id, slug }) => {

  const url = `/stellenangebote/${slug}`
  return (
    <div className={styles.container}>
      <div className={styles.titelRow}>
        <Link href={url} className={global.mediumTitle}>
          {name}
        </Link>
        <div className={styles.dateBlock}>
          <Image width={20} height={20} src={clock} alt={"clock"} />
          <div className={styles.Body2}>{date}</div>
        </div>
      </div>
      <div className={classNames(styles.Body2, styles.optionRow)}>
        <div className={styles.city}>{city}</div>
        <div className={styles.type}>{type}</div>
      </div>
      <div className={classNames(styles.description, styles.Body2)}>
        {description?.replace(/<bold>.*?<\/bold>|<br \/>/g, '').slice(0, 200)}...
      </div>
      <Link href={url} className={styles.cardLink}>
        Website besuchen
        <Image width={16} height={16} src={arr} alt={"arrow"} />
      </Link>
    </div>
  )
}

export default JobPositionCard