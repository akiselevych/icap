//libs
import { FC } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//cpmponents
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

interface EmployeeCardProps {
  name: string;
  email?: string;
  image: string;
  role?: string;
}

const EmployeeCard: FC<EmployeeCardProps> = ({ name, email, role, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      }
    },
  };

  return (
    <motion.div
      // initial="hidden"
      // whileInView="visible"
      // variants={variants}
      // viewport={{ once: true, amount: 0.8 }}
      className={styles.wrapper}
    >
      <Image width={188} height={188} className={styles.image} alt={name} src={image} style={{ width: "188px", height: "188px" }} />
      <div className={global.smallTitle}>{name}</div>
      {role && <div className={styles.role}>{role}</div>}
      {email && <a href={`mailto: ${email}`} className={styles.email}>{email}</a>}
    </motion.div>
  );
};

export default EmployeeCard