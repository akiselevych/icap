//libs
import classNames from "classnames"
import { FC } from 'react'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
//types
import { AppDispatch, IworkerItem, RootStateType, IportfolioItem } from "@/types"
//components
import Image from "next/image"
//redux
import { deleteJob } from "@/reduxFolder/slices/Jobs.slice"
import { deleteWorker } from "@/reduxFolder/slices/Workers.slice"
import { deleteNews } from "@/reduxFolder/slices/News.slice"
import { deletePortfolioItem } from "@/reduxFolder/slices/Portfolio.slice"
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { IjobItem, InewsItem } from "@/types"
//images
import { baseImageUrl2 } from "@/services/API"
const clock = `${baseImageUrl2}/clock.svg`

interface Props {
  cardType: "news" | "jobs" | "workers" | "portfolio";
  data: IjobItem | InewsItem | IworkerItem | IportfolioItem;
}

const AdminPageCard: FC<Props> = ({ cardType, data }) => {
  const dispatch = useDispatch<AppDispatch>()
  const deleteJobStatus = useSelector((state: RootStateType) => state.Jobs.deleteJobStatus)

  const onDelete = () => {
    switch (cardType) {
      case "jobs":
        dispatch(deleteJob({ id: data.id }))
        break;
      case "news":
        dispatch(deleteNews({ id: data.id }))
        break;
      case "workers":
        dispatch(deleteWorker({ id: data.id }))
        break;
      case "portfolio":
        dispatch(deletePortfolioItem({ id: data.id }))
        break;
    }
  }

  const deleteBtnValue = deleteJobStatus === "error" ? "error" : deleteJobStatus === "loading" ? "Deleting..." : "Delete"
  return (
    <div className={styles.container}>
      {getContenet({ cardType, data })}
      <div className={styles.btnBlock}>
        <Link href={`/admin/${cardType}/${data.id}`} className={classNames(global.primaryButton, styles.btn)}>Edit</Link>
        <div onClick={onDelete} className={classNames(global.secondaryButton, styles.btn)}>{deleteBtnValue}</div>
      </div>
    </div>
  )
}

function getContenet({ cardType, data }: Props) {
  if (cardType === "news") {
    const { name, date, description, id, image } = data as InewsItem
    return (
      <div className={styles.newsWrapper}>
        <div className={styles.imageBlock}>
          {!!image && typeof image === "string" && <Image width={238} height={153} alt="" src={image} />}
        </div>
        <div className={styles.textBlock}>
          <div className={classNames(global.mediumTitle, styles.title)}>{name}</div>
          <div className={classNames(styles.descr)}>{description.slice(0, 298)}...</div>
          <div className={classNames(styles.date)}>{date}</div>
        </div>
      </div>
    )
  } else if (cardType === "workers") {
    //@ts-ignore
    const { name, id, image, email, position, order } = data as IworkerItem
    return (
      <div className={styles.newsWrapper}>
        <div className={styles.imageBlock}>
          {!!image && typeof image === "string" && <Image width={238} height={153} alt="" src={image} />}
        </div>
        <div className={styles.textBlock}>
          <div className={classNames(global.mediumTitle, styles.title)}>{name}</div>
          <div className={classNames(styles.descr)}>{position}</div>
          <div className={classNames(styles.date)}>{email}</div>
          <div className={classNames(styles.date)}>Order: {order}</div>
        </div>
      </div>
    )
  } else if (cardType === "portfolio") {
    //@ts-ignore
    const { name, id, image, url, order } = data as IportfolioItem
    return (
      <div className={styles.newsWrapper}>
        <div className={styles.imageBlock}>
          {!!image && typeof image === "string" && <Image width={238} height={153} alt="" src={image} />}
        </div>
        <div className={styles.textBlock}>
          <div className={classNames(global.mediumTitle, styles.title)}>{name}</div>
          <a href={url} target="_blank" className={classNames(styles.descr)}>{url}</a>
          <div className={classNames(styles.date)}>Order: {order}</div>
        </div>
      </div>
    )
  }


  const { name, city, id, description, date, type } = data as IjobItem
  return (
    <div className={styles.jobsWrapper}>
      <div className={classNames(global.mediumTitle, styles.title)}>{name}</div>
      <div className={styles.dateBlock}>
        <Image width={20} height={20} src={clock} alt={"clock"} />
        <div className={styles.Body2}>{date}</div>
      </div>
      <div className={classNames(styles.Body2, styles.optionRow)}>
        <div className={styles.city}>{city}</div>
        <div className={styles.type}>{type}</div>
      </div>
      <div className={styles.descr}>
        {description.slice(0, 298)}...
      </div>
    </div>
  )
}

export default AdminPageCard