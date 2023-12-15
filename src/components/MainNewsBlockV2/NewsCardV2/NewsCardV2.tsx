import { FC } from 'react'
import { InewsItem } from '@/types'
//libs
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'
//images
import { baseImageUrl2 } from "@/services/API"
const arr = `${baseImageUrl2}/viewMoreBlueArr.svg`

const NewsCardV2: FC<Partial<InewsItem>> = ({ name, description, slug, image, date }) => {
  const shortDescr = description && (description.length > 198 ? description.slice(0, 198) + "..." : description).replace(/<\/?bold>|<br \/>/g, "")
  const url = `/news/${slug}`
  return (
    <div className={styles.card} >
      <div className={styles.imageWrapper}>
        <Image className={styles.image} width={260} height={268} src={image as string} alt={name as string} />
      </div>
      <div className={styles.textBlock}>
        <Link href={url} className={classNames(global.mediumTitle)}>
          {name}
        </Link>
        <p className={styles.position}>
          {shortDescr}
        </p>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.date}>
          {date}
        </div>
        <Link href={url} className={styles.cardLink}>
          Mehr erfahren
          <Image width={16} height={16} src={arr} alt={"arrow"} />
        </Link>
      </div>
    </div>
  )
}

export default NewsCardV2