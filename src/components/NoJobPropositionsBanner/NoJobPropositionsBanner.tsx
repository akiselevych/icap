import Image from "next/image"
import { baseImageUrl2 } from "@/services/API"
const banner = `${baseImageUrl2}/IllustrationnoJobBanner.png`
//compomemts
import JobPropositionForm from "../JobPropositionForm/JobPropositionForm";
//styles
import classNames from 'classnames';
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'



const NoJobPropositionsBanner = ({ vacancyId }: { vacancyId: string }) => {
  return (
    <div className={styles.container}>
      <Image width={298} height={327} className={styles.image} src={banner} alt="no job" />
      <div className={classNames(global.pageTitle, styles.title)}>
        Lorem ipsum dolor sit amet
      </div>
      <div className={styles.subTitle}>
        Ehrlich gesagt, wir haben gesucht, aber...
      </div>
      <JobPropositionForm vacancyId={vacancyId} />
      <div className={styles.radial1}></div>
      <div className={styles.radial2}></div>
      <div className={styles.radial3}></div>
      <div className={styles.radial4}></div>
      <div className={styles.radial5}></div>
    </div>
  )
}

export default NoJobPropositionsBanner