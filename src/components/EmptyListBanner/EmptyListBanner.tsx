import styles from "./styles.module.scss"
import Image from "next/image";
import { baseImageUrl2 } from "@/services/API"
const emptyListBanner = `${baseImageUrl2}/emptyListBanner.png`
import classNames from "classnames";
import global from "@/styles/global.module.scss"

const EmptyListBanner = ({ t }: { t: (arg: string) => string }) => {
  return (
    <div className={styles.container}>
      <Image width={188} height={217} className={styles.image} src={emptyListBanner} alt={t("emptyListTitle")} />
      <div className={styles.errorText}>
        <div className={classNames(styles.errorTitle, global.mediumTitle)}>{t("emptyListTitle")}</div>
        <div className={styles.errorSubtitle}>{t("emptyListSubtitle")}</div>
      </div>
    </div>
  )
}

export default EmptyListBanner