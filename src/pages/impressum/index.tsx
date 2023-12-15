//components
import Layout from "@/components/Layout/Layout"
import Head from "next/head";
//libs
import classNames from "classnames"
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import Script from "next/script";
import React from "react";

const ImpressumPage = () => {
  const { t } = useTranslation("translate")

  return (
    <>
      <Head>
        <title>{t("SEOTitleImpressumPage")}</title>
        <meta name="description" content={t("SEODescrImpressumPage")} />
      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-impressum"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerImpressum = window.dataLayerImpressum || [];
                    function gtag(){dataLayerImpressum.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <div className={styles.container}>
          <div className={styles.pageSection}>
            <h1 className={classNames(global.pageTitle, styles.title)}>{t("bottomBarMainPageSectionNavigation6")}</h1>
            <div className={styles.infoBlock}>
              <div className={styles.infoSubBlock}>
                <div className={global.smallTitle}>Angaben gemäß § 5 TMG</div>
                <div className={styles.infoBlockText}>
                  <div className={styles.important}>ICAP Group GmbH</div>
                  <div className={styles.important}>Krummlandstraße, 22</div>
                  <div className={styles.important}>74081 Heilbronn</div>
                  <div className={styles.important}>Deutschland</div>
                </div>
              </div>
              <div className={styles.infoSubBlock}>
                <div className={global.smallTitle}>Vertreten durch</div>
                <div className={styles.infoBlockText}>
                  <div className={styles.infoBlockTextItem}>Volker Hütter</div>
                  <div className={styles.infoBlockTextItem}>Handelsregister: HRB 783823</div>
                  <div className={styles.infoBlockTextItem}>Registergericht: Amtsgericht Stuttgart</div>
                  <div className={styles.infoBlockTextItem}>USt-IdNr.: DE 352 086 887</div>
                </div>
              </div>
              <div className={styles.infoSubBlock}>
                <div className={global.smallTitle}>Kontakt</div>
                <div className={styles.infoBlockText}>
                  <div className={styles.infoBlockTextItem}>Telefon: 07131 3829180</div>
                  <div className={styles.infoBlockTextItem}>E-Mail: info@icapgroupgmbh.com</div>

                </div>
              </div>
            </div>
          </div>
          <div className={styles.pageSection}>
            <div className={classNames(global.pageTitle, styles.title)}>Haftungsausschluss (Disclaimer)</div>
            <div className={styles.infoBlock}>
              <div className={styles.infoSubBlock}>
                <div className={global.smallTitle}>Haftung für Inhalte</div>
                <div className={styles.infoBlockText}>
                  <div className={styles.infoBlockTextItem}>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</div>
                </div>
              </div>
              <div className={styles.infoSubBlock}>
                <div className={global.smallTitle}>Haftung für Inhalte</div>
                <div className={styles.infoBlockText}>
                  <div className={styles.infoBlockTextItem}>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</div>
                </div>
              </div>
              <div className={styles.infoSubBlock}>
                <div className={global.smallTitle}>Haftung für Links</div>
                <div className={styles.infoBlockText}>
                  <div className={styles.infoBlockTextItem}>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</div>
                </div>
              </div>
              <div className={styles.infoSubBlock}>
                <div className={global.smallTitle}>Urheberrecht</div>
                <div className={styles.infoBlockText}>
                  <div className={styles.infoBlockTextItem}>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</div>
                  <div className={styles.infoBlockTextItem}>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
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

export default ImpressumPage