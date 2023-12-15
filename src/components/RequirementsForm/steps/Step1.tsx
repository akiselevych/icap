//libs
import {Dispatch, FC, SetStateAction} from "react";
import {UseFormSetValue, UseFormWatch} from "react-hook-form";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//typex
import {RequirementsFormInputs} from "@/types";

interface Props{
    setValue: UseFormSetValue<RequirementsFormInputs>,
    setStepIndex: Dispatch<SetStateAction<number>>,
    watch: UseFormWatch<RequirementsFormInputs>,
    setIsHidden: Dispatch<SetStateAction<boolean>>
}
const Step1: FC<Props> = ({setValue, setStepIndex,watch, setIsHidden}) => {
    const handleClick = () => {
        setIsHidden(true);
        setTimeout(() => {
            setStepIndex(prev => prev + 1);
            setIsHidden(false);
        }, 300);
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h5 className={styles.title}>Ziel der Webseite auswählen</h5>
            </div>
            <div className={`${styles.btnWrap} ${styles.columnBtnWrap}`}>
                <div className={`${styles.btn} ${global.secondaryButton} ${watch(`purpose`) === "Lead Generation" ?
                 styles.active : ""} `} onClick={() => {
                    setValue(`purpose`, "Lead Generation");
                    handleClick();
                }}>Kundenanfragen generieren</div>
                <div className={`${styles.btn} ${global.secondaryButton} ${watch(`purpose`) === "Business Card" ? styles.active
                 : ""} `} onClick={() => {
                    setValue(`purpose`, "Business Card");
                    handleClick();
                }}>Info-Seite</div>
            </div>
        </div>
    );
};

export default Step1;
