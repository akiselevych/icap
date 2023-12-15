//components
import Layout from "@/components/Layout/Layout"
import AdminPageCard from "@/components/AdminPageCard/AdminPageCard";
import AdminTopBar from "@/components/AdminTopBar/AdminTopBar";
import Image from 'next/image';
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import EmptyListBanner from "@/components/EmptyListBanner/EmptyListBanner"
//libs
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//redux
import { fetchJobs } from '@/reduxFolder/slices/Jobs.slice';
//types
import { RootStateType, AppDispatch } from '@/types';
//styles
import styles from './styles.module.scss'
//images
import { baseImageUrl2 } from "@/services/API"
const spinnerImage = `${baseImageUrl2}/spinner.svg`
import { withAuth } from "@/services/AuthWrapper";
//components
import ErrorBanner from "@/components/ErrorBanner/ErrorBanner";
import Head from 'next/head';


const Index = () => {
  const { t } = useTranslation("translate")
  const dispatch = useDispatch<AppDispatch>()
  const jobs = useSelector((state: RootStateType) => state.Jobs.jobs)
  const loadJobsSatatus = useSelector((state: RootStateType) => state.Jobs.loadJobsSatatus)


  useEffect(() => {
    if (!jobs.length) dispatch(fetchJobs())
    //eslint-disable-next-line
  }, [])

  const spinner = loadJobsSatatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadJobsSatatus === 'error' ? <ErrorBanner t={t} /> : null
  const content = loadJobsSatatus === 'idle' ? jobs.map((item, index) => <AdminPageCard key={item.id} cardType="jobs" data={item} />) : null

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout t={t}>
        <div className={styles.container}>
          <AdminTopBar page="jobs" isSpecial={false} />
          <div className={styles.listBlock}>
            <ErrorBoundary t={t}>
              {content}
              {spinner}
              {error}
              {content && !jobs.length && <EmptyListBanner t={t} />}
            </ErrorBoundary>
          </div>
        </div>
      </Layout></>
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

export default withAuth(Index);