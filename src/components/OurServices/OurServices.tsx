//libs
import { useState, FC, useMemo } from "react"
import { motion } from "framer-motion";
//components
import ServiceCard from "./ServiceCard/ServiceCard";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import { baseImageUrl } from "@/services/API";
const automatizationIcoActive = `${baseImageUrl}/icons/automatizationIcoActive.svg`
const automatizationIco = `${baseImageUrl}/icons/automatizationIcon.svg`
const digitalIcon = `${baseImageUrl}/icons/digitalIcon.svg`
const digitalIconActive = `${baseImageUrl}/icons/digitalIconActive.svg`
const webIcon = `${baseImageUrl}/icons/webIcon.svg`
const webIconActive = `${baseImageUrl}/icons/webIconActive.svg`
const mobileIco = `${baseImageUrl}/icons/mobileIco.svg`
const mobileIcoActive = `${baseImageUrl}/icons/mobileIcoActive.svg`
//types 
import { ITranslateProp } from "@/types";


const OurServices: FC<ITranslateProp> = ({ t }) => {


  const cards: {
    title: string,
    subTitle: string,
    icon: string
    activeIcon: string
    path: string
  }[] = useMemo(() => {
    return [
      {
        title: t('ourServicesWebpageSection1'),
        subTitle: t('ourServicesWebpageSection2'),
        icon: webIcon,
        activeIcon: webIconActive,
        path: "/web-anwendungen"
      }
      , {
        title: t('topBarDropdownMenuWebpageButton2'),
        subTitle: t('ourServicesWebpageSectionx'),
        icon: mobileIco,
        activeIcon: mobileIcoActive,
        path: "/mobile-anwendungen"
      },
      {
        title: t('ourServicesWebpageSection5'),
        subTitle: t('ourServicesWebpageSection6'),
        icon: digitalIcon,
        activeIcon: digitalIconActive,
        path: "/digitalisierung",
      },
      {
        title: t('ourServicesWebpageSection8'),
        subTitle: t('ourServicesWebpageSection9'),
        icon: automatizationIco,
        activeIcon: automatizationIcoActive,
        path: "/automatisierung"
      }
    ]
  }, [t])

  return (
    <div
      className={styles.container}>
      <div className={`${global.sectionTitle} ${styles.title}`}>{t('ourServicesWebpage')}</div>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => <ServiceCard t={t} key={index} card={card} />)}
      </div>
    </div>
  )
}

export default OurServices