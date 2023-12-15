//libs
import {FC, useState} from "react";
import {
    UseFieldArrayAppend,
    UseFieldArrayRemove,
    UseFormRegister,
    UseFormSetValue,
    UseFormWatch
} from "react-hook-form";
//styles
import styles from './styles.module.scss'
//typex
import {RequirementsFormInputs} from "@/types";
import Image from "next/image";
import {baseImageUrl2} from "@/services/API";
//images
const remove = `${baseImageUrl2}/deleteFieldIcon.svg`
const add = `${baseImageUrl2}/addFieldIcon.svg`

interface Props {
    register: UseFormRegister<RequirementsFormInputs>,
    watch: UseFormWatch<RequirementsFormInputs>,
    inputsArr: { city: string }[],
    appendCity: UseFieldArrayAppend<RequirementsFormInputs>,
    removeCity: UseFieldArrayRemove,
}

const Step3: FC<Props> = ({register, watch, inputsArr, appendCity, removeCity}) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h5 className={styles.title}>In welchen Städten wollen Sie bei Google organisch auf Seite 1 gefunden werden?</h5>
                <p className={styles.desc}>Lokale Suche, 5000 € extra pro Stadt Bis zu 25.000 Einwohner.</p>
            </div>

            <div className={styles.inputsWrap}>
                {
                    inputsArr.map((city, index) => (
                        <div
                            className={styles.inputContainer}
                            key={index}
                            onMouseEnter={() => {
                                if (index === inputsArr.length - 1) setIsHover(true);
                            }}
                            onMouseLeave={() => {
                                if (index === inputsArr.length - 1) setIsHover(false);
                            }}>
                            <div className={`${index === 0 ? styles.firstInput : ''} ${styles.inputBlock}`}>
                                <label className={styles.label}>Stadt {index + 1}</label>
                                <input {...register(`showInCities.${index}.city`, {required: true})}
                                       className={styles.input}
                                       type="text" placeholder="Eingabe des Stadtnamens"/>
                            </div>
                            {index > 0 &&
                                <div className={styles.removeBtn} onClick={() => {
                                    removeCity(index);
                                    setIsHover(false);
                                }}>
                                    <Image width={16} height={16} src={remove} alt={"Remove btn"}/>
                                </div>}
                            <div style={{visibility: "hidden"}}><Image src={add} width={24} height={24} alt={"Add" +
                                " btn"}/></div>
                            {index === inputsArr.length - 1 && (isHover || window.innerWidth < 965) &&
                                <div className={styles.appendBtn} onClick={() => {
                                    appendCity({city: ""});
                                    setIsHover(false);
                                }}><Image width={24} height={24}
                                    src={add} alt={"Add btn"}/></div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Step3;
