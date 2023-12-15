//conponents
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import AdminTopBar from '@/components/AdminTopBar/AdminTopBar';
import AdminPageSymbol from '@/components/AdminPageSymbol/AdminPageSymbol';
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
import { updateNews, createNews, fetchNews } from '@/reduxFolder/slices/News.slice';
//types
import { RootStateType, AppDispatch, InewsItem } from '@/types';
//styles
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'
import { withAuth } from "@/services/AuthWrapper";



type Inputs = {
  name: string,
  subtitle: string,
  description: string,
  image: File
}

const jobIds: string[] = [];

function JobPage() {
  const dispatch = useDispatch<AppDispatch>()
  const news = useSelector((state: RootStateType) => state.News.news)
  const loadJobsSatatus = useSelector((state: RootStateType) => state.News.loadNewsStatus)
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
  const [fileInputValue, setFile] = useState<File | undefined>(undefined)

  useEffect(() => {
    if (!news.length) dispatch(fetchNews())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (news.length && id) {
      //@ts-ignore
      const currentNewsItem = news.find(item => item.id == id)
      if (currentNewsItem) {
        const { name, description, subtitle } = currentNewsItem as InewsItem

        reset({
          name, description, subtitle
        })
      }

    }
    //eslint-disable-next-line
  }, [id, news])

  const onSubmit = (data: Inputs) => {
    const { name, description, image, subtitle } = data
    if (id !== 'new') {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('description', description)
      formData.append('subtitle', subtitle)
      if (fileInputValue) formData.append('image', fileInputValue)
      dispatch(updateNews({
        id: Number(id),
        formData: formData
      })).then(() => {
        router.push('/admin/news')
      })
    } else {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('description', description)
      formData.append('subtitle', subtitle)
      if (fileInputValue) {
        formData.append('image', fileInputValue)
      }
      dispatch(createNews({
        formData: formData
      })).then(() => {
        router.push('/admin/news')
      })
    }
  }

  const onFileChange = (e: any) => {
    setFile(e.target.files[0])
  }


  const fileInputLabel = fileInputValue && fileInputValue.name ? fileInputValue.name
    //@ts-ignore
    : id !== "new" && news.length && news.find(item => item.id == id) ? news.find(item => item.id == id)?.image_name : 'Select file'



  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout t={t}>
        <div className={styles.container}>
          <AdminTopBar isSpecial={true} page='news' />
          <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            <div className={styles.leftBlock}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Title</label>
                <textarea {...register("name", { required: true })} className={styles.input} />
                {errors.name && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Subtitle</label>
                <textarea {...register("subtitle", { required: true })} className={styles.input} />
                {errors.subtitle && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Text</label>
                <textarea {...register("description", { required: true })} className={styles.input} />
                {errors.description && <p className={styles.error}>Field is required</p>}
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={global.sectionTitle}>Image:</div>
              <div className={styles.btnGroup}>
                <label htmlFor='ImageInputNews' className={classNames(global.secondaryButton, styles.btn)}>Select file</label>
                <input
                  style={{ display: "none" }}
                  id="ImageInputNews"
                  hidden
                  {...register("image", { required: false, onChange: (e) => onFileChange(e) })}
                  type="file" />
                {errors.image && <p className={styles.error}>Field is required</p>}
                {fileInputLabel}
              </div>
            </div>
            <input type='submit' className={global.primaryButton} value="Submit" />
          </form>
          <AdminPageSymbol />
        </div>
      </Layout >
    </>
  );
}

export default withAuth(JobPage)

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
