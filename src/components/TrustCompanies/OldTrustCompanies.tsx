//libs
import React from 'react';
import { baseImageUrl, baseImageUrl2 } from "@/services/API";
import { motion } from 'framer-motion'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import Image from "next/image";
//images
const siebenLogo = `${baseImageUrl2}/LogoSieben.svg`;
const oegLogo = `${baseImageUrl2}/LogoOEG.svg`;
const SKLogo = `${baseImageUrl2}/SKLogo.svg`;
const WLogo = `${baseImageUrl2}/WLogo.svg`;
const brennholzLogo = `${baseImageUrl2}/brennholzBuhler.svg`;
const verwalterLogo = `${baseImageUrl2}/verwalterFinden.svg`;
const aberleLogo = `${baseImageUrl2}/aberleSolutions.svg`;

const variant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
};


interface IPros {
  inlineStyles?: {
    [key: string]: string
  }
}
const OldTrustCompanies: React.FC<IPros> = ({ inlineStyles }) => {
  const handleAmount = () => {
    return typeof window != "undefined" && window.innerWidth > 800
  }

  return (
    <motion.section style={inlineStyles} className={styles.container} initial="hidden"
      whileInView="visible"
      variants={variant}
      viewport={{ once: true, amount: handleAmount() ? 0.8 : 0.4 }}>
      <div className={styles.wrapper}>
        {/*<h2 className={`${global.sectionTitle} ${styles.title}`}>Unternehmen gewinnen mit uns</h2>*/}
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Image height={29} width={85} src={siebenLogo} alt={"Sieben" +
              " Umzuge Logo"} className={styles.logo} /></div>
          <div className={styles.logoWrapper}>
            <Image height={28} width={172} src={oegLogo} alt={"OEG" +
              " Logo"}
              className={styles.logo} />
          </div>
          <div className={styles.logoWrapper}>
            <Image height={58} width={58} src={SKLogo} alt={"SKG Logo"}
              className={styles.logo} />
          </div>
          <div className={styles.logoWrapper}>
            <Image height={30} width={125} src={WLogo}
              alt={"Chantalle Wagne" +
                " Consulting"} className={styles.logo} />
          </div>
          <div className={styles.logoWrapper}>
            <Image height={44} width={69} src={brennholzLogo}
              alt={"Brennholz Buhler" +
                " Logo"} className={styles.logo} />
          </div>
          <div className={styles.logoWrapper}>
            <Image height={50} width={100} src={aberleLogo} alt={"Aberle" +
              " Solutions" +
              " Logo"} className={styles.logo} />
          </div>
          <div className={styles.logoWrapper}>
            <Image height={26} width={96} src={verwalterLogo}
              alt={"Verwalter" +
                " Finden" +
                " Logo"} className={styles.logo} />
          </div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logoSlide}>
            <Image src={siebenLogo} alt={"Our Partner Logo"} width={138} height={48} />
            <Image src={oegLogo} alt={"Our Partner Logo"} width={286} height={48} />
            <Image src={SKLogo} alt={"Our Partner Logo"} width={96} height={96} />
            <Image src={WLogo} alt={"Our Partner Logo"} width={198} height={48} />
            <Image height={44} width={69} src={brennholzLogo} alt={"Brennholz Buhler Logo"} />
            <Image height={50} width={100} src={aberleLogo} alt={"Aberle Solutions Logo"} />
            <Image height={26} width={96} src={verwalterLogo} alt={"Verwalter Finden Logo"} />
            <Image src={siebenLogo} alt={"Our Partner Logo"} width={138} height={48} />
            <Image src={oegLogo} alt={"Our Partner Logo"} width={286} height={48} />
            <Image src={SKLogo} alt={"Our Partner Logo"} width={96} height={96} />
            <Image src={WLogo} alt={"Our Partner Logo"} width={198} height={48} />
            <Image height={44} width={69} src={brennholzLogo} alt={"Brennholz Buhler Logo"} />
            <Image height={50} width={100} src={aberleLogo} alt={"Aberle Solutions Logo"} />
            <Image height={26} width={96} src={verwalterLogo} alt={"Verwalter Finden Logo"} />
            <Image src={siebenLogo} alt={"Our Partner Logo"} width={138} height={48} />
            <Image src={oegLogo} alt={"Our Partner Logo"} width={286} height={48} />
            <Image src={SKLogo} alt={"Our Partner Logo"} width={96} height={96} />
            <Image src={WLogo} alt={"Our Partner Logo"} width={198} height={48} />
            <Image height={44} width={69} src={brennholzLogo} alt={"Brennholz Buhler Logo"} />
            <Image height={50} width={100} src={aberleLogo} alt={"Aberle Solutions Logo"} />
            <Image height={26} width={96} src={verwalterLogo} alt={"Verwalter Finden Logo"} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default OldTrustCompanies;
