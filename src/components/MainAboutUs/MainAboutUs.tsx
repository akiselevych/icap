//libs
import { motion } from "framer-motion";
import classNames from 'classnames';
import { FC, useMemo } from "react"
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { RootStateType, AppDispatch, WorkerPositionType, IworkerItem } from '@/types';
import { ITranslateProp } from "@/types";
//redux
import { fetchWorkers } from '@/reduxFolder/slices/Workers.slice';
//components
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import Link from 'next/link';
import ErrorBanner from "../EmptyListBanner/EmptyListBanner";
import Image from "next/image";
//images
import { baseImageUrl2 } from "@/services/API"
const spinnerImage = `${baseImageUrl2}/spinner.svg`

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  },
};

const MainAboutUs: FC<ITranslateProp> = ({ t }) => {
  const dispatch = useDispatch<AppDispatch>()
  const workers = useSelector((state: RootStateType) => state.Workers.workers)
  const loadWorkersSatatus = useSelector((state: RootStateType) => state.Workers.loadWorkersSatatus)


  useEffect(() => {
    if (!workers.length) dispatch(fetchWorkers())
    //eslint-disable-next-line
  }, [])

  const spinner = loadWorkersSatatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadWorkersSatatus === 'error' ? <ErrorBanner t={t} /> : null
  const content = loadWorkersSatatus === 'idle' ? workers.slice(0, 3).map(({ name, email, image, position }, index) => (
    <motion.li
      key={index}
      className={styles.cardWrapper}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <EmployeeCard key={index} email={email} name={name} image={image} role={t(position)} />
    </motion.li>
  )) : null

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={global.sectionTitle}>{t("teamMainPageSection")}</h2>
        <Link href="/uber-uns"><div className={classNames(styles.link, "link")}>{t("teamMainPageButton")}</div></Link>
      </div>
      <motion.ul
        className={styles.content}
      >
        {spinner}
        {error}
        {content}
      </motion.ul>
    </div>
  );
};

export default MainAboutUs;