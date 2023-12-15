//libs
import Image from "next/image";
import {motion} from "framer-motion";
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'
//images
import image1 from '../../../public/assets/OurServicesV2/OEG.png'
import image2 from '../../../public/assets/OurServicesV2/mobileCRM.png'
import image3 from '../../../public/assets/OurServicesV2/SUerp.png'
import image4 from '../../../public/assets/OurServicesV2/OEG2.png'
import classNames from "classnames";

const CARDS = [
  {
    topRow: "Software",
    title: "Revolutionieren mit Web Apps: Präzision in digitalen Erlebnissen",
    descr: "Die Cloud verbindet Ihre Mitarbeiter, Kunden und Prozesse miteinander.",
    image: image1,
    path: "/web-anwendungen"
  },
  {
    topRow: "Mobile Anwendungen",
    title: "Mobilität meistern: Mit mobilen Apps Innovationen freisetzen",
    descr: "Die Brücke zwischen Innen- und Außendienst. Bildschirm statt Papier.",
    image: image2,
    path: "/mobile-anwendungen"
  },
  {
    topRow: "Digitalisierung",
    title: "Die Macht von morgen: Navigieren an der digitalen Grenze",
    descr: "Von der analogen Welt zur digitalen Realität - ein innovativer Transformationsprozess.",
    image: image3,
    path: "/digitalisierung"
  },
  {
    topRow: "Automatisierung von Geschäftsprozessen",
    title: "Effizienz pur: Ihr Business mit automatisierten Lösungen",
    descr: "Die Zukunft hat bereits begonnen: schlanke Prozesse durch Automatisierung.",
    image: image4,
    path: "/automatisierung"
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
const OurServicesV2 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleBlock}>
        <motion.p   initial="hidden"
                 whileInView="visible"
                 variants={variant}
                 viewport={{once: true, amount: 0.8}} className={styles.smallText}>
          Unsere Dienstleistungen
        </motion.p>
        <motion.h2  initial="hidden"
                 whileInView="visible"
                 variants={variant}
                 viewport={{once: true, amount: 0.8}}  className={`${global.sectionTitle} ${styles.title}`}>
          Entdecken Sie unser umfassendes Serviceangebot
        </motion.h2>
      </div>
      <div className={styles.content}>
        {
          CARDS.map((card, i) => (
            <motion.div  initial="hidden"
                         whileInView="visible"
                         variants={variant}
                         viewport={{once: true, amount: 0.6}} className={styles.card} key={i}>
              <div className={classNames(styles.topBlock, i % 2 ? styles.even : styles.odd)}>
                <p className={styles.topRowText}>{card.topRow}</p>
                <h5 className={styles.cardTitle}>{card.title}</h5>
                <div className={styles.imageWrapper}>
                  <Image height={218} width={336} src={card.image} alt={"People"} className={styles.image} />
                </div>
              </div>
              <div className={styles.bottomBlock}>
                <p className={styles.descr}>{card.descr}</p>
                <a href={card.path} className={styles.path}>
                  Mehr erfahren
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5337 8.38444C11.5337 8.22168 11.4686 8.07194 11.3449 7.95475L6.18864 2.90267C6.07145 2.79199 5.92822 2.7334 5.75895 2.7334C5.42692 2.7334 5.1665 2.9873 5.1665 3.32585C5.1665 3.48861 5.23161 3.63835 5.33577 3.74903L10.0754 8.38444L5.33577 13.0199C5.23161 13.1305 5.1665 13.2737 5.1665 13.4431C5.1665 13.7816 5.42692 14.0355 5.75895 14.0355C5.92822 14.0355 6.07145 13.9769 6.18864 13.8597L11.3449 8.81413C11.4686 8.69043 11.5337 8.5472 11.5337 8.38444Z" fill="#0E65F1" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
};

export default OurServicesV2;
