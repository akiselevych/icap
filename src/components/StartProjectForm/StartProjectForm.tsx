//components
import ModalWindow from '@/components/ModalWindow/ModalWindow';
//libs
import { useForm } from "react-hook-form"
import {FC, useEffect, useState} from "react"
//types
import { ITranslateProp } from "@/types"
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import { baseImageUrl2 } from "@/services/API"
import {compareLstDate, setLastDate} from "@/utils/validateDateOfReq";
import LimitBanner from "@/components/RequirementsForm/steps/InfoBanners/LimitBanner";
const afterSubmitBanner = `${baseImageUrl2}/afterSubmitBanner.png`


const StartProjectForm: FC<ITranslateProp> = ({ t }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      isValid
    }
  } = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = (data: any) => {
    if (compareLstDate("startProjectForm")){
      fetch("/", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": '*'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        reset()
        setIsModalOpen(true)
      });
      setLastDate("startProjectForm");
    }
  }


  return (
    <>
      {isClient && <div className={styles.container}>
        <div className={styles.title}>{t("afterClickOnwebAppsAnalysis3Part1")} <span
            className={styles.important}>{t("afterClickOnwebAppsAnalysis3Part2")}</span></div>
        {!compareLstDate("startProjectForm") ? <LimitBanner/> :
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.nameBlock}>
                <div className={styles.inputBlock}>
                  <label className={styles.label}>{t("ContactForm1")}</label>
                  <input {...register("name", {required: true})} className={styles.input} type="text"
                         placeholder="Text"/>
                </div>
                <div className={styles.inputBlock}>
                  <label className={styles.label}>{t("ContactForm2")}</label>
                  <input {...register("surname", {required: true})} className={styles.input} type="text"
                         placeholder="Text"/>
                </div>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>{t("ContactForm3")}</label>
                <input {...register("company_name", {required: true})} className={styles.input} type="text"
                       placeholder="Text"/>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>{t("ContactForm4")}</label>
                <input {...register("email", {required: true})} className={styles.input} type="email"
                       placeholder="email@test.com"/>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>{t("ContactForm5")}</label>
                <input {...register("phone", {required: true})} className={styles.input} type="text"
                       placeholder="+49 000 000 00 00"/>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>{t("ContactForm6")}</label>
                <textarea {...register("notice", {required: true})} className={styles.textarea}
                          placeholder={t("ContactForm7")}/>
              </div>
              <div className={styles.btnContainer}>
                <input className={global.primaryButton} disabled={!isValid} type="submit" value={t("ContactForm8")}/>
              </div>
            </form>}
      </div>}
      {
        isModalOpen &&
        <ModalWindow
          onClose={() => setIsModalOpen(false)}
          image={afterSubmitBanner}
          title='Wir haben Ihre Kontaktinformationen erhalten!'
          text='Vielen Dank für Ihre Bereitstellung Ihrer Kontaktinformationen. Ihr Interesse ist uns wichtig! Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen, um Ihnen weiterzuhelfen.' />
      }</>
  )
}

export default StartProjectForm