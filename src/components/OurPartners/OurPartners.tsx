//libs
import Image from "next/image";
import React, { FC } from "react"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//types 
import { ITranslateProp } from "@/types";
//images
import {baseImageUrl, baseImageUrl2} from "@/services/API";
const siebenLogo = `${baseImageUrl2}/LogoSieben.svg`;
const oegLogo = `${baseImageUrl2}/LogoOEG.svg`;
const SKLogo = `${baseImageUrl2}/SKLogo.svg`;
const WLogo = `${baseImageUrl2}/WLogo.svg`;
const brennholzLogo = `${baseImageUrl2}/brennholzBuhler.svg`;
const verwalterLogo = `${baseImageUrl2}/verwalterFinden.svg`;
const aberleLogo = `${baseImageUrl2}/aberleSolutions.svg`;
const OurPartners: FC<ITranslateProp> = ({ t }) => {
    return (
        <div className={styles.container}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>{t("ourPartnersMainPageSection")}</h2>
            <div className={styles.content}>
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
        </div>
    );
};

export default OurPartners;