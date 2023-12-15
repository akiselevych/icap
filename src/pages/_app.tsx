import type { AppProps } from 'next/app'
import Head from 'next/head';
import '@/styles/global.scss';
import "@/components/PortfolioSlider/portfolioSliderStyles.scss"
import "@/components/ReviewsSliderV2/reviewsSliderV2.scss"
import '@splidejs/react-splide/css';
import { appWithTranslation } from 'next-i18next'
import { Providers } from '@/reduxFolder/provider';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>ICAP Group GmbH</title>
    </Head>
    <Providers>
      <Component {...pageProps} />
    </Providers>
  </>
}


export default appWithTranslation(MyApp)
