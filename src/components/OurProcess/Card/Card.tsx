//libs
import { FC } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//styles
import styles from "./styles.module.scss"


const Card: FC<{ logo: string, title: string, desc: string }> = ({ logo, title, desc }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const variants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5 }}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image width={64} height={64} src={logo} alt={"Process Logo"} />
                </div>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.desc}>{desc}</p>
            </div>
        </motion.div>

    );
};

export default Card;
