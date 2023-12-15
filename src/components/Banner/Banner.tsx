//libs
import { FC, MouseEventHandler, RefObject, useEffect, useState } from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types 
import { ITranslateProp } from "@/types";
//images
import { baseImageUrl } from "@/services/API";
const closeIcon = `${baseImageUrl}/icons/close.svg`
const cookie = `${baseImageUrl}/icons/cookie.svg`

interface IProps extends ITranslateProp {
    overlayRef: RefObject<HTMLDivElement>
}

const Banner: FC<IProps> = ({ overlayRef, t }) => {
    const [isBanner, setIsBanner] = useState(false);

    useEffect(() => {
        // @ts-ignore
        if (typeof window !== 'undefined' && !JSON.parse(localStorage.getItem("cookieProtection")) && overlayRef.current) {
            setIsBanner(true)
            overlayRef.current.style.display = "block";
        }

        //eslint-disable-next-line
    }, []);

    const btnCloseHandler = () => {
        localStorage.setItem("cookieProtection", JSON.stringify(true))
        setIsBanner(false);
        if (overlayRef.current) {
            overlayRef.current.style.display = "none";
        }
    }
    return (
        <>
            {isBanner && <div className={styles.container}>
                <Image width={16} height={16} src={closeIcon} alt={"Close banner"} onClick={btnCloseHandler} className={styles.closeBtn} />
                <div className={styles.header}>
                    <div className={`${global.smallTitle} ${styles.title}`}>{t("cookiesModalTitel")}</div>
                    <Image width={24} height={24} src={cookie} alt={"Cookie"} />
                </div>

                <div className={styles.text}>
                    {t("cookiesModalText")}
                </div>
                <div className={styles.btnContainer}>
                    <div className={`${global.primaryButton} ${styles.acceptBtn}`} onClick={btnCloseHandler}>
                        {t("cookiesModalBtn1")}
                    </div>
                    <div className={`${global.secondaryButton} ${styles.declineBtn}`} onClick={btnCloseHandler}>
                        {t("cookiesModalBtn3")}
                    </div>
                </div>
            </div>}
        </>

    );
};

export default Banner;
