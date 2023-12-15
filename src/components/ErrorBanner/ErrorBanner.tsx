import styles from "./styles.module.scss"
import Image from "next/image";
import { baseImageUrl2 } from "@/services/API"
const errorBoundaryBanner = `${baseImageUrl2}/errorBoundaryBanner.png`
import classNames from "classnames";
import global from "@/styles/global.module.scss"

const ErrorBanner = ({ t }: { t: (arg: string) => string }) => {
  return (
    <div className={styles.container}>
      <Image height={327} width={298} className={styles.image} src={errorBoundaryBanner} alt={t('errorBoundaryTitle')} />
      <div className={styles.errorText}>
        <div className={classNames(styles.errorTitle, global.mediumTitle)}>{t("errorBoundaryTitle")}</div>
        <div className={styles.errorSubtitle}>{t("errorBoundarySubtitle")}</div>
      </div>
    </div>
  )
}

export default ErrorBanner