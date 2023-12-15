//conponents
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import JobPropositionForm from '@/components/JobPropositionForm/JobPropositionForm';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
//libs
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter as useRouter2 } from 'next/navigation';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import makeTextBold from '@/utils/makeTextBold';
//redux
import { fetchJobs } from '@/reduxFolder/slices/Jobs.slice';
//types
import { RootStateType, AppDispatch } from '@/types';
//styles
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'
//images
import { baseImageUrl2 } from "@/services/API"
import Script from "next/script";
const IllustrationjobPosBaner = `${baseImageUrl2}/IllustrationjobPosBaner.png`
const clock = `${baseImageUrl2}/clock.svg`
const spinnerImage = `${baseImageUrl2}/spinner.svg`


const jobIds: string[] = [];

export default function JobPage() {
  const { t } = useTranslation('translate');
  const router = useRouter();
  let { jobSlug } = router.query;
  const routerFn = useRouter2();
  const dispatch = useDispatch<AppDispatch>()
  const jobs = useSelector((state: RootStateType) => state.Jobs.jobs)
  const loadJobsSatatus = useSelector((state: RootStateType) => state.Jobs.loadJobsSatatus)

  useEffect(() => {
    if (!jobs.length) dispatch(fetchJobs())
    //eslint-disable-next-line
  }, [])

  const goBack = () => routerFn.back();

  const currrentJob = jobs.find(item => item.slug == jobSlug)


  const content = !!(jobs.length && currrentJob && loadJobsSatatus)
  const spinner = loadJobsSatatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadJobsSatatus === 'error' || (!currrentJob && jobs.length && loadJobsSatatus === "idle") ? <ErrorBanner t={t} /> : null
  //@ts-ignore
  const jobPropositionForm = <JobPropositionForm vacancyId={currrentJob?.id} />
  return (
      <>
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
        <Script id={"google-analytics-stellenangebote-job"} strategy={"afterInteractive"}>
          {
            `
                    window.dataLayerStellenangeboteJobSlug = window.dataLayerStellenangeboteJobSlug || [];
                    function gtag(){dataLayerStellenangeboteJobSlug.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
          }
        </Script>
        <Layout t={t}>
          <div className={styles.container}>
            {content &&
                <div className={styles.history}>
                  <div className={styles.historyItem} onClick={goBack}>Stellenangebote  </div>
                  <div className={styles.historyItem}>/ {currrentJob.name}</div>
                </div>}
            {content &&
                <div className={classNames(styles.block, styles.topBlock)}>
                  <div className={styles.textBlock}>
                    <h1 className={classNames(styles.title, global.sectionTitle)}>
                      {currrentJob.name}
                    </h1>
                    <div className={styles.descrBlock}>
                      {currrentJob.description.split("<br />").map((item, i) => (
                          <div key={i} className={styles.descrItem}>
                            {makeTextBold(item)}
                          </div>
                      ))}
                    </div>
                  </div>
                  <Image priority className={styles.image} width={211} height={342} src={IllustrationjobPosBaner} alt="banner" />
                </div>}
            {content &&
                <div className={styles.blocksContainer}>
                  <div className={styles.leftContainer}>
                    {getTextBlock("Was uns wichtig ist:", currrentJob.important_for_us.split("<br />"))}
                    {getTextBlock("Gewünschte fähigkeiten:", currrentJob.key_qualifications.split("<br />"))}
                    {getTextBlock("Zuständigkeiten:", currrentJob.role_responsibilities.split("<br />"))}
                    {getTextBlock("Vorteile einer Zusammenarbeit mit uns:", currrentJob.your_benefits.split("<br />"))}
                    <div className={styles.paramsBlock}>
                      <div className={classNames(styles.Body2, styles.optionRow)}>
                        <div className={styles.city}>{currrentJob.city} ·</div>
                        <div className={styles.type}>{currrentJob.type} ·</div>
                      </div>
                      <div className={styles.dateBlock}>
                        <Image width={20} height={20} src={clock} alt={"clock"} />
                        <div className={styles.Body2}>{currrentJob.date}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightContainer}>
                    {jobPropositionForm}
                  </div>
                </div>}
            {spinner}
            {error}
          </div>
        </Layout >
      </>

  );
}

function getTextBlock(title: string, data: string[]) {
  return (
    <div className={classNames(styles.block, styles.smallBlock)}>
      <div className={global.mediumTitle}>{title}</div>
      <div className={styles.points}>
        {
          data.map((item, i) => <div key={i} className={styles.textPoint}>{makeTextBold(item)}</div>)
        }
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = jobIds.map((jobId) => ({
    params: { jobId },
  }));

  return { paths, fallback: true };
}
//@ts-ignore
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['translate'])),
    },
  };
}
