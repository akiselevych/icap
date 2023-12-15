//libs
import Image from "next/image";
import { FC, useMemo } from "react"
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";
//components
import SiebenCard from "@/components/SiebenShow/SiebenCard/SiebenCard";
//types
import { ITranslateProp } from "@/types"
//images
import { baseImageUrl } from "@/services/API";
const siebenLogo = `${baseImageUrl}/LogoSieben.svg`
const sieben1 = `${baseImageUrl}/SiebenImages/sieben.webp`;
const sieben2 = `${baseImageUrl}/SiebenImages/sieben2.webp`;



const SiebenShow: FC<ITranslateProp> = ({ t }) => {

    const STEPS = useMemo(() => {
        return [
            {
                image: sieben1,
                imgWidth: 499,
                imgHeight: 419,
                title: t("mobileAppsExample2"),
                desc: t("mobileAppsExample3"),
            },
            {
                image: sieben2,
                imgWidth: 503,
                imgHeight: 419,
                title: t("mobileAppsExample4"),
                desc: t("mobileAppsExample5"),
            },
        ]
    }, [t])
    return (
        <section className={styles.container}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>{t("repeated-blocks_heading_h2_1")}</h2>

            <div className={styles.content}>
                {STEPS.map(({ image, title, desc, imgHeight, imgWidth }, i) => <SiebenCard imgHeight={imgHeight} imgWidth={imgWidth} countColor="#2F80ED" key={i} image={image} title={title} desc={desc} index={i} />)}
            </div>

            <div className={styles.lastBlock}>
                <h4 className={`${global.sectionTitle} ${styles.blockTitle}`}>{t("mobileAppsResult1")}</h4>
                <div className={styles.blockContent}>
                    <div className={styles.arrowVert}></div>
                    <Image width={138} height={48} loading="eager" src={siebenLogo} alt={"Sieben logo"} />
                    <p className={styles.blockText}>{t("mobileAppsResult2Part1")} <br /> <span>{t("mobileAppsResult2Part2")}</span></p>
                    <i className={styles.arrow}></i>
                    <p className={styles.blockTextSec}><span>{t("mobileAppsResult2Part3")}</span></p>
                </div>
            </div>
        </section>
    );
};

export default SiebenShow;