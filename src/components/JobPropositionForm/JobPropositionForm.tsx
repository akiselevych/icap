//styles
import classNames from 'classnames';
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'
//components
import ModalWindow from '@/components/ModalWindow/ModalWindow';
//libs
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'
//redux
import { useDispatch, useSelector } from 'react-redux';
import { sendEmail } from '@/reduxFolder/slices/Email.slice';
//types
import { AppDispatch } from '@/types';
//images
import { baseImageUrl2 } from "@/services/API";
import {compareLstDate, setLastDate} from "@/utils/validateDateOfReq";
import LimitBanner from "@/components/RequirementsForm/steps/InfoBanners/LimitBanner";
const afterSubmitBanner = `${baseImageUrl2}/afterSubmitBanner.png`

type Inputs = {
  name: string,
  email: string,
  text: string,
  file: File
}


const JobPropositionForm = ({ vacancyId }: { vacancyId: string }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, []);
  const dispatch = useDispatch<AppDispatch>()
  const sendEmailStatus = useSelector((state: any) => state.Email.sendEmailStatus)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const [fileInputValue, setFile] = useState<File | undefined>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)


  const onSubmit = (data: Inputs) => {
    if (compareLstDate("jobPropositionForm")){
      if (fileInputValue) {
        const { email, text, name, file } = data
        const formData = new FormData()
        formData.append('full_name', name)
        formData.append('email', email)
        formData.append('message', text)
        formData.append('position_id', vacancyId)
        formData.append('file', fileInputValue)

        dispatch(sendEmail({ formData }))
            .then(() => {
              reset()
              setFile(undefined)
              setIsModalOpen(true)
            })
      }
      setLastDate("jobPropositionForm")
    }
  }


  const onFileChange = (e: any) => {
    setFile(e.target.files[0])
  }


  return (
    <>
      {isClient && !compareLstDate("jobPropositionForm") ? <LimitBanner/> : <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <div className={classNames(styles.title, global.mediumTitle)}>
          Bewerben Sie sich auf eine freie Stelle
        </div>
        <div className={styles.inputsBlock}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>Vollständiger Name</label>
            <input  {...register("name", {required: true})} className={styles.input} type="text" placeholder="Text"/>
            {errors.name && errors.name.type === 'required' && <p className={styles.error}>Field is required</p>}
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>E-Mail</label>
            <input  {...register("email", {required: true})} className={styles.input} type="email"
                    placeholder="email@test.com"/>
            {errors.email && errors.email.type === 'required' && <p className={styles.error}>Field is required</p>}
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>Erzählen Sie uns von sich</label>
            <textarea  {...register("text")} className={styles.textarea}
                       placeholder="Sagen Sie uns, womit wir Ihnen helfen können"/>
          </div>
        </div>
        <div className={styles.btnGroup}>
          <input disabled={sendEmailStatus === "loading"} type='submit'
                 className={classNames(global.primaryButton, styles.btn)} value=" Antworten Sie"/>
          <label htmlFor='CVinputJob' className={classNames(global.secondaryButton, styles.btn)}>
            <div className={styles.btnText}> CV-Datei hinzufügen</div>
          </label>
          <input
              className={styles.input}
              style={{display: "none"}}
              id="CVinputJob"
              hidden
              {...register("file", {required: true, onChange: (e) => onFileChange(e)})}
              type="file"/>
          {errors.file && errors.file.type === 'required' &&
              <p className={classNames(styles.error, styles.fileError)}>Field is required</p>}
          <div className={styles.textBar}>
            {sendEmailStatus === "idle" && <div style={{color: "transparent"}} className={styles.sending}>.</div>}
            {sendEmailStatus === "loading" && <div className={styles.sending}>Sending...</div>}
            {sendEmailStatus === "error" && <div className={styles.sending}>Error</div>}
            {fileInputValue && fileInputValue.name}
          </div>
        </div>
      </form>}
      {
        isModalOpen &&
        <ModalWindow
          onClose={() => setIsModalOpen(false)}
          image={afterSubmitBanner}
          title='Wir haben Ihre Kontaktinformationen erhalten!'
          text='Vielen Dank für Ihre Bereitstellung Ihrer Kontaktinformationen. Ihr Interesse ist uns wichtig! Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen, um Ihnen weiterzuhelfen. ' />
      }
    </>
  )
}

export default JobPropositionForm