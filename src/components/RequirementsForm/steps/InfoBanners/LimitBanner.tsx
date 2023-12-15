import React from 'react';
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
const img = `${baseImageUrl2}/limitImage.png`
import {baseImageUrl2} from "@/services/API";
const LimitBanner = () => {
    return (
        <div className={styles.container}>
            <p className={styles.desc}>Sie haben die maximale Anzahl von Anträgen für heute erreicht. Wir erinnern Sie daran, dass Sie nur 3 Anfragen innerhalb von 24 Stunden erstellen können.
                Ihre Anfrage ist bei uns eingegangen und wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen. Wenn Sie dringend Hilfe benötigen, nutzen Sie bitte unsere Kontaktinformationen. Wir danken Ihnen für Ihre Geduld!
            </p>
            <Image src={img} alt={"Image"} width={165} height={263} className={styles.image}/>
        </div>
    );
};

export default LimitBanner;
