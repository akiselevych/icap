//libs
import { FC, useMemo } from "react"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//components
import Card from "@/components/OurProcess/Card/Card";
//types
import { ITranslateProp } from "@/types";
//images
import { baseImageUrl } from "@/services/API";
const logo1 = `${baseImageUrl}/icons/processIcon1.svg`
const logo2 = `${baseImageUrl}/icons/processIcon2.svg`
const logo3 = `${baseImageUrl}/icons/processIcon3.svg`
const logo4 = `${baseImageUrl}/icons/processIcon4.svg`
const logo5 = `${baseImageUrl}/icons/processIcon5.svg`
const logo6 = `${baseImageUrl}/icons/processIcon6.svg`



const OurProcess: FC<ITranslateProp> = ({ t }) => {

    const PROCESS = useMemo(() => {
        return [
            {
                logo: logo1,
                title: t("AutomationHowDoesItWork2"),
                desc: t("AutomationHowDoesItWork3"),
            },
            {
                logo: logo2,
                title: t("repeated-blocks_heading_h4_2"),
                desc: t("AutomationHowDoesItWork5"),
            },
            {
                logo: logo3,
                title: t("repeated-blocks_heading_h4_3"),
                desc: t("AutomationHowDoesItWork7"),
            },
            {
                logo: logo4,
                title: t("repeated-blocks_heading_h4_4"),
                desc: t("AutomationHowDoesItWork9"),
            },
            {
                logo: logo5,
                title: t("repeated-blocks_heading_h4_5"),
                desc: t("AutomationHowDoesItWork11"),
            },
            {
                logo: logo6,
                title: t("repeated-blocks_heading_h4_6"),
                desc: t("AutomationHowDoesItWork13"),
            },
        ]
    }, [t])

    return (
        <section className={styles.container}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>{t("repeated-blocks_heading_h2_1")}</h2>
            <div className={styles.content}>
                {PROCESS.map(({ logo, title, desc }, i) => (
                    <Card key={i} logo={logo} title={title} desc={desc} />
                ))}
            </div>
        </section>
    );
};

export default OurProcess;