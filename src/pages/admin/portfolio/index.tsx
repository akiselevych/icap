//components
import Layout from "@/components/Layout/Layout"
import AdminPageCard from "@/components/AdminPageCard/AdminPageCard";
import AdminTopBar from "@/components/AdminTopBar/AdminTopBar";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import Image from "next/image";
import EmptyListBanner from "@/components/EmptyListBanner/EmptyListBanner"
import ErrorBanner from "@/components/ErrorBanner/ErrorBanner";
import Head from "next/head";
//libs
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//redux
import { fetchPortfolio } from "@/reduxFolder/slices/Portfolio.slice";
//types
import { RootStateType, AppDispatch, IworkerItem, IportfolioItem } from '@/types';
//styles
import styles from './styles.module.scss'
//utils
import sortObjByOrder from "@/utils/sortObjByOrder";
//images
import { baseImageUrl2 } from "@/services/API"
const spinnerImage = `${baseImageUrl2}/spinner.svg`
import { withAuth } from "@/services/AuthWrapper";




const Index = () => {
  const { t } = useTranslation("translate")
  const dispatch = useDispatch<AppDispatch>()
  const portfolio = useSelector((state: RootStateType) => state.Portfolio.portfolio)
  const loadPortfolioStatus = useSelector((state: RootStateType) => state.Portfolio.loadPortfolioStatus)

  useEffect(() => {
    if (!portfolio.length) dispatch(fetchPortfolio())
    //eslint-disable-next-line
  }, [])


  const spinner = loadPortfolioStatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadPortfolioStatus === 'error' ? <ErrorBanner t={t} /> : null
  const content = loadPortfolioStatus === 'idle' ? sortObjByOrder<IportfolioItem>(portfolio).map((item, index) => <AdminPageCard key={item.id} cardType="portfolio" data={item} />) : null

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout t={t}>
        <div className={styles.container}>
          <AdminTopBar page="portfolio" isSpecial={false} />
          <div className={styles.listBlock}>
            <ErrorBoundary t={t}>
              {content}
              {spinner}
              {error}
              {content && !portfolio.length && <EmptyListBanner t={t} />}
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