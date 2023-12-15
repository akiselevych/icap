//libs
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {motion} from "framer-motion";
//components
import Skeleton from "@/components/UI/Skeleton/Skeleton";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
//redux
import { useDispatch, useSelector } from "react-redux";
import { RootStateType, AppDispatch } from "@/types";
import { fetchWorkers } from "@/reduxFolder/slices/Workers.slice";
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'
import classNames from "classnames";
//images
import phoneIconIcon from "../../../public/assets/icons/bluePhone.svg"
import blueMailIcon from "../../../public/assets/icons/blueMailIcon.svg"

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

const MainAboutUsV2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const workers = useSelector((state: RootStateType) => state.Workers.workers);
  const loadWorkersStatus = useSelector((state: RootStateType) => state.Workers.loadWorkersSatatus);

  useEffect(() => {
    if (!workers.length) dispatch(fetchWorkers());
    //eslint-disable-next-line
  }, [])

  const handleViewPort = () => {
    return typeof window != 'undefined' && window.innerWidth > 680
  }

  const card = loadWorkersStatus === 'idle' ? workers.slice(0, 1).map((card, i) => (
    <div className={styles.card} key={i}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} width={260} height={268} src={card.image} alt={card.name} />
      </div>
      <div className={styles.textBlock}>
        <p className={styles.name}>{card.name}</p>
        <p className={styles.position}>Geschäftsführer</p>
      </div>
    </div>
  )) : null

  const error = loadWorkersStatus === 'error' ? "error..." : null

  const loading = loadWorkersStatus === 'loading' ? (new Array(1).fill(null).map((item, i) => {
    return <Skeleton className={styles.skeletCard} key={Math.random()} />
  })) : null

  return (
    <motion.section initial="hidden"
                    whileInView="visible"
                    variants={variant}
                    viewport={{once: true, amount: handleViewPort() ? 0.8 : 0.4}} className={styles.container}>
      <div className={styles.leftCol}>
        {card}
        {loading}
        {error}
        <div className={classNames(styles.linksBlock, styles.mobile)}>
          <div className={styles.contact}>
            <div className={styles.iconWrapper}>
              <Image width={16} height={16} alt="volkerhuetter@icapgroupgmbh.com" src={blueMailIcon} />
            </div>
            <Link className={styles.link} href="mailto:volkerhuetter@icapgroupgmbh.com">
              volkerhuetter@icapgroupgmbh.com
            </Link>
          </div>
          <div className={styles.contact}>
            <div className={styles.iconWrapper}>
              <Image width={16} height={16} alt="07131 3829183" src={phoneIconIcon} />
            </div>
            <Link className={styles.link} href="tel:07131 3829183">
              07131 3829183
            </Link>
          </div>
          <Link href="/" className={classNames(global.secondaryButton, styles.btn)}>
            Siehe alle Mitarbeiter
          </Link>
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.titleBlock}>
          <p className={styles.smallText}>
            Unser Team
          </p>
          <h2 className={`${global.sectionTitle} ${styles.title}`}>
            Wir kümmern uns um Ihr Unternehmen
          </h2>
          <p className={styles.text}>
            Willkommen bei ICAP Group GmbH – Ihrem Innovationspartner für herausragende Webentwicklung. Unsere Experten kombinieren technische Exzellenz mit kreativem Flair, um maßgeschneiderte Lösungen zu schaffen. Entdecken Sie die Köpfe hinter unseren bahnbrechenden Websites, wo Talent und Hingabe den Kern unseres Erfolgs bilden.Willkommen in der Welt der Zukunft, willkommen bei ICAP.
          </p>
        </div>
        <div className={classNames(styles.linksBlock, styles.desktop)}>
          <div className={styles.contact}>
            <div className={styles.iconWrapper}>
              <Image width={16} height={16} alt="volkerhuetter@icapgroupgmbh.com" src={blueMailIcon} />
            </div>
            <Link className={styles.link} href="mailto:volkerhuetter@icapgroupgmbh.com">
              volkerhuetter@icapgroupgmbh.com
            </Link>
          </div>
          <div className={styles.contact}>
            <div className={styles.iconWrapper}>
              <Image width={16} height={16} alt="07131 3829183" src={phoneIconIcon} />
            </div>
            <Link className={styles.link} href="tel:07131 3829183">
              07131 3829183
            </Link>
          </div>
          <Link href="/uber-uns" className={classNames(global.secondaryButton, styles.btn)}>
            Siehe alle Mitarbeiter
          </Link>
        </div>
      </div>
      {/* <div className={styles.titleBlock}>
        <p className={styles.smallText}>
          Unser Team
        </p>
        <h2 className={`${global.sectionTitle} ${styles.title}`}>
          Wir kümmern uns um Ihr Unternehmen
        </h2>
      </div>
      <div className={styles.content}>
        {card}
        {loading}
        {error}
      </div>
      <Link href="/" className={classNames(global.secondaryButton, styles.btn)}>
        Siehe alle Mitarbeiter
      </Link> */}
    </motion.section>
  );
};

export default MainAboutUsV2;
