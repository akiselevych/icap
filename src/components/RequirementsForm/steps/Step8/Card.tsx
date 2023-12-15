import React, {Dispatch, FC, SetStateAction} from 'react';
import Image from "next/image";
import {FormSubmitHandler, UseFormSetValue, UseFormWatch} from "react-hook-form";
//styles
import styles from "./cardStyles.module.scss";
import global from "@/styles/global.module.scss";
//images
import icon from './icons/check.svg'
import star from './icons/star.svg'
//types
import {RequirementsFormInputs} from "@/types";


interface Props{
    title: string,
    points: string[],
    startPrice: number,
    endPrice: number,
    formId: "basis" | "pro" | "pro max",
    setValue: UseFormSetValue<RequirementsFormInputs>,
    setStepIndex: Dispatch<SetStateAction<number>>,
    setIsHidden: Dispatch<SetStateAction<boolean>>,
    watch: UseFormWatch<RequirementsFormInputs>,
}
const Card: FC<Props> = ({title, points,startPrice,endPrice,formId, setValue, setStepIndex,setIsHidden, watch}) => {
    const handleClick = () => {
        setIsHidden(true);
        setTimeout(() => {
            setStepIndex(0);
            setIsHidden(false);
        }, 300);
    }
    function formatNumber(num: number) {
        if (num >= 10000) {
            const numString = num.toString();
            const separatorIndex = numString.length % 3 || 3;
            let formattedNumber = numString.substr(0, separatorIndex);

            for (let i = separatorIndex; i < numString.length; i += 3) {
                formattedNumber += '.' + numString.substr(i, 3);
            }

            return formattedNumber;
        } else {
            return num.toString();
        }
    }
    return (
        <div className={`${styles.container} ${watch(`pricePlan`) === formId ? styles.gold : ''}`} onClick={() => {
            setValue(`pricePlan`, formId);
        }}>
            {formId === "pro" && <div className={`${styles.activeIcon} ${watch(`pricePlan`) === formId ? styles.activeIconGold : ''}`}>beliebt</div>}
            <div className={`${styles.info}`}>
                <h5 className={styles.title}>{title}</h5>
                <div className={styles.points}>
                    {points.map((point,i) =>(
                        <div className={styles.point} key={i}>
                            <Image src={icon} alt={"check"} className={styles.icon}/>
                            <p className={styles.text}>{point}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.priceBlock}>
                <p className={styles.price}>{`${formatNumber(startPrice)}€ - ${formatNumber(endPrice)}€`}</p>
                <p className={styles.desc}>
                    {formId === "basis" && "Kostenlose Basispaket Beratung buchen"}
                    {formId === "pro" && "Kostenlose Propaket Beratung buchen"}
                    {formId === "pro max" && "Kostenlose Pro Max-Paket Beratung buchen"}
                </p>
                <button type={"submit"} className={`${global.primaryButton} ${styles.button} ${watch(`pricePlan`) === formId && styles.activeBtn}`} onClick={() => {
                    handleClick();
                    setValue(`finalPrice`, `${startPrice}€ - ${endPrice}€`)
                }}>Weiter</button>
            </div>
        </div>
    );
};

export default Card;
