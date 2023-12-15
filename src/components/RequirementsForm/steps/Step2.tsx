//libs
import {Dispatch, FC, SetStateAction} from "react";
import {UseFormRegister, UseFormSetValue, UseFormWatch} from "react-hook-form";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//typex
import {RequirementsFormInputs} from "@/types";

interface Props{
    setValue: UseFormSetValue<RequirementsFormInputs>,
    setStepIndex: Dispatch<SetStateAction<number>>,
    register: UseFormRegister<RequirementsFormInputs>,
    watch: UseFormWatch<RequirementsFormInputs>,
    setIsHidden: Dispatch<SetStateAction<boolean>>
}
const Step2: FC<Props> = ({setValue, setStepIndex,register, watch, setIsHidden}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h5 className={styles.title}>Haben Sie schon eine Webseite?</h5>
                <p className={styles.desc}>Wenn die Antwort &quot;JA&quot; lautet, geben Sie bitte den Link zur Website in das untere Feld ein</p>
            </div>
            <div className={styles.btnWrap}>
                <div className={`${styles.btn} ${global.secondaryButton} ${watch(`isOldWebsite`) ? styles.active : ""}`} onClick={() => {
                    setValue(`isOldWebsite`, true);
                }}>Ja</div>
                <div className={`${styles.btn} ${global.secondaryButton} ${watch(`isOldWebsite`) === false ? styles.active : ""}`} onClick={() => {
                    setValue(`isOldWebsite`, false);
                    setValue(`oldWebsite`, "");
                    setIsHidden(true);
                    setTimeout(() => {
                        setStepIndex(prev => prev + 1);
                        setIsHidden(false);
                    }, 370);
                }}>Nein</div>
            </div>
            {watch('isOldWebsite') && <div className={`${styles.singleInput} ${styles.inputBlock} ${styles.rightRadius}`}>
                <label className={styles.label}>Link zur Website</label>
                <input {...register("oldWebsite", {required: watch(`isOldWebsite`)})} className={styles.input}
                       type="text" placeholder="Bitte den Link einfügen"/>
            </div>}
            <input type="text" style={{display: "none"}}  {...register("isOldWebsite", {required: true})}/>
        </div>
    );
};

export default Step2;
