//libs
import { FC } from "react";
import { motion } from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//components
import FAQblock from "@/components/Faq/FAQblock/FAQblock";


interface Props{
    questions: {
        text: string,
        answer: string
    }[],
    title: string,

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

const Faq: FC<Props> = ({ questions, title }) => {
    return (
        <motion.section className={styles.container} initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: 0.5}}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>
                {title}
            </h2>
            <FAQblock questions={questions}/>
        </motion.section>
    );
}

export default Faq;
