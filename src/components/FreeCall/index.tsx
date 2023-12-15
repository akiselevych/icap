//libs
import {motion} from "framer-motion";
//styles
import global from '@/styles/global.module.scss'
import styles from './styles.module.scss'

const FreeCall = ({link} : {link: string}) => {
    const variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        },
    };
    return (
        <motion.section initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{once: true, amount: 0.25}} className={styles.container}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>Book a Free Consultation Call</h2>
            <iframe
                 className={styles.iframe}
                title="Calandly"
                src={link}>
            </iframe>

        </motion.section>
    );
};

export default FreeCall;
