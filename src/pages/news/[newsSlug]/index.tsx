//conponents
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import ErrorBanner from '@/components/ErrorBanner/ErrorBanner';
//libs
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import makeTextBold from '@/utils/makeTextBold';
//redux
import { fetchNews } from '@/reduxFolder/slices/News.slice';
//types
import { RootStateType, AppDispatch } from '@/types';
//styles
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'
//images

import { baseImageUrl2 } from "@/services/API"
import Script from "next/script";
const clock = `${baseImageUrl2}/clock.svg`
const spinnerImage = `${baseImageUrl2}/spinner.svg`




const jobIds: string[] = [];

export default function JobPage() {
  const { t } = useTranslation('translate');
  const router = useRouter();
  let { newsSlug } = router.query;
  const dispatch = useDispatch<AppDispatch>()
  const news = useSelector((state: RootStateType) => state.News.news)
  const loadJobsSatatus = useSelector((state: RootStateType) => state.News.loadNewsStatus)

  useEffect(() => {
    if (!news.length) dispatch(fetchNews())
    //eslint-disable-next-line
  }, [])

  const currrentNewsItem = news.find(item => item.slug == newsSlug)
  const content = !!(news.length && currrentNewsItem && loadJobsSatatus)
  const spinner = loadJobsSatatus === 'loading' ? <Image width={30} height={30} alt="spinner" src={spinnerImage} /> : null
  const error = loadJobsSatatus === 'error' || (!currrentNewsItem && news.length && loadJobsSatatus === "idle") ? <ErrorBanner t={t} /> : null


  return (
      <>
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-7N0LXZS4YX"} strategy={"afterInteractive"}/>
        <Script id={"google-analytics-news-slug"} strategy={"afterInteractive"}>
          {
            `
                    window.dataLayerNewsSlug = window.dataLayerNewsSlug || [];
                    function gtag(){dataLayerNewsSlug.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7N0LXZS4YX');
                  `
          }
        </Script>
        <Layout t={t}>
          <div className={styles.container}>
            {content &&
                <h1 className={classNames(styles.title, global.sectionTitle)}>
                  {currrentNewsItem.name}
                </h1>}
            {content &&
                <div className={styles.dateBlock}>
                  <Image width={20} height={20} src={clock} alt={"clock"} />
                  <div className={styles.Body2}>{currrentNewsItem.date}</div>
                </div>
            }
            {content &&
                <div className={styles.imageBlock}>
                  {currrentNewsItem.image && typeof currrentNewsItem.image === "string" && <Image width={1024} height={280} src={currrentNewsItem.image} alt={currrentNewsItem.name} />}
                </div>}
            {content &&
                <div className={styles.textBlock}>
                  <div className={classNames(styles.subTitle, global.mediumTitle)}>
                    {makeTextBold(currrentNewsItem.subtitle)}
                  </div>
                  <div className={styles.text}>
                    {
                      currrentNewsItem.description.split("<br />").map((item, i) => <p key={i} className={styles.paragraph}>{makeTextBold(item)}</p>)
                    }
                  </div>
                </div>}
            <div className={styles.status}>
              {spinner}
              {error}
            </div>
          </div>
        </Layout >
      </>

  );
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
