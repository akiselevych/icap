//libs
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'
//images
import image1 from '../../../public/assets/workers/Volker.png'
import image2 from '../../../public/assets/workers/Yana.png'
import image3 from '../../../public/assets/workers/Daniil.png'
import classNames from "classnames";


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

const CallToActionBannerV2 = () => {
  return (
    <motion.section initial="hidden"
                    whileInView="visible"
                    variants={variant}
                    viewport={{once: true, amount: 0.8}} className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Kostenlose Erstberatung
        </h3>
        <p className={styles.text}>
          Erzählen Sie uns von Ihrem Projekt. Wir freuen uns auf Sie!
        </p>
        <Link href="https://calendly.com/icapgroup/digitalisierung-automatisierung?month=2023-12" className={classNames(global.secondaryButton, styles.btn)}>
          Beratung erhalten
        </Link>
      </div>
    </motion.section>
  );
};

export default CallToActionBannerV2;
