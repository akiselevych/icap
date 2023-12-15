//libs
import Image from "next/image";
import { useForm } from "react-hook-form";
import {FC, useEffect, useState} from "react"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//components
import ModalWindow from '@/components/ModalWindow/ModalWindow';
//types 
import { ITranslateProp } from "@/types";
//images
import { baseImageUrl } from "@/services/API";
const image = `${baseImageUrl}/ContactImage.webp`;
import { baseImageUrl2 } from "@/services/API"
import {compareLstDate, setLastDate} from "@/utils/validateDateOfReq";
import LimitBanner from "@/components/RequirementsForm/steps/InfoBanners/LimitBanner";
const afterSubmitBanner = `${baseImageUrl2}/afterSubmitBanner.png`


const MainContactForm: FC<ITranslateProp> = ({ t }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, []);

  const onSubmit = (data: any) => {
    if (compareLstDate("mainContactForm")){
      fetch("https://api.icapgroupgmbh.com/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then((res) => {
        reset()
        setIsModalOpen(true)
      })
      setLastDate("mainContactForm");
    }
  }

  return (
    <>
      {isClient && <div className={styles.container}>
        <div className={styles.leftSide}>
          <Image width={369} height={406} src={image} alt={"Get In Touch Image"} className={styles.image}/>
          <div className={styles.radial}></div>
        </div>
        <div className={styles.rightSide}>
          <h2 className={`${global.sectionTitle} ${styles.title}`}>{t("contactUsMainPageSection1")}</h2>
          {!compareLstDate("mainContactForm") ?
              <div>Sie haben die maximale Anzahl von Anträgen für heute erreicht. Wir erinnern Sie daran, dass Sie nur 3
                Anfragen innerhalb von 24 Stunden erstellen können.
                Ihre Anfrage ist bei uns eingegangen und wir werden uns so schnell wie möglich mit Ihnen in Verbindung
                setzen. Wenn Sie dringend Hilfe benötigen, nutzen Sie bitte unsere Kontaktinformationen. Wir danken
                Ihnen für Ihre Geduld!</div> : <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputBlock}>
                  <label className={styles.label}>{t("contactUsMainPageSection2")}</label>
                  <input {...register("name", {required: true})} className={styles.input} type="text"
                         placeholder="Text"/>
                </div>
                <div className={styles.inputBlock}>
                  <label className={styles.label}>{t("contactUsMainPageSection3")}</label>
                  <input {...register("email", {required: true})} className={styles.input} type="email"
                         placeholder="email@test.com"/>
                </div>
                <div className={styles.inputBlock}>
                  <label className={styles.label}>{t("contactUsMainPageSection4")}</label>
                  <textarea {...register("notice", {required: true})} className={styles.textarea}
                            placeholder={t("contactUsMainPageSection5")}/>
                </div>
                <input className={global.primaryButton} disabled={!isValid} type="submit"
                       value={t("contactUsMainPageSection6")}/>
              </form>}
        </div>
      </div>}
      {
        isModalOpen &&
        <ModalWindow
          onClose={() => setIsModalOpen(false)}
          image={afterSubmitBanner}
          title='Wir haben Ihre Kontaktinformationen erhalten!'
          text='Vielen Dank für Ihre Bereitstellung Ihrer Kontaktinformationen. Ihr Interesse ist uns wichtig! Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen, um Ihnen weiterzuhelfen. ' />
      }
    </>

  );
};

export default MainContactForm;