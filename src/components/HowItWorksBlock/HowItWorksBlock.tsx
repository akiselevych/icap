//libs
import { useState, FC, useMemo } from "react"
import { motion } from "framer-motion";
//components
import Card from "./Card/Card";
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import { StaticImageData } from "next/image";
const howItWorksImage1 = `${baseImageUrl2}/howItWorksImage1.svg`
const howItWorksImage2 = `${baseImageUrl2}/howItWorksImage2.svg`
const howItWorksImage3 = `${baseImageUrl2}/howItWorksImage3.svg`
const howItWorksImage4 = `${baseImageUrl2}/howItWorksImage4.svg`
const howItWorksImage5 = `${baseImageUrl2}/howItWorksImage5.svg`
//types 

//services
import {baseImageUrl2} from "@/services/API";


const HowItWorksBlock = () => {


  const cards: {
    text: string;
    image: StaticImageData | string
  }[] = [
      {
        text: "Konkurrenz Analyse (was funktioniert bereits)",
        image: howItWorksImage1

      },
      {
        text: "Analyse Schwachstellen jetzige Webseite (was kann verbessert werden)",
        image: howItWorksImage2
      }
      , {
        text: "Erstellung Design der Webseite nach Vertrauen-Expertise-Schnapp Prinzip",
        image: howItWorksImage3
      }, {
        text: "Design mit Werten/Marke des Kunden übereinstimmig? Ja, weiter in die Entwicklung",
        image: howItWorksImage4
      }, {
        text: "Implementierung der Webseite in die Praxis. Wir erreichen die garantierte Anzahl an Kundenanfragen innerhalb von drei Monaten - oder Sie erhalten sofort ihr gesamtes Geld zurück UND behalten die Webseite.",
        image: howItWorksImage5
      }
    ]
  //eslint-disable-next-line

  return (
    <section
      className={styles.container}>
      <h2 className={global.sectionTitle}>Die Umsetzung</h2>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => <Card {...card} number={index + 1} key={index} />)}
      </div>
    </section>
  )
}

export default HowItWorksBlock