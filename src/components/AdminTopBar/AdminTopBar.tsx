//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import classNames from "classnames"
//cpmponents
import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
//images
import { baseImageUrl2 } from "@/services/API"
const addIcon = `${baseImageUrl2}/addPlusIcon.svg`

interface Props {
  page: "news" | "jobs" | "workers" | "portfolio" | "static-content";
  isSpecial?: boolean;
}

const AdminTopBar: FC<Props> = ({ page, isSpecial }) => {

  return (
    <div className={styles.topBlock}>
      <h1 className={classNames(global.pageTitle, styles.title)}>
        Create a new item:
      </h1>
      <div className={styles.toolBar}>
        <div className={styles.pagePicker}>
          <Link className={classNames(styles.link, page === "jobs" ? styles.active : '')} href={"/admin/jobs"}>Vacancies</Link>
          <span></span>
          <Link className={classNames(styles.link, page === "news" ? styles.active : '')} href={"/admin/news"}>News</Link>
          <span></span>
          <Link className={classNames(styles.link, page === "workers" ? styles.active : '')} href={"/admin/workers"}>Our team</Link>
          <span></span>
          <Link className={classNames(styles.link, page === "portfolio" ? styles.active : '')} href={"/admin/portfolio"}>Portfolio</Link>
            <span></span>
          <Link className={classNames(styles.link, page === "static-content" ? styles.active : '')} href={"/admin/static-content"}>Static Content</Link>
        </div>
        {
          !isSpecial && <Link href={`/admin/${page}/new`} className={styles.addBtn}>
            <Image width={24} height={24} alt="add new" src={addIcon} />
            Add new
          </Link>
        }
      </div>
    </div>
  )
}

export default AdminTopBar;