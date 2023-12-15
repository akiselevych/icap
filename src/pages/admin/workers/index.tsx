//components
import Layout from "@/components/Layout/Layout"
import AdminPageCard from "@/components/AdminPageCard/AdminPageCard";
import AdminTopBar from "@/components/AdminTopBar/AdminTopBar";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import Image from "next/image";
import EmptyListBanner from "@/components/EmptyListBanner/EmptyListBanner"
import Head from "next/head";
//libs
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//redux
import { fetchWorkers } from "@/reduxFolder/slices/Workers.slice";
//types
import { RootStateType, AppDispatch, IworkerItem } from '@/types';
//styles
import styles from './styles.module.scss'
//utils
import sortObjByOrder from "@/utils/sortObjByOrder";
//images
import { baseImageUrl2 } from "@/services/API"
const spinnerImage = `${baseImageUrl2}/spinner.svg`
//services
import { withAuth } from "@/services/AuthWrapper";
//compoentns
import ErrorBanner from "@/components/ErrorBanner/ErrorBanner";




const Index = () => {
  const { t } = useTranslation("translate")
  const dispatch = useDispatch<AppDispatch>()
  const workers = useSelector((state: RootStateType) => state.Workers.workers)
  const loadWorkersSatatus = useSelector((state: RootStateType) => state.Workers.loadWorkersSatatus)

  useEffect(() => {
    if (!workers.length) dispatch(fetchWorkers())
    //eslint-disable-next-line
  }, [])

  console.log(workers)
  const spinner = loadWorkersSatatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadWorkersSatatus === 'error' ? <ErrorBanner t={t} /> : null
  const content = loadWorkersSatatus === 'idle' ? sortObjByOrder<IworkerItem>(workers).map((item, index) => <AdminPageCard key={item.id} cardType="workers" data={item} />) : null

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout t={t}>
        <div className={styles.container}>
          <AdminTopBar page="workers" isSpecial={false} />
          <div className={styles.listBlock}>
            <ErrorBoundary t={t}>
              {content}
              {spinner}
              {error}
              {content && !workers.length && <EmptyListBanner t={t} />}
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

export default withAuth(Index)