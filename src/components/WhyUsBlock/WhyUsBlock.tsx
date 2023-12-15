//libs
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'
//images
import icon1 from "../../../public/assets/icons/blueStar.svg"
import icon2 from "../../../public/assets/icons/blueLamp.svg"
import icon3 from "../../../public/assets/icons/blueUser.svg"
import icon4 from "../../../public/assets/icons/blueLike.svg"
import icon5 from "../../../public/assets/icons/blueArrLoop.svg"
import icon6 from "../../../public/assets/icons/blueSettings.svg"

const CARDS = [
  {
    title: "Fachwissen",
    text: "Unerreichte Kompetenz bei der Entwicklung von Websites, Software und mobilen Anwendungen",
    image: icon1
  },
  {
    title: "Innovation",
    text: "Ideen werden durch innovative Technologie in wegweisende Lösungen umgewandelt.",
    image: icon2
  },
  {
    title: "Nutzerzentriert",
    text: "Perfekte Harmonie von Funktion und Eleganz durch Benutzerfreundlichkeit in unseren Kreationen.",
    image: icon3
  },
  {
    title: "Verlässlichkeit",
    text: "Nachgewiesene Erfolgsbilanz bei der termingerechten Bereitstellung robuster, zuverlässiger IT-Lösungen",
    image: icon4
  },
  {
    title: "Skalierbarkeit",
    text: "Anpassungsfähige Lösungen für wachsende Bedürfnisse und sich ändernde Anforderungen.",
    image: icon5
  },
  {
    title: "Personalisierung",
    text: "Individuelle Websites, Software und Apps – perfekt für Ihre Geschäftsanforderungen gestaltet.",
    image: icon6
  },
]

const variant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
};

const WhyUsBlock = () => {
  return (
    <section className={styles.container}>
      <motion.h2 initial="hidden"
                 whileInView="visible"
                 variants={variant}
                 viewport={{once: true, amount: 0.8}} className={`${global.sectionTitle} ${styles.title}`}>
        Warum wir: Ihre erste Wahl für überragenden Service und Qualität
      </motion.h2>
      <div className={styles.content}>
        {
          CARDS.map((card, index) => (
            <motion.div  initial="hidden"
                         whileInView="visible"
                         variants={variant}
                         viewport={{once: true, amount: 0.8}} className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image width={30} height={30} className={styles.cardIcon} src={card.image} alt={"Icon"} />
              </div>
              <div className={styles.textBlock}>
                <h5 className={styles.cardTitle}>{card.title}</h5>
                <p className={styles.cardDesc}>{card.text}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
};

export default WhyUsBlock;
