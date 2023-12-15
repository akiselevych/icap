//libs
import { useRef } from "react";
//components
import Footer from "../Footer/Footer"
import Header from "@/components/Header/Header"
//styles
import styles from './styles.module.scss'
import Banner from "@/components/Banner/Banner";
//types
import { TFunction } from "next-i18next";


const Layout = ({ children, t }: { children: React.ReactNode, t: TFunction }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.wrapper}>
      <Header t={t} />
      <main className={styles.main}>{children}</main>
      <Footer t={t} />
      <Banner t={t} overlayRef={overlayRef} />
      <div ref={overlayRef} className={styles.overlay}></div>
    </div>
  )
}

export default Layout;