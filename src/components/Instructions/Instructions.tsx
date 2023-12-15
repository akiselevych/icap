//libs
import {useMemo} from "react";
import {motion} from "framer-motion";
//styles
import styles from "./styles.module.scss";
import global from "@/styles/global.module.scss";
//components
import InstructionCard from "./InstructionCard/InstructionCard";
//images
const vorher = `${baseImageUrl2}/vorher.png`
const nachher=  `${baseImageUrl2}/nachher.png`
import {baseImageUrl2} from "@/services/API";
// import { ITranslateProp } from "@/types";


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

const Instructions /* FC<ITranslateProp> */ = () => {
    const INSTUCTIONS_MOCK = useMemo(() => {
        return [
            {
                instructionPhoto: vorher,
                imgWidth: 545,
                imgHeight: 335,
                title: "Ohne uns",
                desc: "Wenig Kundenanfragen, Hohe Kosten",
                borderColor: "#E0E0E0",
                backgroundColor: "#F9F9F9",
            },
            {
                instructionPhoto: nachher,
                imgWidth: 524,
                imgHeight: 350,
                title: "Mit uns",
                desc: "623 % mehr Kundenanfragen bei gleichem Werbebudget. > 1.000.000 € an Wert kreiert",
                borderColor: "#A1EBFF",
                backgroundColor: "#EFFAFD"
            },
        ];
    }, []);

    return (
        <motion.section id="ourProjects" className={styles.container} initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{ once: true, amount: 0.2 }}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>Ein Beispiel aus der Hausverwaltungsbranche</h2>
            <div className={styles.content}>
                {INSTUCTIONS_MOCK.map((instruction, index) => {
                    return (
                        <InstructionCard
                            BCcolor={instruction.backgroundColor}
                            borderColor={instruction.borderColor}
                            key={index}
                            description={instruction.desc}
                            title={instruction.title}
                            imageUrl={instruction.instructionPhoto}
                            imgHeight={instruction.imgHeight}
                            imgWidth={instruction.imgWidth}
                            index={index}
                        />
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Instructions;
