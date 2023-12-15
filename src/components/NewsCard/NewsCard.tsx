//libs
import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import classNames from 'classnames';
//images
import { baseImageUrl2 } from "@/services/API"
const arr = `${baseImageUrl2}/viewMoreBlueArr.svg`
//types
import { InewsItem } from '@/types';

interface Iprops extends Partial<InewsItem> {
  t: (arg: string) => string;
}


const NewsCard: FC<Iprops> = ({ name, date, description, id, image, t, slug }) => {

  const url = `/news/${slug}`


  const shortDescr = description && (description.length > 198 ? description.slice(0, 198) + "..." : description).replace(/<\/?bold>|<br \/>/g, "")
  return (
    <div className={styles.container}>
      <div className={styles.imageBlock}>
        {!!image && typeof image === "string" && <Image alt={name ?? ""} src={image} width={500} height={280} />}
      </div>
      <Link href={url} className={classNames(global.mediumTitle, styles.title)}>
        {name}
      </Link>
      <div className={classNames(styles.descr, styles.Body2)}>
        {shortDescr?.replace(/<bold>.*?<\/bold>|<br \/>/g, '').slice(0, 200)}
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.date}>{date}</div>
        <Link href={url} className={styles.cardLink}>
          {t("ourServicesWebpageSection3")}
          <Image width={16} height={16} src={arr} alt={"arrow"} />
        </Link>
      </div>
    </div>
  )
}
export default NewsCard

