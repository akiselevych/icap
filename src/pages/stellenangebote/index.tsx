//components
import Head from 'next/head'
import Layout from "@/components/Layout/Layout"
import JobPositionCard from '@/components/JobPositionCard/JobPositionCard';
import Image from 'next/image';
import NoJobPropositionsBanner from '@/components/NoJobPropositionsBanner/NoJobPropositionsBanner';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
//redux
import { fetchJobs } from '@/reduxFolder/slices/Jobs.slice';
//libs
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';
//types
import { AppDispatch, RootStateType } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import classNames from 'classnames';
//images
import { baseImageUrl2 } from "@/services/API"
import Script from "next/script";
const searchIcon = `${baseImageUrl2}/searchIcon.svg`
const spinnerImage = `${baseImageUrl2}/spinner.svg`



const Index = () => {
  const { t } = useTranslation("translate")
  const dispatch = useDispatch<AppDispatch>()
  const jobs = useSelector((state: RootStateType) => state.Jobs.jobs)
  const loadJobsSatatus = useSelector((state: RootStateType) => state.Jobs.loadJobsSatatus)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!jobs.length) dispatch(fetchJobs())
    //eslint-disable-next-line
  }, [])

  const spinner = loadJobsSatatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadJobsSatatus === 'error' ? <ErrorBanner t={t} /> : null
  const content = loadJobsSatatus === 'idle' ?
    jobs.filter(item => item.name.toLowerCase().includes(search)).map(({ name, date, city, type, description, id, slug }, i) => <JobPositionCard
      key={i}
      name={name}
      type={type}
      description={description}
      date={date}
      city={city}
      slug={slug}
      id={id} />)
    : null


  const noJobPropositionsBanner = <NoJobPropositionsBanner vacancyId={"0"} />
  return (
    <>
      <Head>

      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-stellenangebote"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerStellenangebote = window.dataLayerStellenangebote || [];
                    function gtag(){dataLayerStellenangebote.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        {error}
        <div className={styles.container}>
          {spinner}
          {!!jobs.length &&
            <>
              <h1 className={classNames(global.pageTitle, styles.title)}>
                Stellenangebote
              </h1>
              <div className={styles.searchBar}>
                <input value={search} onChange={e => setSearch(e.target.value)} className={styles.input} placeholder='Jobs suchen' type='tel' />
                <div className={classNames(global.primaryButton, styles.searchBtn)}>
                  <Image width={24} height={24} src={searchIcon} alt='search' />
                </div>
              </div>
              <div className={styles.cardContaier}>
                <ErrorBoundary t={t}>
                  {content}
                </ErrorBoundary>
              </div>
            </>}
          {!jobs.length && loadJobsSatatus === "idle" && noJobPropositionsBanner}
        </div>
      </Layout>
    </>
  )
}

//@ts-ignore
export async function getStaticProps({ locale }) {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['translate'])),
      // Will be passed to the page component as props
    },
  }
}


export default Index