//libs
import {FC} from "react";
import Image, {StaticImageData} from "next/image";
import {motion} from 'framer-motion';
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"


const blockAnimationRight = {
    hidden: {
        x: 700,
        opacity: 0
    },
    visible: () => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    })
}
const blockAnimationLeft = {
    hidden: {
        x: -700,
        opacity: 0
    },
    visible: () => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    })
}
const AnimImage = motion(Image);

interface Props {
    image: string | StaticImageData,
    icon: string | StaticImageData,
    imgWidth: number,
    imgHeight: number,
    title: string,
    desc: string,
    index: number,
}

const WebAppCard: FC<Props> = ({image, title, desc, index, imgWidth, imgHeight,icon}) => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{amount: 0.8, once: true}}
            className={styles.container}>
            <div className={styles.image}>
                <AnimImage width={imgWidth} height={imgHeight} priority
                           variants={index % 2 === 0 ? blockAnimationLeft : blockAnimationRight} src={image}
                           alt={"OEG Image"}/>
            </div>
            <motion.div variants={index % 2 === 0 ? blockAnimationRight : blockAnimationLeft} className={styles.text}>
                <div className={styles.head}>
                    <Image src={icon} alt={desc}/>
                    <h4 className={`${global.mediumTitle} ${styles.title}`}>{title}</h4>
                </div>
                <p className={styles.desc}>{desc}</p>
            </motion.div>
        </motion.div>
    );
};

export default WebAppCard;
