//components
import Head from 'next/head'
import Layout from "@/components/Layout/Layout"
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard"
import Image from 'next/image';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
import EmptyListBanner from '@/components/EmptyListBanner/EmptyListBanner';
//libs
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
//redux
import { fetchPortfolio } from "@/reduxFolder/slices/Portfolio.slice";
//types
import { RootStateType, AppDispatch, IworkerItem, IportfolioItem } from '@/types';
//utils
import sortObjByOrder from "@/utils/sortObjByOrder";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//images
import { baseImageUrl2 } from "@/services/API"
import Script from "next/script";
const spinnerImage = `${baseImageUrl2}/spinner.svg`





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
  const content = loadPortfolioStatus === 'idle' ? sortObjByOrder<IportfolioItem>(portfolio).map(({ image, url, name }, index) => <PortfolioCard t={t} key={index} image={image} title={name} link={url} />) : null

  return (
    <>
      <Head>
        <title>{t("website_meta_meta_title")}</title>
        <meta name="description" content={t("SEODescrPortfolioPage")} />
      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-portfolio"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerPortfolio = window.dataLayerPortfolio || [];
                    function gtag(){dataLayerPortfolio.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <div className={styles.container}>
          <div className={global.pageTitle}>{t("topBarMenuWebpagePortfolio")}</div>
          <div className={styles.cardContaier}>
            {content}
            {spinner}
            {error}
            {content && !portfolio.length && <EmptyListBanner t={t} />}
          </div>
        </div>
      </Layout>
    </>
  )
}
//@ts-ignore
export async function getStaticProps({ locale }) {
  // return {
  //   props: {
  //     //@ts-ignore
  //     ...(await serverSideTranslations(locale, ['translate'])),
  //     // Will be passed to the page component as props
  //   },
  // }
  return {
    props: {},
    notFound: true,
  };
}
export default Index