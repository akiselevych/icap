"use client"
import Image from 'next/image'
import {FC, useState} from 'react'
import {motion} from 'framer-motion';
//images
import open from "../../images/openIcon.svg"
import close from "../../images/closeIcon.svg"
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'


interface Props {
    text: string
    answ: string;
}

const QuetionItem: FC<Props> = ({text, answ}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div onClick={() => setIsOpen(prev => !prev)}
             className={`${styles.quetionsItem} ${isOpen && styles.activeItem}`}>
            <div className={styles.topRow}>
                <p className={`${styles.questionText}`}>{text}</p>
                <Image alt={isOpen ? 'open' : 'close'} src={isOpen ? open : close}/>
            </div>
            {isOpen &&

                <motion.p
                    className={styles.bottomRow}
                    initial={{height: 0, opacity: 0}} // Початковий стан
                    animate={{height: 'auto', opacity: 1}} // Кінцевий стан при відкритті
                    exit={{height: 0, opacity: 0}} // Стан при закритті
                    transition={{duration: 0.3}} // Тривалість анімації
                >{answ}
                </motion.p>
            }
        </div>
    )
}

export default QuetionItem