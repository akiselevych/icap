import React, {useEffect} from 'react';
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
const img = `${baseImageUrl2}/notmatch.png`
import {baseImageUrl2} from "@/services/API";
import {UseFormReset, UseFormSetValue} from "react-hook-form";
import {RequirementsFormInputs} from "@/types";
const NotMatch = () => {

    return (
        <div className={styles.container}>
            <p className={styles.desc}>Für Info-Seiten sind Webseit Builder die bessere Alternative. Sie sind kostengünstiger und erfüllen den Zweck einer digitalen Visitenkarten. Daher sind wir nicht ihr idealer Kooperationspartner in diesem Fall.</p>
            <Image src={img} alt={"Image"} width={165} height={263} className={styles.image}/>
        </div>
    );
};

export default NotMatch;
