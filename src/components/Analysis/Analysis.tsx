//libs
import { FC } from "react"
import Link from "next/link";
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";
//types
import { ITranslateProp } from "@/types";

const Analysis: FC<ITranslateProp> = ({ t }) => {
    return (
        <div className={styles.container}>
            <h4 className={`${styles.title} ${global.sectionTitle}`}>{t("repeated-blocks_heading_h4_7")}</h4>
            <p className={styles.desc}>
                {t("AnalisysDesc")}
            </p>
            <Link href="/kontakt">
                <div className={global.primaryButton}>{t("AnalisysDescBtn")}</div>
            </Link>
        </div>
    );
};

export default Analysis;
