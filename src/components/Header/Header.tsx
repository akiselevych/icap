//libs
import { useEffect, useState } from "react"
import classNames from 'classnames';
import { useRouter } from 'next/router'
//components
import Image from "next/image"
import Link from "next/link"
//components
import MobileMenu from "../MobileMenu/MobileMenu";
import { Twirl as Hamburger } from 'hamburger-react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { FC } from "react";
//types
import {AppDispatch, ITranslateProp} from "@/types";
//images
import { baseImageUrl } from "@/services/API";
import {useDispatch} from "react-redux";
import {fetchAllImages} from "@/reduxFolder/slices/ImagesContent.slice";
const logo = `${baseImageUrl}/Logo.svg`

const Header: FC<ITranslateProp> = ({ t }) => {
  const [isDesctopMenuOpen, setIsDesctopMenuOpen] = useState(false)
  const [isPortfolioMenuOpen, setIsPortfolioMenuOpen] = useState(false)
  const [isAboutUsMenuOpen, setIsAboutUsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllImages())
    //eslint-disable-next-line
  }, []);


  const onOurServicesClick = () => {
    router.push("/#ourServices", undefined, { shallow: true });
  }
  const onOurProjectsClick = () => {
    router.push("/#ourProjects", undefined, { shallow: true });
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [isMobileMenuOpen])


  return (
    <header className={classNames(styles.header, isMobileMenuOpen ? styles.mobileIsOpen : '')}>
      <div className={styles.topBar}>
        <Link className={styles.logoLink} href='/'> <Image width={156} height={48} src={logo} alt="logo" /></Link>
        <div className={styles.navBlock}>
          {!isMobileMenuOpen &&
            <>
              <nav className={styles.nav}>
                <div onMouseEnter={() => setIsDesctopMenuOpen(true)} onMouseLeave={() => setIsDesctopMenuOpen(false)}
                  className={classNames(styles.navItem, styles.navMenu)}
                  style={isDesctopMenuOpen ? { color: "#0E65F1" } : {}}>
                  <div onClick={onOurServicesClick} className={styles.menuButton}>
                    {t('topBarDropdownMenuWebpage')}
                    <div className={styles.dropdownArrowWrapper} style={{ transform: isDesctopMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0719 14C10.2754 14 10.4626 13.9186 10.6091 13.764L16.9242 7.31868C17.0625 7.1722 17.1357 6.99317 17.1357 6.78158C17.1357 6.36654 16.8184 6.04102 16.3952 6.04102C16.1917 6.04102 16.0046 6.1224 15.8662 6.2526L10.0719 12.1771L4.27766 6.2526C4.13933 6.1224 3.96033 6.04102 3.74866 6.04102C3.32549 6.04102 3.00816 6.36654 3.00816 6.78158C3.00816 6.99316 3.08141 7.1722 3.22783 7.31868L9.53483 13.764C9.68945 13.9186 9.86849 14 10.0719 14Z" fill={isDesctopMenuOpen ? "#0E65F1" : "#2E2E2E"} />
                      </svg>
                    </div>
                  </div>
                  {isDesctopMenuOpen &&
                    <div className={styles.menuListWraper}>
                      <div className={styles.menuList}>
                        <Link href='/web-anwendungen'>
                          <div className={styles.menuListItem}>{t('topBarDropdownMenuWebpageButton1')}</div>
                        </Link>
                        <Link href='/mobile-anwendungen'>
                          <div className={styles.menuListItem}>{t('topBarDropdownMenuWebpageButton2')}</div>
                        </Link>
                        <Link href='/digitalisierung'>
                          <div className={styles.menuListItem}>{t('topBarDropdownMenuWebpageButton3')}</div>
                        </Link>
                        <Link href='/automatisierung'>
                          <div className={styles.menuListItem}>{t('topBarDropdownMenuWebpageButton4')}</div>
                        </Link>
                        <Link href={"/website"}
                              className={classNames(styles.navItem, styles.navMenu)}
                              style={isPortfolioMenuOpen ? { color: "#0E65F1" } : {}}>
                          {t("topBarDropdownMenuWebpageButton5")}
                        </Link>
                      </div>
                    </div>}
                </div>
                <div onMouseEnter={() => setIsAboutUsMenuOpen(true)} onMouseLeave={() => setIsAboutUsMenuOpen(false)}
                  className={classNames(styles.navItem, styles.navMenu)}
                  style={isAboutUsMenuOpen ? { color: "#0E65F1" } : {}}>
                  <Link href='/uber-uns' className={styles.menuButton}>
                    {t('bottomBarMainPageSectionNavigation4')}
                    <div className={styles.dropdownArrowWrapper} style={{ transform: isAboutUsMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0719 14C10.2754 14 10.4626 13.9186 10.6091 13.764L16.9242 7.31868C17.0625 7.1722 17.1357 6.99317 17.1357 6.78158C17.1357 6.36654 16.8184 6.04102 16.3952 6.04102C16.1917 6.04102 16.0046 6.1224 15.8662 6.2526L10.0719 12.1771L4.27766 6.2526C4.13933 6.1224 3.96033 6.04102 3.74866 6.04102C3.32549 6.04102 3.00816 6.36654 3.00816 6.78158C3.00816 6.99316 3.08141 7.1722 3.22783 7.31868L9.53483 13.764C9.68945 13.9186 9.86849 14 10.0719 14Z" fill={isPortfolioMenuOpen ? "#0E65F1" : "#2E2E2E"} />
                      </svg>
                    </div>
                  </Link>
                  {isAboutUsMenuOpen &&
                    <div className={styles.menuListWraper}>
                      <div className={styles.menuList}>
                        <Link href='/stellenangebote'>
                          <div className={styles.menuListItem}>Stellenangebote</div>
                        </Link>
                        <Link href='/news'>
                          <div className={styles.menuListItem}>News</div>
                        </Link>
                      </div>
                    </div>}
                </div>
                {/* <Link href='/uber-uns'>  <div className={styles.navItem}>{t("bottomBarMainPageSectionNavigation4")}</div></Link> */}
              </nav>
              <LanguageSwitcher />
              <Link href='/kontakt'><div className={classNames(global.primaryButton, styles.contactBtn)}>{t('topBarMenuWebpageButton3')}</div></Link>
            </>
          }
          <div className={classNames(styles.mobileMenuBtn)} >
            <Hamburger
              size={24}
              toggled={isMobileMenuOpen}
              toggle={(setIsMobileMenuOpen)} />
          </div>
        </div >
      </div>
      {isMobileMenuOpen && <MobileMenu t={t} onClose={() => setIsMobileMenuOpen(false)} />}
    </header>
  )
}


export default Header