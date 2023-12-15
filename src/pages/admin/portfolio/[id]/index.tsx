//conponents
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import AdminTopBar from '@/components/AdminTopBar/AdminTopBar';
import Head from 'next/head';
//libs
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//redux
import { updatePortfolioItem, createPortfolioItem, fetchPortfolio } from '@/reduxFolder/slices/Portfolio.slice';
//types
import { RootStateType, AppDispatch, IportfolioItem } from '@/types';
//styles
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'



type Inputs = {
  name: string,
  url: string,
  image: File,
  order: number
}


const jobIds: string[] = [];

export default function JobPage() {
  const dispatch = useDispatch<AppDispatch>()
  const portfolio = useSelector((state: RootStateType) => state.Portfolio.portfolio)
  const loadPortfolioStatus = useSelector((state: RootStateType) => state.Portfolio.loadPortfolioStatus)
  const { t } = useTranslation('translate');
  const router = useRouter();
  const { id } = router.query;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { isValid, errors },
  } = useForm<Inputs>()
  const [file, setFile] = useState<File | undefined>(undefined)

  useEffect(() => {
    if (!portfolio.length) dispatch(fetchPortfolio())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (portfolio.length && id) {
      //@ts-ignore
      const currentWorker = portfolio.find(item => item.id == id)
      if (currentWorker) {
        const { name, url, order } = currentWorker as IportfolioItem

        reset({
          name, url, order
        })
      }

    }
    //eslint-disable-next-line
  }, [id, portfolio])

  const onSubmit = (data: Inputs) => {
    const { name, url, image, order } = data
    if (id !== 'new') {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('url', url)
      formData.append('order', order.toString())
      //@ts-check
      if (file) formData.append('image', file)
      dispatch(updatePortfolioItem({
        id: Number(id),
        formData: formData
      })).then(() => {
        router.push('/admin/portfolio')
      })
    } else {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('url', url)
      formData.append('order', order.toString())
      //@ts-check
      if (file) {
        formData.append('image', file)
      }
      dispatch(createPortfolioItem({
        formData: formData
      })).then(() => {
        router.push('/admin/portfolio')
      })
    }
  }

  const onFileChange = (e: any) => {
    setFile(e.target.files[0])
  }


  const fileInputLabel = file && file.name ? file.name
    //@ts-ignore
    : id !== "new" && portfolio.length && portfolio.find(item => item.id == id) ? portfolio.find(item => item.id == id)?.image_name : 'Select file'

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout t={t}>
        <div className={styles.container}>
          <AdminTopBar isSpecial={true} page='portfolio' />
          <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            <div className={styles.leftBlock}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Title</label>
                <input type='text' {...register("name", { required: true })} className={styles.input} />
                {errors.name && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>URL</label>
                <input
                  {...register("url", {
                    required: "Field is required",
                    pattern: {
                      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
                      message: "Invalid URL",
                    },
                  })}
                  className={styles.input}
                  placeholder="https://skg-global.co"
                />
                {errors.url && <p className={styles.error}>{errors.url.message}</p>}
              </div>

              <div className={styles.inputBlock}>
                <label className={styles.label}>Order (number)</label>
                <input type='number' {...register("order", { required: true })} className={styles.input} placeholder="1" />
                {errors.order && <p className={styles.error}>Field is required</p>}
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={global.sectionTitle}>Image:</div>
              <div className={styles.btnGroup}>
                <label htmlFor='ImageInputWorker' className={classNames(global.secondaryButton, styles.btn)}>Select file</label>
                <input
                  style={{ display: "none" }}
                  id="ImageInputWorker"
                  hidden
                  {...register("image", { required: id === "new", onChange: (e) => onFileChange(e) })}
                  type="file" />
                {errors.image && <p className={styles.error}>Field is required</p>}
                {fileInputLabel}
              </div>
            </div>
            <input type='submit' className={global.primaryButton} value="Submit" />
          </form>

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
