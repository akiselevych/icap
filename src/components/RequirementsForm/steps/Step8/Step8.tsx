//libs
import {Dispatch, FC, SetStateAction, useMemo} from "react";
import {UseFormRegister, UseFormSetValue, UseFormWatch} from "react-hook-form";
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
//typex
import {RequirementsFormInputs} from "@/types";
import Card from "@/components/RequirementsForm/steps/Step8/Card";

interface Props{
    setValue: UseFormSetValue<RequirementsFormInputs>,
    setStepIndex: Dispatch<SetStateAction<number>>,
    setIsHidden: Dispatch<SetStateAction<boolean>>,
    watch: UseFormWatch<RequirementsFormInputs>,
}


const Step8: FC<Props> = ({setStepIndex, setIsHidden, setValue, watch}) => {
    const dep = watch(`showInCities`).filter(c => c.city != "").length;
    const handleDynamicText = () => {
        if (watch(`isOldWebsite`)){
            return `Garantie von mindestens ${watch(`minQuantityOfRequests`)} Kundenanfragen über die Webseite im Monat`
        }
        return `Garantie von mindestens ${watch(`minQuantityOfRequests`)} Kundenanfragen über die Webseite im Monat`
    }

    const handleCities = () => {
        if (dep > 0){
            if (dep === 1){
                return `Seite 1 bei Google (${watch(`showInCities`).filter(c => c.city != "")[0].city}) garantiert in 6 Monaten`
            } else {
                return `Seite 1 bei Google (${(watch(`showInCities`)).map(c => c.city).join(", ")}) garantiert in 6 Monaten`
            }
        }
    }


    const cards = useMemo(() => {
        return [
            {
                title: "Basis",
                points: !!handleCities() ? [
                    "Hocheffektive Webseite", "Alle Hosting- und Websitekosten für 6 Monate inbegriffen",
                    "Rundum sorglos Betreuung", `${handleCities()}`
                ] : [
                    "Hocheffektive Webseite", "Alle Hosting- und Websitekosten für 6 Monate inbegriffen",
                    "Rundum sorglos Betreuung"
                ],
                formId: "basis",
                startPrice: 8000 + (5000 * watch(`showInCities`).filter(c => c.city != "").length),
                endPrice: 11000 + (5000 * watch(`showInCities`).filter(c => c.city != "").length)
            },
            {
                title: "Pro",
                points: !!handleCities() ? [
                    "Hocheffektive Webseite", "Alle Hosting- und Websitekosten für 6 Monate inbegriffen",
                    "Rundum sorglos Betreuung", `${handleCities()}`,
                    `${handleDynamicText()}`,"Umfängliches Google Ads" +
                    " Management für 6 Monate"
                ] : [
                    "Hocheffektive Webseite", "Alle Hosting- und Websitekosten für 6 Monate inbegriffen",
                    "Rundum sorglos Betreuung",
                    `${handleDynamicText()}`,"Umfängliches Google Ads" +
                    " Management für 6 Monate"
                ],
                formId: "pro",
                startPrice: 12000 + (5000 * watch(`showInCities`).filter(c => c.city != "").length),
                endPrice: 15000 + (5000 * watch(`showInCities`).filter(c => c.city != "").length),
            },
            {
                title: "Pro Max",
                points: !!handleCities() ? [
                    "Hocheffektive Webseite", "alle Hosting- und Websitekosten für 6 Monate inbegriffen",
                    "Rundum sorglos Betreuung", `${handleCities()}`,
                    `${handleDynamicText()}`,"Umfängliches Google Ads" +
                    " Management für 6 Monate"
                    ,"6 Monate lang gründliche A/B Tests um die Anzahl der Kundenanfragen noch weiter zu erhöhen"
                ] : [
                    "Hocheffektive Webseite", "alle Hosting- und Websitekosten für 6 Monate inbegriffen",
                    "Rundum sorglos Betreuung",
                    `${handleDynamicText()}`,"Umfängliches Google Ads" +
                    " Management für 6 Monate"
                    ,"6 Monate lang gründliche A/B Tests um die Anzahl der Kundenanfragen noch weiter zu erhöhen"
                ],
                formId: "pro max",
                startPrice: 18000 + (5000 * watch(`showInCities`).filter(c => c.city != "").length),
                endPrice: 21000 + (5000 * watch(`showInCities`).filter(c => c.city != "").length),
            },
        ]
        //eslint-disable-next-line
    },[dep])
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h5 className={styles.title}>Wählen Sie Ihr Webseitpaket</h5>
                <p className={styles.desc}>Wählen Sie das Webseitpaket, das am besten zu Ihnen passt</p>
            </div>
            <div className={styles.cards}>
                {cards.map(({title,points,startPrice,endPrice,formId},i) => (
                    <Card key={i} watch={watch} title={title} points={points} startPrice={startPrice} endPrice={endPrice} formId={formId as ("basis" | "pro" | "pro max")} setValue={setValue} setStepIndex={setStepIndex} setIsHidden={setIsHidden}/>
                ))}
            </div>
        </div>
    );
};

export default Step8;
