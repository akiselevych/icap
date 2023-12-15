import React, {FC} from 'react';
import {UseFormRegister} from "react-hook-form";
import {RequirementsFormInputs} from "@/types";
import styles from "@/components/RequirementsForm/steps/styles.module.scss";


interface Props {
    register: UseFormRegister<RequirementsFormInputs>,
}

const Step7: FC<Props> = ({register}) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h5 className={styles.title}>Letzter Schritt: Bitte geben Sie für die spätere Zuordnung Ihren Namen an</h5>
            </div>

            <div className={styles.inputsWrap}>
                <div className={`${styles.singleInput} ${styles.inputBlock} ${styles.rightRadius}`}>
                    <label className={styles.label}>Vorname</label>
                    <input {...register("name", {required: true})} className={styles.input}
                           type="text" placeholder="Eingabe des Vornamens"/>
                </div>
                <div className={`${styles.singleInput} ${styles.inputBlock} ${styles.rightRadius}`}>
                    <label className={styles.label}>Nachname</label>
                    <input {...register("surname", {required: true})} className={styles.input}
                           type="text" placeholder="Eingabe des Nachnamens"/>
                </div>
            </div>
        </div>
    );
};

export default Step7;
