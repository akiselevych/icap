//libs
import {Dispatch, FC, SetStateAction} from "react";
import {UseFormRegister, UseFormSetValue, UseFormWatch} from "react-hook-form";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//typex
import {RequirementsFormInputs} from "@/types";

interface Props{
    register: UseFormRegister<RequirementsFormInputs>,
    watch: UseFormWatch<RequirementsFormInputs>,
}
const Step5: FC<Props> = ({register, watch}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h5 className={styles.title}>Wie viel verdienen Sie im Durchschnitt durch eine Kundenanfrage?</h5>
            </div>
            <div className={`${styles.singleInput} ${styles.inputBlock} ${styles.rightRadius}`}>
                <label className={styles.label}>Betrag</label>
                <input {...register("clientPrice", {required: true})} className={styles.input}
                       type="number" placeholder="0 €"/>
            </div>
        </div>
    );
};

export default Step5;
