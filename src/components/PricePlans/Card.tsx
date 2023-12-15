import React, {Dispatch, FC, SetStateAction} from 'react';
import Image from "next/image";
//styles
import global from "@/styles/global.module.scss";
import styles from "./cardStyles.module.scss";
///images
import icon from "@/components/RequirementsForm/steps/Step8/icons/check.svg";

interface Props{
    activeCard: "basis" | "pro" | "pro max",
    setActiveCard: Dispatch<SetStateAction<"basis" | "pro" | "pro max">>
    cardId: "basis" | "pro" | "pro max",
    title: string,
    points: string[],
    startPrice: string,
    endPrice: string,
    showCalendly: () => void
}
const Card:FC<Props> = ({activeCard,cardId,setActiveCard,title,points,startPrice,endPrice,showCalendly}) => {
    return (
        <div className={`${styles.container} ${activeCard === cardId && styles.gold }`} onClick={() => {
            setActiveCard(cardId);
        }}>
            {cardId === "pro" &&
                <div className={`${styles.activeIcon} ${activeCard === cardId && styles.activeIconGold}`}>beliebt</div>}
            <div className={`${styles.info}`}>
                <h5 className={`${styles.title} ${activeCard === cardId && styles.bold}`}>{title}</h5>
                <div className={styles.points}>
                    {points.map((point,i) =>(
                        <div className={`${styles.point}`} key={i}>
                            <Image src={icon} alt={"check"} className={styles.icon}/>
                            <p className={`${styles.text} ${point === "Festanzahl Kundenanfragen garantiert" && styles.bold}`}>{point}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.priceBlock}>
                <p className={styles.price}>{`${startPrice}€ - ${endPrice}€`}</p>
                <button type={"submit"}
                        className={`${global.primaryButton} ${styles.button} ${activeCard === cardId && styles.activeBtn}`}
                        onClick={() => showCalendly()}
                >Kostenlose Beratung</button>
            </div>
        </div>
    );
};

export default Card;
