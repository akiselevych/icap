//libs
import classNames from 'classnames';
import { FC, useMemo } from "react"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//components
import ProjectCard from "@/components/OurProjects/ProjectCard/ProjectCard";
//types 
import { ITranslateProp } from "@/types";
//images
import { baseImageUrl } from "@/services/API";
const siebenLogo = `${baseImageUrl}/LogoSieben.svg`;
const sieben = `${baseImageUrl}/Sieben.webp`;
const oegLogo = `${baseImageUrl}/LogoOEG.svg`;
const oeg = `${baseImageUrl}/OEG.webp`;
const quotelyLogo = `${baseImageUrl}/LogoQuotelly.svg`;
const quotely = `${baseImageUrl}/Quotely.webp`;
const crmLogo = `${baseImageUrl}/LogoCRM.svg`;
const crm = `${baseImageUrl}/CRM.webp`;



const OurProjects: FC<ITranslateProp> = ({ t }) => {

    const PROJECTS_MOCK = useMemo(() => {
        return [
            {
                logoURL: siebenLogo,
                logoWidth: 139,
                logoHeight: 48,
                projectPhoto: sieben,
                imgWidth: 466,
                imgHeight: 262,
                count: "01",
                title: t("ourProjectsMainPageSectionExample1"),
                desc: t("ourProjectsMainPageSectionExample2"),
                backGroundColor: "#EFFAFD",
                countColor: "#2F80ED",
                macbook: true,
            },
            {
                logoURL: oegLogo,
                logoWidth: 282,
                logoHeight: 48,
                projectPhoto: oeg,
                imgWidth: 456,
                imgHeight: 279,
                count: "02",
                title: t("ourProjectsMainPageSectionExample3"),
                desc: t("ourProjectsMainPageSectionExample4"),
                backGroundColor: "#F2FBF8",
                countColor: "#219653",
                macbook: true,
                learnMoreLink: "https://pp-manager.de/"
            },
            {
                logoURL: quotelyLogo,
                logoWidth: 82,
                logoHeight: 82,
                projectPhoto: quotely,
                imgWidth: 334,
                imgHeight: 337,
                count: "03",
                title: t("ourProjectsMainPageSectionExample5"),
                desc: t("ourProjectsMainPageSectionExample6"),
                backGroundColor: "#F8F7FD",
                countColor: "#5D5FEF",
                macbook: false,
            },
            {
                logoURL: crmLogo,
                logoWidth: 94,
                logoHeight: 32,
                projectPhoto: crm,
                imgWidth: 334,
                imgHeight: 337,
                count: "04",
                title: t("ourProjectsMainPageSectionExample7"),
                desc: t("ourProjectsMainPageSectionExample8"),
                backGroundColor: "#FEF8FB",
                countColor: "#EF5DA8",
                macbook: false,
            },

        ]
    }, [t])
    return (
        <section id="ourProjects" className={styles.container}>
            <h2 className={classNames(global.sectionTitle, styles.sectionTitle)}>{t('ourProjectsMainPageSection')}</h2>
            <div className={styles.content}>
                {PROJECTS_MOCK.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            index={index}
                            logoURL={project.logoURL}
                            projectPhoto={project.projectPhoto}
                            count={project.count}
                            title={project.title}
                            desc={project.desc}
                            backGroundColor={project.backGroundColor}
                            countColor={project.countColor}
                            macBook={project.macbook}
                            learnMoreLink={project.learnMoreLink}
                            imgHeight={project.imgHeight}
                            imgWidth={project.imgWidth}
                            logoHeight={project.logoHeight}
                            logoWidth={project.logoWidth}
                        />
                    )
                })}
            </div>
            <div className={styles.footer}>
                <p className={styles.footerText}>“{t("quoteMainPageSection1")}”</p>
                <a className={styles.footerLink}>{t("quoteMainPageSection2")}</a>
            </div>
        </section>
    )
}

export default OurProjects;