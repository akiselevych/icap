//components
import Link from "next/link"
import Image from "next/image"
//libs
import { useRouter } from 'next/router'//components
import { FC } from "react"
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { ITranslateProp } from "@/types";


interface IProps extends ITranslateProp {
  onClose: () => void
}

const MobileMenu: FC<IProps> = ({ onClose, t }) => {
  const router = useRouter()
  const onOurServicesClick = () => {
    router.push("/#ourServices", undefined, { shallow: true });
    onCloseClick()
  }
  const onOurProjectsClick = () => {
    router.push("/#ourProjects", undefined, { shallow: true });
    onCloseClick()
  }

  const onCloseClick = () => {
    onClose()
    document.body.style.overflow = 'visible'
  }

  return (
    <div className={styles.conatiner}>
      <div className={styles.menuList}>
        <div onClick={onOurServicesClick} className={styles.menuItem}>{t('topBarDropdownMenuWebpage')}</div>
        <div onClick={onOurProjectsClick} className={styles.menuItem}>{t('topBarMenuWebpageButton1')}</div>
        <Link href='/uber-uns'>
          <div className={styles.menuItem}>{t('topBarMenuWebpageButton2')}</div>
        </Link>
        <Link href={"/web-anwendungen"}>
          <div className={styles.menuItem}>{t('topBarDropdownMenuWebpageButton1')}</div>
        </Link>
        <Link href={"/mobile-anwendungen"}>
          <div className={styles.menuItem}>{t('topBarDropdownMenuWebpageButton2')}</div>
        </Link>
        <Link href={"/digitalisierung"}>
          <div className={styles.menuItem}>{t('topBarDropdownMenuWebpageButton3')}</div>
        </Link>
        <Link href={"/automatisierung"}>
          <div className={styles.menuItem}>{t('topBarDropdownMenuWebpageButton4')}</div>
        </Link>
        <Link href={"/website"}>
          <div className={styles.menuItem}>{t('topBarDropdownMenuWebpageButton5')}</div>
        </Link>
        <Link href='/portfolio'>
          <div className={styles.menuItem}>{t('topBarMenuWebpagePortfolio')}</div>
        </Link>
        <Link href='/stellenangebote'>
          <div className={styles.menuItem}>Stellenangebote</div>
        </Link>
        <Link href='/news'>
          <div className={styles.menuItem}>News</div>
        </Link>
      </div>
      <div className={styles.contactBlock}>
        <Link href="/kontakt">
          <div className={global.primaryButton}>{t('topBarMenuWebpageButton3')}</div>
        </Link>
      </div>
    </div >
  )
}

export default MobileMenu
