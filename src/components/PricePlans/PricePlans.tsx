import React, {useState} from 'react';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import Card from "@/components/PricePlans/Card";
import CalendlyModal from "@/components/CalendlyModal/CalendlyModal";

const cards = [
    {
        title: "Basis",
        points: [
            "Hocheffektive Webseite", "Alle Hosting- und Websitekosten für 6 Monate inbegriffen",
            "Rundum sorglos Betreuung"
        ],
        formId: "basis",
        startPrice: "8000",
        endPrice: "11.000"
    },
    {
        title: "Pro",
        points: [
            "Hocheffektive Webseite", "Alle Hosting- und Websitekosten für 6 Monate inbegriffen",
            "Rundum sorglos Betreuung",
            "Festanzahl Kundenanfragen garantiert"
        ],
        formId: "pro",
        startPrice: "12.000",
        endPrice: "15.000",
    },
    {
        title: "Pro Max",
        points: [
            "Hocheffektive Webseite", "Alle Hosting- und Websitekosten für 6 Monate inbegriffen",
            "Rundum sorglos Betreuung",
            "Festanzahl Kundenanfragen garantiert", "6 Monate lang gründliche A/B Tests um die Anzahl der Kundenanfragen noch weiter zu erhöhen"
        ],
        formId: "pro max",
        startPrice: "18.000",
        endPrice: "21.000",
    },
]

const PricePlans = () => {
    const [isCalendlyFirst, setIsCalendlyFirst] = useState<boolean>(false);
    const [isCalendlySecond, setIsCalendlySecond] = useState<boolean>(false);
    const [isCalendlThirdt, setIsCalendlyThird] = useState<boolean>(false);
    const [activePlan, setActivePlan] = useState<"basis" | "pro" | "pro max">("pro");

    return (
        <section className={styles.container} id={"pricePlans"}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>Wählen Sie Ihr Webseitpaket</h2>
            <p className={styles.desc}>Wählen Sie das Webseitpaket, das am besten zu Ihnen passt</p>
            <div className={styles.content}>
                {cards.map(({title,formId,startPrice,endPrice,points}, i) => (
                    <Card key={i} activeCard={activePlan} setActiveCard={setActivePlan} cardId={formId as "basis" | "pro" | "pro max"}
                          title={title} points={points} startPrice={startPrice} endPrice={endPrice}
                          showCalendly={() => i === 0 ? setIsCalendlyFirst(true) : i === 1
                              ? setIsCalendlySecond(true) : setIsCalendlyThird(true)} />
                ))}
            </div>
            <CalendlyModal link={"https://calendly.com/icapgroup/basis-webseitpaket"}  isCalendlyOpen={isCalendlyFirst} setIsCalendlyOpen={setIsCalendlyFirst}/>
            <CalendlyModal link={"https://calendly.com/icapgroup/pro-webseitpaket"}  isCalendlyOpen={isCalendlySecond} setIsCalendlyOpen={setIsCalendlySecond}/>
            <CalendlyModal link={"https://calendly.com/icapgroup/pro-max-webseitpaket-"}  isCalendlyOpen={isCalendlThirdt} setIsCalendlyOpen={setIsCalendlyThird}/>
        </section>
    );
};

export default PricePlans;
