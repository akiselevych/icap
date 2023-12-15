//libs
import React from 'react';
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {motion} from 'framer-motion';
//components
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import HowItWorksBlock from '@/components/HowItWorksBlock/HowItWorksBlock';
import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import OldTrustCompanies from "@/components/TrustCompanies/OldTrustCompanies";
import WorkWithUs from "@/components/WorkWithUs/WorkWithUs";
import Instructions from '@/components/Instructions/Instructions';
import ReviewsSlider from "@/components/ReviewsSlider/ReviewsSlider";
import RequirementsForm from "@/components/RequirementsForm/RequirementsForm";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import {scrollToSection} from "@/utils/scrollToSection";
import Script from "next/script";
import PricePlans from "@/components/PricePlans/PricePlans";
import NewAboutUs from "@/components/NewAboutUs/NewAboutUs";
import Faq from "@/components/Faq/Faq";
import MainOurTeamV2 from "@/components/MainOurTeamV2/MainOurTeamV2";


const textVariant = {
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

const questions = [
    {
        text: "Welche Unternehmen sind für unsere Dienste geeignet?",
        answer: "Für Dienstleistungsunternehmen, deren Kunden bereits online nach deren Dienste suchen. Außerdem sollte eine direkte Kundenanfrage mindestens 50 € für Ihr Unternehmen wert sein, damit sich das ganze auch lohnt."
    },
    {
        text: "Ist mein Geld wirklich sicher?",
        answer: "Ja, wir garantieren Ihnen eine Festanzahl an Kundenanfragen, die im Wert der Ihrer Investition in die Webseite übersteigt. Sollten wir Ihren Erwarten nicht gerecht werden, was noch nie vorgekommen ist, überweisen wir Ihnen den vollständigen Betrag zurück und Sie behalten Ihre Webseite dennoch."
    },
    {
        text: "Wie werden die Erfolge der Webseite gemessen?",
        answer: "Durch das Tracking von sogenannten \"Conversions\" (via Google) auf Ihrer Webseite. Damit können Sie und wir genau nachvollziehen, wer, wann und wie oft bei Ihnen angefragt hat."
    },
    {
        text: "Wie lange dauert es, bis meine Webseite fertig gestellt ist?",
        answer: "Die Entwicklungszeit variiert je nach Umfang und Komplexität des Projekts. Wir arbeiten jedoch eng mit unseren Kunden zusammen, um realistische Zeitrahmen festzulegen und halten Sie konstant auf dem Laufenden. In der Regel dauert Ihre Webseite 2- 4 Wochen, abhängig von der Größe Ihrer Webseite und Ihren Mithilfe (z. B. zügige Bereitstellung von Bildern, Fakten, Daten)."
    },
    {
        text: "Wer wartet und verwaltet meine Webseite nach der Fertigstellung? Wie viel kostet das?",
        answer: "Die ersten 6 Monate verwalten und warten wir Ihre vollständig kostenlos. Danach fallen monatliche Kosten in höhe von 30 € bis 50 € an, abhängig von der Größe und Komplexität Ihrer Webseite. Änderungen außerhalb von Text kosten extra und erledigen wir für 100 € zzgl. MwSt. die Stunde. Sie können die Webseite natürlich auch selbst verwalten oder einen anderen Verwalter einsetzen, wir raten aber davon ab."
    },
    {
        text: "Was wird von mir als Kunde benötigt?",
        answer: " In einem 30 minütigen Gespräch lernen wir Ihr Unternehmen im Detail kennen und können danach unabhängig arbeiten. Selbstverständlich stehen wir weiter mit Ihnen in Kontakt, um unsere Architektur Ihren Werten & Marke anzupassen. Grundsätzlich sollten Sie insgesamt eine Stunde Ihrer Zeit über das Projekt hinweg einplanen."
    },
    {
        text: "Kann ich auch in Raten zahlen?",
        answer: "a können Sie! Je nach Wunsch auf bis zu 5 Jahre in kleinen, monatlichen Raten. Wir kümmern uns um" +
            " alles. Es fallen Zinsen an"
    },
]


const Page = () => {
    const {t} = useTranslation("translate");

    return (
        <>
            <Script src={"https://www.googletagmanager.com/gtag/js?id=G-RG8YVFW3BE"} strategy={"afterInteractive"}/>
            <Script id={"google-analytics"} strategy={"afterInteractive"}>
                {
                    `
                    window.dataLayerWebsite1 = window.dataLayerWebsite1 || [];
                    function gtag(){dataLayerWebsite1.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-RG8YVFW3BE');
                    
                    (function(w,d,s,l,i){
                        w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),
                        dl=l!='dataLayerWebsite2'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayerWebsite2','GTM-KCZJ468T');
                  `
                }
            </Script>


            {/*<Script id={"google-analytics"} strategy={"afterInteractive"}>*/}
            {/*    {*/}
            {/*        `*/}
            {/*      (function(w,d,s,l,i){w[l]=w[l][];w[l].push({'gtm.start':*/}
            {/*      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
            {/*      j=d.createElement(s),dl=l!='dataLayerWebsite2'?'&l='+l:'';j.async=true;j.src=*/}
            {/*      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
            {/*      })(window,document,'script','dataLayerWebsite2','GTM-KCZJ468T');*/}
            {/*      `*/}
            {/*    }*/}
            {/*</Script>*/}
            <Head>
                <title>Leadgenerierung & Webdesign | ICAP Group</title>
                <meta name="description"
                      content={"Mehr Kunden mit ICAP Group anziehen! Erstklassige Lösungen für Leadgenerierung und Webdesign, die Ihr Geschäft auf die nächste Stufe heben."}/>
            </Head>
            <Layout t={t}>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCZJ468T"
                            height="0" width="0" style={{display: "none", visibility: "hidden"}}>

                    </iframe>
                </noscript>
                <div className={styles.container}>
                    <motion.section className={styles.header}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={textVariant}
                                    viewport={{once: true, amount: 0.8}}>
                        <h1 className={`${styles.title} ${global.pageTitle}`}>
                            Andere versprechen, <span className={`${styles.colored} ${global.pageTitle}`}>wir garantieren.</span>
                        </h1>
                        <p className={styles.desc}>Garantiert mehr Kundenanfragen durch effektive Webseitarchitektur</p>
                        <div className={`${styles.headerBtn} ${global.primaryButton}`}
                             onClick={() => scrollToSection("pricePlans")}>Kostenlose Beratung
                        </div>
                    </motion.section>
                    <div className={styles.trustComp}>
                        <PortfolioSlider/>
                    </div>
                    <OldTrustCompanies/>
                    <WorkWithUs/>
                    <HowItWorksBlock/>
                    <Instructions/>
                    <ReviewsSlider/>
                    <MainOurTeamV2/>
                    <PricePlans/>
                    <Faq title='Häufig gestellte Fragen' questions={questions}/>
                </div>
            </Layout>
        </>
    );
};

//@ts-ignore
export async function getStaticProps({locale}) {
    return {
        props: {
            //@ts-ignore
            ...(await serverSideTranslations(locale, ['translate'])),
            // Will be passed to the page component as props
        },
    }
}


export default Page;
