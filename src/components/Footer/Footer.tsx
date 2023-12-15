//libs
import { useRouter } from 'next/router'//components
import { FC } from 'react'
//components
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import { useState } from "react";
//types 
import { ITranslateProp } from '@/types'
//images
import { baseImageUrl } from "@/services/API";
const DarkLogo = `${baseImageUrl}/DarkLogo.svg`
const instagram = `${baseImageUrl}/icons/instagram.svg`
const twitter = `${baseImageUrl}/icons/twitter.svg`
const linkedin = `${baseImageUrl}/icons/linkedin.svg`
const instagramWhite = `${baseImageUrl}/icons/instagramWhite.svg`
const twitterWhite = `${baseImageUrl}/icons/twitterWhite.svg`
const linkedinWhite = `${baseImageUrl}/icons/linkedinWhite.svg`

const Footer: FC<ITranslateProp> = ({ t }) => {
  const router = useRouter()
  const [instagramColor, setInstagramColor] = useState(instagram);
  const [twitterColor, setTwitterColor] = useState(twitter);
  const [linkedinColor, setLinkedinColor] = useState(linkedin);

  const onOurServicesClick = () => {
    router.push("/#ourServices", undefined, { shallow: true });
  }
  const onOurProjectsClick = () => {
    router.push("/#ourProjects", undefined, { shallow: true });
  }
  return (
    <div className={styles.footer}>
      <div className={styles.footerBlock}>
        <div className={styles.fotterColWithLogo}>
          <Link href='/'>
            <Image width={155} height={48} src={DarkLogo} alt="logo" />
          </Link>
          <div className={styles.footerText}>{t('bottomBarMainPageSectionQuote')}</div>
          <div className={styles.socialMediaBlock}>
            <a onMouseEnter={() => setInstagramColor(instagramWhite)}
              onMouseLeave={() => setInstagramColor(instagram)}
              href='https://www.instagram.com/icap_group/' className={styles.socialMediaItem} target='_blank'>
              <Image width={24} height={24} src={instagramColor} alt="logo" />
            </a>
            <a onMouseEnter={() => setTwitterColor(twitterWhite)}
              onMouseLeave={() => setTwitterColor(twitter)}
              href='https://twitter.com/icapgroup' target='_blank' className={styles.socialMediaItem}>
              <Image width={24} height={24} src={twitterColor} alt="logo" />
            </a>
            <a onMouseEnter={() => setLinkedinColor(linkedinWhite)}
              onMouseLeave={() => setLinkedinColor(linkedin)}
              href='https://www.linkedin.com/company/icap-group-gmbh/' target='_blank' className={styles.socialMediaItem}>
              <Image width={24} height={24} src={linkedinColor} alt="logo" />
            </a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.colTitle}>{t('bottomBarMainPageSectionNavigation1')}</div>
          <div className={styles.colItems}>
            <div onClick={onOurServicesClick} className={styles.ColItem}>{t('bottomBarMainPageSectionNavigation2')}</div>
            <div onClick={onOurProjectsClick} className={styles.ColItem}>{t('bottomBarMainPageSectionNavigation3')}</div>
            <Link href='/uber-uns'>  <div className={styles.navItem}>{t('bottomBarMainPageSectionNavigation4')}</div></Link>
            <Link href='/kontakt'><div className={styles.ColItem}>{t('bottomBarMainPageSectionNavigation5')}</div></Link>
            <Link href='/impressum'>  <div className={styles.navItem}>{t('bottomBarMainPageSectionNavigation6')}</div></Link>
            <Link href='/stellenangebote'>  <div className={styles.navItem}>Stellenangebote</div></Link>
            <Link href='News'>  <div className={styles.navItem}>News</div></Link>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.colTitle}>{t('bottomBarMainPageSectionInformation1')}</div>
          <div className={styles.colItems}>
            <div className={styles.ColItem}>{t('address part 1')}<br />{t('address part 2')}<br />{t('address part 3')}</div>
            <a href="mailto: info@icapgroupgmbh.com" className={styles.ColItem}>{t('bottomBarMainPageSectionInformation3')}</a>
            <a href='tel: 07131 3829180' className={styles.ColItem}>{t('bottomBarMainPageSectionInformation4')}</a>
            <Link href='/datenschutzerklarung'><div className={styles.ColItem}>{t('bottomBarMainPageSectionInformation5')}</div></Link>
          </div>
        </div>
      </div>
      <div className={styles.footerInfo}>
        2023 © ICAP Group GmbH {t('bottomBarMainPageSection2023IcapGroup')}
      </div>
    </div>
  )
}

export default Footer