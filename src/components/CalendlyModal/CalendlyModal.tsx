//libs
import {Dispatch, FC, SetStateAction, useEffect} from "react";
import Image from "next/image";
//styles
import styles from "./styles.module.scss";
//components
import SmokeOverlay from "@/components/CalendlyModal/SmokeOverlay";
import {baseImageUrl2} from "@/services/API";
//images
const remove = `${baseImageUrl2}/deleteFieldIcon.svg`


interface Props {
    isCalendlyOpen: boolean,
    setIsCalendlyOpen: Dispatch<SetStateAction<boolean>>,
    link: string
}

const CalendlyModal: FC<Props> = ({isCalendlyOpen, setIsCalendlyOpen, link}) => {
    useEffect(() => {
        const elem = document.querySelector("body");
        if (isCalendlyOpen && elem) {
            elem.style.overflowY = "hidden";
        } else if (!isCalendlyOpen && elem) {
            elem.style.overflowY = "auto";
        }
    }, [isCalendlyOpen]);

    return (
        <SmokeOverlay show={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)}>
            <div className={styles.bookModal}>
                <div className={styles.closeWrapper}>
                    <Image width={16} height={16} src={remove} alt={"Close btn"} className={styles.closeIcon}/>
                </div>
                <iframe src={link} loading={"eager"}
                        className={styles.calendly}></iframe>
            </div>
        </SmokeOverlay>
    );
};

export default CalendlyModal;
