//components
import Layout from "@/components/Layout/Layout"
import Head from "next/head";
//libs
import classNames from "classnames"
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import Script from "next/script";
import React from "react";

const IdatenschutzerklarungPage = () => {
    const {t} = useTranslation("translate")

    return (
        <>
            <Head>
                <title>{t("SEOTitleDatenschutzerklarungPage")}</title>
                <meta name="description" content={t("SEODescrDatenschutzerklarungPage")}/>
            </Head>
            <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
            <Script id={"google-analytics-datenschutzerklarung"} strategy={"afterInteractive"}>
                {
                    `
                    window.dataLayerDatenschutzerklarung = window.dataLayerDatenschutzerklarung || [];
                    function gtag(){dataLayerDatenschutzerklarung.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
                }
            </Script>
            <Layout t={t}>
                <div className={styles.container}>
                    <div className={styles.pageSection}>
                        <div className={styles.titleBlock}>
                            <h1 className={classNames(global.pageTitle, styles.title)}>{t("bottomBarMainPageSectionInformation5")}</h1>
                            <div className={styles.infoBlockTextItem}>
                                Zuletzt aktualisiert am: 13.11.2023
                            </div>
                        </div>
                        <div className={styles.infoBlockTextItem}>
                            Diese Datenschutzrichtlinie beschreibt, wie https://icapgroupgmbh.com/ (die “Site” oder
                            “wir”) Ihre persönlichen Daten sammelt, verwendet und offenlegt, wenn Sie die Site besuchen
                            oder einen Kauf auf der Site tätigen.
                        </div>
                        <div className={styles.infoBlock}>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>1.Kontakt</div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Wenn Sie nach Durchsicht dieser Richtlinie weitere Fragen haben, mehr
                                        Informationen über unsere Datenschutzpraktiken wünschen oder eine Beschwerde
                                        einreichen möchten, wenden Sie sich bitte per E-Mail an
                                        volkerhuetter@icapgroupgmbh.com oder per Post an die unten angegebenen
                                        Kontaktdaten:
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        ICAP Gruppe GmbH, Krummlandstr., 22, 74081 Heilbronn, Deutschland
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>2.Sammeln von persönlichen Informationen</div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Wenn Sie die Website besuchen, erfassen wir bestimmte Informationen über Ihr
                                        Gerät, Ihre Interaktion mit der Website und Informationen, die zur Bearbeitung
                                        Ihrer Einkäufe erforderlich sind. Wir können auch zusätzliche Informationen
                                        sammeln, wenn Sie uns für den Kundensupport kontaktieren. In dieser
                                        Datenschutzrichtlinie bezeichnen wir alle Informationen über eine
                                        identifizierbare Person (einschließlich der unten aufgeführten Informationen)
                                        als &ldquo;persönliche Daten&ldquo;. In der folgenden Liste finden Sie weitere Informationen
                                        darüber, welche persönlichen Daten wir erfassen und warum.
                                    </div>
                                    <div className={styles.infoSubSubBlock}>
                                        <div className={styles.subSubTitle}>
                                            Informationen zum Gerät:
                                        </div>
                                        <ul>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Zweck der Erfassung : </strong>
                                                    um Ihnen Produkte oder Dienstleistungen zur Erfüllung unseres
                                                    Vertrags zu
                                                    liefern, um Ihre Zahlungsinformationen zu verarbeiten, den Versand
                                                    zu
                                                    organisieren und Ihnen Rechnungen und/oder Auftragsbestätigungen
                                                    zukommen zu
                                                    lassen, um mit Ihnen zu kommunizieren, um unsere Aufträge auf
                                                    potenzielle
                                                    Risiken oder Betrug zu prüfen und um Ihnen, wenn dies Ihren
                                                    Präferenzen
                                                    entspricht, Informationen oder Werbung zu unseren Produkten oder
                                                    Dienstleistungen zukommen zu lassen.
                                                </div>
                                            </li>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Quelle der Datenerhebung : </strong> von Ihnen erhoben.
                                                </div>
                                            </li>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Erfasste personenbezogene Daten : </strong>
                                                    Version des Webbrowsers, IP-Adresse, Zeitzone, Cookie-Informationen,
                                                    welche
                                                    Websites oder Produkte Sie sich ansehen, Suchbegriffe und wie Sie
                                                    mit der
                                                    Website interagieren
                                                </div>
                                            </li>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Erfasste persönliche Daten : </strong>
                                                    Name, Rechnungsadresse, Lieferadresse, Zahlungsinformationen
                                                    (einschließlich
                                                    Kreditkartennummern, E-Mail-Adresse und Telefonnummer).
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.infoSubSubBlock}>
                                        <div className={styles.subSubTitle}>
                                            Informationen zur Bestellung :
                                        </div>
                                        <ul>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Zweck der Erfassung : </strong>
                                                    um die Website für Sie korrekt zu laden und um Analysen zur Nutzung
                                                    der
                                                    Website durchzuführen, um unsere Website zu optimieren.
                                                </div>
                                            </li>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Quelle der Erfassung : </strong>
                                                    Wird automatisch erfasst, wenn Sie auf unsere Website zugreifen, und
                                                    zwar
                                                    mithilfe von Cookies, Protokolldateien, Webbeacons, Tags oder
                                                    Pixeln.
                                                </div>
                                            </li>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Erfasste personenbezogene Daten : </strong>
                                                    Version des Webbrowsers, IP-Adresse, Zeitzone, Cookie-Informationen,
                                                    welche
                                                    Websites oder Produkte Sie sich ansehen, Suchbegriffe und wie Sie
                                                    mit der
                                                    Website interagieren
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.infoSubSubBlock}>
                                        <div className={styles.subSubTitle}>
                                            Informationen zur Kundenbetreuung :
                                        </div>
                                        <ul>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Zweck der Erhebung : </strong> Kundenbetreuung.
                                                </div>
                                            </li>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Quelle der Datenerhebung : </strong> von Ihnen erhoben
                                                </div>
                                            </li>
                                            <li>
                                                <div className={styles.subSubTextItem}>
                                                    <strong>Erfasste persönliche Informationen : </strong>
                                                    Name, Rechnungsadresse, Lieferadresse, Zahlungsinformationen
                                                    (einschließlich Kreditkartennummern, E-Mail-Adresse und
                                                    Telefonnummer).
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    3.Weitergabe persönlicher Informationen
                                </div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Wir geben Ihre persönlichen Daten an Dienstleister weiter, die uns dabei helfen,
                                        unsere Dienstleistungen zu erbringen und unsere Verträge mit Ihnen zu erfüllen,
                                        wie oben beschrieben. Zum Beispiel:
                                        <ul>
                                            <li>
                                                Wir können Ihre persönlichen Daten weitergeben, um geltende Gesetze und
                                                Vorschriften einzuhalten, um auf Vorladungen, Durchsuchungsbefehle oder
                                                andere rechtmäßige Anfragen nach Informationen zu reagieren, die wir
                                                erhalten, oder um unsere Rechte anderweitig zu schützen.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    4.Verhaltensbasierte Werbung
                                </div>
                                <div className={styles.infoBlockTextItem}>
                                    Wie oben beschrieben, verwenden wir Ihre persönlichen Daten, um Ihnen gezielte
                                    Werbung oder Marketingmitteilungen zukommen zu lassen, von denen wir glauben, dass
                                    sie für Sie von Interesse sein könnten. Zum Beispiel:
                                    <ul>
                                        <li>
                                            Wir verwenden Google Analytics, um zu verstehen, wie unsere Kunden die
                                            Website nutzen. Sie können hier mehr darüber lesen, wie Google Ihre
                                            persönlichen Daten verwendet: <a target={"_blank"}
                                                                             href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a> Sie
                                            können Google Analytics auch hier abbestellen: <a target={"_blank"}
                                                                                              href="https://tools.google.com/dlpage/gaoptout"> https://tools.google.com/dlpage/gaoptout</a> .
                                        </li>
                                        <li>
                                            Wir geben Informationen über Ihre Nutzung der Website, Ihre Einkäufe und Ihre Interaktion mit unserer Werbung auf anderen Websites an unsere Werbepartner weiter. Einige dieser Informationen werden direkt mit unseren Werbepartnern gesammelt und weitergegeben, in einigen Fällen auch durch die Verwendung von Cookies oder anderen ähnlichen Technologien (denen Sie je nach Ihrem Standort zustimmen können).
                                        </li>
                                        <li>
                                            Weitere Informationen darüber, wie gezielte Werbung funktioniert, finden Sie auf der Bildungsseite der Network Advertising Initiative (&ldquo;NAI&ldquo;) unter <a
                                            href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target={"_blank"}>https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a> .
                                        </li>
                                        <li>Sie können sich gegen gezielte Werbung entscheiden, indem Sie:
                                            <ul>
                                                <li>FACEBOOK - <a href="https://www.facebook.com/settings/?tab=ads" target={"_blank"}>https://www.facebook.com/settings/?tab=ads</a>
                                                </li>
                                                <li>GOOGLE - <a href="https://www.google.com/settings/ads/anonymous" target={"_blank"}>https://www.facebook.com/settings/?tab=ads</a>
                                                </li>
                                                <li>BING - <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads " target={"_blank"}>https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Darüber hinaus können Sie sich von einigen dieser Dienste abmelden, indem Sie das Abmeldeportal der Digital Advertising Alliance besuchen: <a
                                            href="https://optout.aboutads.info/" target={"_blank"}>https://optout.aboutads.info/</a> .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    Using Personal Information
                                </div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Wir verwenden Ihre persönlichen Daten, um Ihnen unsere Dienstleistungen anbieten zu können. Dazu gehören: das Anbieten von Produkten zum Verkauf, die Bearbeitung von Zahlungen, der Versand und die Ausführung Ihrer Bestellung sowie das Informieren über neue Produkte, Dienstleistungen und Angebote.
                                    </div>
                                    <div className={styles.infoSubSubBlock}>
                                        <div className={styles.subSubTitle}>
                                            GESETZLICHE GRUNDLAGEN
                                        </div>
                                        <div className={styles.subSubTextItem}>
                                            Wenn Sie im Europäischen Wirtschaftsraum (EWR) ansässig sind, verarbeiten wir Ihre personenbezogenen Daten gemäß der Allgemeinen Datenschutzverordnung (GDPR&ldquo;) auf der Grundlage der folgenden Rechtsgrundlagen:
                                        </div>
                                        <ul>
                                            <li>Ihre Einwilligung;</li>
                                            <li>Die Erfüllung des Vertrags zwischen Ihnen und der Website;</li>
                                            <li>Einhaltung unserer gesetzlichen Verpflichtungen;</li>
                                            <li>Um Ihre lebenswichtigen Interessen zu schützen;</li>
                                            <li>Zur Erfüllung einer Aufgabe, die im öffentlichen Interesse liegt;</li>
                                            <li>Für unsere berechtigten Interessen, die Ihre Grundrechte und -freiheiten nicht überwiegen;</li>
                                        </ul>
                                    </div>
                                    <div className={styles.infoSubSubBlock}>
                                        <div className={styles.subSubTitle}>
                                            AUFBEWAHRUNG
                                        </div>
                                        <div className={styles.subSubTextItem}>
                                            Wenn Sie eine Bestellung über die Website aufgeben, werden wir Ihre persönlichen Daten für unsere Unterlagen aufbewahren, bis Sie uns bitten, diese Daten zu löschen. Weitere Informationen über Ihr Recht auf Löschung finden Sie im Abschnitt &ldquo;Ihre Rechte&ldquo; weiter unten.
                                        </div>
                                    </div>
                                    <div className={styles.infoSubSubBlock}>
                                        <div className={styles.subSubTitle}>
                                            AUTOMATISCHE ENTSCHEIDUNGSFINDUNG
                                        </div>
                                        <div className={styles.subSubTextItem}>
                                            Wenn Sie Ihren Wohnsitz im EWR haben, haben Sie das Recht, der Verarbeitung zu widersprechen, die ausschließlich auf einer automatisierten Entscheidungsfindung (einschließlich Profiling) beruht, wenn diese Entscheidungsfindung eine rechtliche Auswirkung auf Sie hat oder Sie anderweitig erheblich beeinträchtigt.
                                        </div>
                                        <div className={styles.subSubTextItem}>
                                            Wir führen KEINE vollständig automatisierte Entscheidungsfindung durch, die eine rechtliche oder anderweitig erhebliche Auswirkung auf Kundendaten hat.
                                            Zu den Diensten, die Elemente der automatisierten Entscheidungsfindung enthalten, gehören:
                                        </div>
                                        <div className={styles.subSubTextItem}>
                                            <ul>
                                                <li>Vorübergehende schwarze Liste von IP-Adressen, die mit wiederholt fehlgeschlagenen Transaktionen in Verbindung gebracht werden. Diese schwarze Liste bleibt für eine geringe Anzahl von Stunden bestehen.</li>
                                                <li>Vorübergehende schwarze Liste von Kreditkarten, die mit IP-Adressen auf der schwarzen Liste verbunden sind. Diese schwarze Liste bleibt für eine geringe Anzahl von Tagen bestehen.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    Ihre Rechte
                                </div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        GDPR
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Wenn Sie Ihren Wohnsitz im EWR haben, haben Sie das Recht, auf die persönlichen Daten, die wir über Sie gespeichert haben, zuzugreifen, sie auf einen neuen Dienst zu übertragen und zu verlangen, dass Ihre persönlichen Daten korrigiert, aktualisiert oder gelöscht werden. Wenn Sie von diesen Rechten Gebrauch machen möchten, setzen Sie sich bitte über die oben genannten Kontaktinformationen mit uns in Verbindung.
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Ihre personenbezogenen Daten werden zunächst in Irland verarbeitet und dann zur Speicherung und weiteren Verarbeitung ins außereuropäische Ausland übertragen, u. a. nach Kanada und in die Vereinigten Staaten.
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        CCPA
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Wenn Sie in Kalifornien ansässig sind, haben Sie das Recht, auf die persönlichen Daten, die wir über Sie gespeichert haben, zuzugreifen (auch bekannt als &ldquo;Recht auf Auskunft&ldquo;), sie auf einen neuen Dienst zu übertragen und zu verlangen, dass Ihre persönlichen Daten korrigiert, aktualisiert oder gelöscht werden. Wenn Sie von diesen Rechten Gebrauch machen möchten, kontaktieren Sie uns bitte über die oben genannten Kontaktinformationen.
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Wenn Sie einen Bevollmächtigten benennen möchten, der diese Anträge in Ihrem Namen stellt, wenden Sie sich bitte an die oben genannte Adresse.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    7.Cookies
                                </div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Ein Cookie ist eine kleine Informationsmenge, die auf Ihren Computer oder Ihr Gerät heruntergeladen wird, wenn Sie unsere Website besuchen. Wir verwenden eine Reihe verschiedener Cookies, darunter Funktions-, Leistungs- und Werbe-Cookies sowie Cookies für soziale Medien oder Inhalte. Cookies verbessern Ihr Surferlebnis, indem sie es der Website ermöglichen, sich an Ihre Aktionen und Präferenzen zu erinnern (z. B. Anmeldung und Auswahl der Region). Das bedeutet, dass Sie diese Informationen nicht jedes Mal neu eingeben müssen, wenn Sie auf die Website zurückkehren oder von einer Seite zur anderen wechseln. Cookies liefern auch Informationen über die Nutzung der Website, z. B. darüber, ob Sie die Website zum ersten Mal besuchen oder ob Sie ein häufiger Besucher sind.
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Wir verwenden die folgenden Cookies, um Ihre Erfahrung auf unserer Website zu optimieren und unsere Dienste bereitzustellen.
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Wie lange ein Cookie auf Ihrem Computer oder Mobilgerät verbleibt, hängt davon ab, ob es sich um ein &ldquo;dauerhaftes&ldquo; oder ein &ldquo;Sitzungs&ldquo;-Cookie handelt. Sitzungs-Cookies bleiben bestehen, bis Sie aufhören zu surfen, und dauerhafte Cookies bleiben bestehen, bis sie ablaufen oder gelöscht werden. Die meisten der von uns verwendeten Cookies sind dauerhaft und laufen zwischen 30 Minuten und zwei Jahren nach dem Herunterladen auf Ihr Gerät ab.
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Sie können Cookies auf verschiedene Weise kontrollieren und verwalten. Bitte bedenken Sie, dass das Entfernen oder Blockieren von Cookies Ihr Nutzererlebnis beeinträchtigen kann und Teile unserer Website möglicherweise nicht mehr vollständig zugänglich sind.
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Die meisten Browser akzeptieren Cookies automatisch, aber Sie können über die Einstellungen Ihres Browsers, die Sie häufig im Menü &ldquo;Extras&ldquo; oder &ldquo;Einstellungen&ldquo; Ihres Browsers finden, entscheiden, ob Sie Cookies akzeptieren oder nicht. Weitere Informationen darüber, wie Sie Ihre Browsereinstellungen ändern oder Cookies blockieren, verwalten oder filtern können, finden Sie in der Hilfedatei Ihres Browsers oder auf Websites wie <a href="www.allaboutcookies.org" target={"_blank"}>www.allaboutcookies.org</a> .
                                    </div>
                                    <div className={styles.infoBlockTextItem}>
                                        Bitte beachten Sie außerdem, dass das Blockieren von Cookies die Weitergabe von Informationen an Dritte, z. B. an unsere Werbepartner, nicht vollständig verhindern kann. Um Ihre Rechte auszuüben oder bestimmte Verwendungen Ihrer Daten durch diese Parteien abzulehnen, befolgen Sie bitte die Anweisungen im Abschnitt &ldquo;Verhaltensbezogene Werbung&ldquo; oben.
                                    </div>
                                    <div className={styles.infoSubSubBlock}>
                                        <div className={styles.subSubTitle}>
                                            NICHT VERFOLGEN
                                        </div>
                                        <div className={styles.subSubTextItem}>
                                            Bitte beachten Sie, dass es in der Branche kein einheitliches Verständnis darüber gibt, wie auf &ldquo;Do Not Track&ldquo;-Signale zu reagieren ist, und dass wir unsere Datenerfassungs- und Nutzungspraktiken nicht ändern, wenn wir ein solches Signal von Ihrem Browser erkennen.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    8.Änderungen
                                </div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren, um beispielsweise Änderungen unserer Praktiken oder andere betriebliche, rechtliche oder regulatorische Gründe zu berücksichtigen.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    9.Beanstandungen
                                </div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Wenn Sie eine Beschwerde einreichen möchten, wenden Sie sich bitte per E-Mail oder auf dem Postweg an uns, wie oben unter &ldquo;Kontakt&ldquo; angegeben.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={global.smallTitle}>
                                    10.Zustimmung
                                </div>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Durch die Nutzung unserer Website erklären Sie sich mit der Erfassung, Verwendung und Weitergabe Ihrer Daten wie in dieser Datenschutzrichtlinie beschrieben einverstanden.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoSubBlock}>
                                <div className={styles.infoBlockText}>
                                    <div className={styles.infoBlockTextItem}>
                                        Wenn Sie mit unserer Antwort auf Ihre Beschwerde nicht zufrieden sind, haben Sie das Recht, Ihre Beschwerde bei der zuständigen Datenschutzbehörde einzureichen. Sie können Ihre örtliche Datenschutzbehörde oder unsere Aufsichtsbehörde hier kontaktieren: Fügen Sie die Kontaktinformationen oder die Website der Datenschutzbehörde in Ihrem Land hinzu. Zum Beispiel: <a
                                        href="https://ico.org.uk/make-a-complaint/" target={"_blank"}>https://ico.org.uk/make-a-complaint/</a>
                                    </div>
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
export async function getStaticProps({locale}) {
    return {
        props: {
            //@ts-ignore
            ...(await serverSideTranslations(locale, ['translate'])),
            // Will be passed to the page component as props
        },
    }
}

export default IdatenschutzerklarungPage