//libs
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import {motion} from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import NewTrustCompanies from "@/components/SeoTrustUsCompanies/NewTrustCompanies";
import React, {FC} from "react";

interface Props {
    title: JSX.Element,
    desc: JSX.Element,
    image: StaticImageData
}

const AnimImage = motion(Image);

const NewPageBanner: FC<Props> = ({title,desc,image}) => {
    const variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
            }
        }
    };
    const ImageVariant = {
        hidden: {
            scale: 0.9
        },
        visible: {
            scale: 1,
            transition: {
                repeat: Infinity,
                repeatType: "mirror" as "mirror",
                duration: 1.8,
            }
        }
    };
    return (
        <section>
            <motion.section initial="hidden"
                            whileInView="visible"
                            variants={variant}
                            viewport={{once: true, amount: 0.7}} className={styles.container}>
                <div className={styles.left}>
                    <h1 className={`${global.pageTitle} ${styles.title}`}>{title}</h1>
                    <p className={styles.desc}>{desc}</p>
                    <Link href={"/kontakt"} className={`${global.primaryButton} ${styles.btn}`}>Get in contact</Link>
                </div>
                <div className={styles.right}>
                    <AnimImage initial="hidden"
                               whileInView="visible"
                               variants={ImageVariant}
                               viewport={{once: true, amount: 0.7}} src={image} alt={"Search Engine Optimization Services"} className={styles.image}/>
                </div>
            </motion.section>
            <NewTrustCompanies/>
        </section>

    );
};

export default NewPageBanner;
