import Image from "next/image"
import Layout from "@/components/Layout/Layout"
import Link from "next/link"
//libs
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//styles
import styles from "./styles.module.scss"
import global from '@/styles/global.module.scss'
import { baseImageUrl } from "@/services/API";
const errorBanner = `${baseImageUrl}/404.webp`

const Index = () => {
    const { t } = useTranslation("translate")

    return (
        <Layout t={t}>
            <div className={styles.container}>
                <Image width={642} height={329} className={styles.image} src={errorBanner} alt="error" />
                <div className={styles.textBlock}>
                    <div className={global.pageTitle}>{t("404titel")}</div>
                    <div >
                        {t("404text")}
                    </div>
                </div>
                <Link href='/'>
                    <div className={global.primaryButton}>
                        {t("404btn")}
                    </div>
                </Link>
                <div className={styles.radial1}></div>
                <div className={styles.radial2}></div>
                <div className={styles.radial3}></div>
                <div className={styles.radial4}></div>
                <div className={styles.radial5}></div>
            </div>
        </Layout>
    )
}
//@ts-ignore
export async function getStaticProps({ locale }) {
    return {
        props: {
            //@ts-ignore
            ...(await serverSideTranslations(locale, ['translate'])),
            // Will be passed to the page component as props
        },
    }
}


export default Index