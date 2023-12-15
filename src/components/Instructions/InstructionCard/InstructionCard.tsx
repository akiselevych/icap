import Image, {StaticImageData} from "next/image";
import React from "react";
import {motion} from "framer-motion";

import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";
import classNames from "classnames";

interface InstructionCardProps {
    title: string;
    description: string;
    imageUrl: string | StaticImageData;
    imgWidth: number;
    imgHeight: number;
    index: number;
    BCcolor: string;
    borderColor: string;
}
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
const blockAnimationTop = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.3,
        },
    },
};
const blockAnimationLeft = {
    hidden: {
        x: -400,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.3,
        },
    },
};
const blockAnimationRight = {
    hidden: {
        x: 400,
        opacity: 0,
    },
    visible: () => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    }),
};
const InstructionCard: React.FC<InstructionCardProps> = ({
                                                             description,
                                                             imageUrl,
                                                             title,
                                                             imgHeight,
                                                             imgWidth,
                                                             index,
                                                             BCcolor,
                                                             borderColor
                                                         }) => {
    const AnimImage = motion(Image);


    const handleAmount = () => {
        return typeof window != "undefined" && window.innerWidth > 800
    }
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variant}
            viewport={{ once: true, amount: handleAmount() ? 1 : 0.6 }}
            className={styles.instructionWrapper}
            style={{backgroundColor: BCcolor, border: `1px solid ${borderColor}`}}
        >
            <div className={styles.instructionBody} style={{flexDirection: index % 2 ? "row" : "row-reverse"}}>
                <AnimImage
                    width={imgWidth}
                    height={imgHeight}
                    variants={index % 2 === 0 ? blockAnimationRight : blockAnimationLeft}
                    src={imageUrl}
                    alt="Instruction Screenshots"
                    className={styles.instructionPhoto}
                    style={index % 2 ? {marginRight: "auto"} : {marginLeft: "auto"}}
                />
                <div className={styles.instructionText}>
                    <motion.h4
                        variants={blockAnimationTop}
                        className={classNames(global.mediumTitle, styles.instructionTitle)}
                    >
                        {title}
                    </motion.h4>
                    <motion.p
                        variants={index % 2 ? blockAnimationLeft : blockAnimationRight}
                        className={styles.instructionDesc}
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default InstructionCard;
