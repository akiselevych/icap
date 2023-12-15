//conponents
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import AdminTopBar from '@/components/AdminTopBar/AdminTopBar';
//components
import AdminPageSymbol from '@/components/AdminPageSymbol/AdminPageSymbol';
import Head from 'next/head';
//libs
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//redux
import { fetchJobs, updateJob, createJob } from '@/reduxFolder/slices/Jobs.slice';
//types
import { RootStateType, AppDispatch } from '@/types';
//styles
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'
//images
import { withAuth } from "@/services/AuthWrapper";


type Inputs = {
  name: string;
  description: string;
  key_qualifications: string;
  role_responsibilities: string;
  your_benefits: string;
  important_for_us: string;
  city: string;
  type: "Remote" | "Office" | "Remote/Office";
  desired_skills: string[] | string;
}





const jobIds: string[] = [];

function JobPage() {
  const dispatch = useDispatch<AppDispatch>()
  const jobs = useSelector((state: RootStateType) => state.Jobs.jobs)
  const loadJobsSatatus = useSelector((state: RootStateType) => state.Jobs.loadJobsSatatus)
  const { t } = useTranslation('translate');
  const router = useRouter();

  const { id } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()
  const [file, setFile] = useState<File | undefined>(undefined)

  useEffect(() => {
    if (!jobs.length) dispatch(fetchJobs())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (jobs.length && id) {
      //@ts-ignore
      const currentJob = jobs.find(item => item.id == id)
      if (currentJob) {
        const { name, description,
          key_qualifications,
          role_responsibilities, your_benefits,
          important_for_us, city, type, desired_skills } = currentJob

        reset({
          name, description,
          key_qualifications,
          role_responsibilities, your_benefits,
          important_for_us, city,
          type,
          desired_skills: Array.isArray(desired_skills) ? desired_skills.join(' / ') : desired_skills
        })
      }
    }
    //eslint-disable-next-line
  }, [id, jobs])


  const onSubmit = (data: any) => {
    const desired_skills = data.desired_skills.split('/').map((item: string) => item.trim())
    if (id !== 'new') {
      dispatch(updateJob({
        id: Number(id),
        data: {
          ...data,
          desired_skills
        }
      })).then(() => {
        router.push('/admin/jobs')
      })
    } else {
      dispatch(createJob({
        data: {
          ...data,
          desired_skills
        }
      })).then(() => {
        router.push('/admin/jobs')
      })
    }
  }





  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout t={t}>
        <div className={styles.container}>
          <AdminTopBar isSpecial={true} page='jobs' />
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.topRow}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Name</label>
                <input {...register("name", { required: true })} className={styles.input} type="text" placeholder="Alex D.G." />
                {errors.name && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>City</label>
                <input {...register("city", { required: true })} className={styles.input} type="text" placeholder="Berlin" />
                {errors.city && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Type</label>
                <select {...register("type", { required: true })} className={styles.input}>
                  <option value="Remote">Remote</option>
                  <option value="Office"> Office</option>
                  <option value="Remote/Office">Remote/Office</option>
                </select>
                {errors.type && <p className={styles.error}>Field is required</p>}
              </div>
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.label}>Description</label>
              <textarea {...register("description", { required: true })} className={styles.input} />
              {errors.description && <p className={styles.error}>Field is required</p>}
            </div>
            <div className={styles.bottomRow}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>What is important to us</label>
                <textarea {...register("important_for_us", { required: true })} className={styles.input} />
                {errors.important_for_us && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Desired skills</label>
                <textarea {...register("key_qualifications", { required: true })} className={styles.input} />
                {errors.key_qualifications && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Responsibilities</label>
                <textarea {...register("role_responsibilities", { required: true })} className={styles.input} />
                {errors.role_responsibilities && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Advantages of working with us</label>
                <textarea {...register("your_benefits", { required: true })} className={styles.input} />
                {errors.your_benefits && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>desired skills for analize (use &quot;/`&quot;)</label>
                <input placeholder='HTML / SCSS / JavaScript / Phyton / Java' {...register("desired_skills", { required: true })} className={classNames(styles.input, styles.smallInput)} />
                {errors.desired_skills && <p className={styles.error}>Field is required</p>}
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
export default withAuth(JobPage);

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
