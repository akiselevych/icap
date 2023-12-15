import styles from "./styles.module.scss"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useAnimation, motion } from "framer-motion"


const LanguageSwitcher = () => {
    const { locale, locales, push, asPath } = useRouter()
    const [isPickerOpen, setIsPickerOpen] = useState(false)
    const controls = useAnimation();

    const toggleSelectBlock = () => {
        setIsPickerOpen((prev) => !prev);
    };

    useEffect(() => {
        controls.start(isPickerOpen ? "open" : "closed");
    }, [isPickerOpen, controls]);

    const variants = {
        open: {
            maxHeight: "300px",
            opacity: 1,
            transform: "translateY(0%)",
            transformOrigin: "top",
        },
        closed: {
            maxHeight: "0",
            opacity: 0,
            transform: "translateY(-100%)",
            transformOrigin: "top",
        },
    };
    return (
        <div className={styles.container}>
            <div onClick={toggleSelectBlock} className={styles.pickedBlock}>
                <div className={styles.lang}> {locale ? (locale?.charAt(0).toUpperCase() + locale?.slice(1)) : ''}</div>
            </div>
            <motion.div
                className={styles.selectBlock}
                variants={variants}
                initial="closed"
                animate={controls}
            >
                {locales?.filter(l => l !== locale).map(l => <div className={styles.lang} key={l} onClick={() => {
                    push(asPath, undefined, { locale: l });
                    setIsPickerOpen(false)
                }}>{l.charAt(0).toUpperCase() + l?.slice(1)}</div>)}
            </motion.div>
        </div>
    )
}

export default LanguageSwitcher