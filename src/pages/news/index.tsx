//components
import Layout from "@/components/Layout/Layout"
import Head from "next/head";
import NewsCard from "@/components/NewsCard/NewsCard";
import EmptyListBanner from "@/components/EmptyListBanner/EmptyListBanner"
import ErrorBanner from "@/components/ErrorBanner/ErrorBanner";
import Image from "next/image";
//libs
import classNames from "classnames"
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
//types
import { RootStateType, AppDispatch } from "@/types";
//redux
import { fetchNews } from "@/reduxFolder/slices/News.slice";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import { baseImageUrl2 } from "@/services/API"
const spinnerImage = `${baseImageUrl2}/spinner.svg`
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import Script from "next/script";




const Index = () => {
  const { t } = useTranslation("translate")
  const dispatch = useDispatch<AppDispatch>()
  const news = useSelector((state: RootStateType) => state.News.news)
  const loadNewsStatus = useSelector((state: RootStateType) => state.News.loadNewsStatus)


  useEffect(() => {
    dispatch(fetchNews())
    //eslint-disable-next-line
  }, [])

  const spinner = loadNewsStatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadNewsStatus === 'error' ? <ErrorBanner t={t} /> : null
  const content = loadNewsStatus === 'idle' ? news.map(({ name, date, description, id, image, slug }, i) => <NewsCard
    image={image}
    t={t}
    key={i}
    slug={slug}
    name={name}
    description={description}
    date={date}
    id={id} />) : null

  return (
    <>
      <Head>

      </Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
      <Script id={"google-analytics-news"} strategy={"afterInteractive"}>
        {
          `
                    window.dataLayerNews = window.dataLayerNews || [];
                    function gtag(){dataLayerNews.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
        }
      </Script>
      <Layout t={t}>
        <div className={styles.container}>
          <h1 className={classNames(global.pageTitle, styles.title)}>
            News
          </h1>
          <div className={styles.cardContaier}>
            {spinner}
            {error}
            <ErrorBoundary t={t}>
              {content}
            </ErrorBoundary>
            {!!!news.length && loadNewsStatus === "idle" && <EmptyListBanner t={t} />}
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

export default Index