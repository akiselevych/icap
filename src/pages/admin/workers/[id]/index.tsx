//conponents
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import AdminTopBar from '@/components/AdminTopBar/AdminTopBar';
import Head from 'next/head';
//libs
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import classNames from 'classnames';
import {useForm} from "react-hook-form";
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//redux
import {updateWorker, createWorker, fetchWorkers} from '@/reduxFolder/slices/Workers.slice';
//types
import {RootStateType, AppDispatch, WorkerPositionType, IworkerItem} from '@/types';
//styles
import styles from './styles.module.scss';
import global from '@/styles/global.module.scss'
import {withAuth} from "@/services/AuthWrapper";


type Inputs = {
    name: string,
    position: WorkerPositionType,
    email: string,
    image: File,
    order: number
}

const positionVariables = ["CEO",
    "HR Manager",
    "Technical Director",
    "Design Director",
    "UI/UX Designer",
    "Back-End Developer",
    "Front-End Developer",
    "Android Developer",
    "QA Engineer",
    "SEO Engineer",
    "DevOps Engineer",
    "Advertising & CEO's Assistant",
    "E-Commerce & CEO's Assistant",
    "Marketing Manager",
    "Others"]

const jobIds: string[] = [];

function JobPage() {
    const dispatch = useDispatch<AppDispatch>()
    const workers = useSelector((state: RootStateType) => state.Workers.workers)
    const loadWorkersSatatus = useSelector((state: RootStateType) => state.Workers.loadWorkersSatatus)
    const {t} = useTranslation('translate');
    const router = useRouter();
    const {id} = router.query;
    const {
        register,
        handleSubmit,
        reset,
        watch,
        getValues,
        formState: {isValid, errors},
    } = useForm<Inputs>()
    const [file, setFile] = useState<File | undefined>(undefined)

    useEffect(() => {
        if (!workers.length) dispatch(fetchWorkers())
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (workers.length && id) {
            //@ts-ignore
            const currentWorker = workers.find(item => item.id == id)
            if (currentWorker) {
                const {name, position, email, order} = currentWorker as IworkerItem

                reset({
                    name, position, email, order
                })
            }

        }
        //eslint-disable-next-line
    }, [id, workers])

    const onSubmit = (data: Inputs) => {
        const {name, position, image, email, order} = data
        if (id !== 'new') {
            const formData = new FormData()

            formData.append('name', name)
            formData.append('position', position)
            formData.append('email', email)
            formData.append('order', order.toString())
            //@ts-check
            if (file) formData.append('image', file)
            dispatch(updateWorker({
                id: Number(id),
                formData: formData
            })).then(() => {
                router.push('/admin/workers')
            })
        } else {
            const formData = new FormData()

            formData.append('name', name)
            formData.append('position', position)
            formData.append('email', email)
            formData.append('order', order.toString())
            //@ts-check
            if (file) {
                formData.append('image', file)
            }
            dispatch(createWorker({
                formData: formData
            })).then(() => {
                router.push('/admin/workers')
            })
        }
    }

    const onFileChange = (e: any) => {
        setFile(e.target.files[0])
    }


    const fileInputLabel = file && file.name ? file.name
        //@ts-ignore
        : id !== "new" && workers.length && workers.find(item => item.id == id) ? workers.find(item => item.id == id)?.image_name : 'Select file'

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout t={t}>
        <div className={styles.container}>
          <AdminTopBar isSpecial={true} page='workers' />
          <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            <div className={styles.leftBlock}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Title</label>
                <input type='text' {...register("name", { required: true })} className={styles.input} />
                {errors.name && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Position</label>
                <select  {...register("position", { required: true })} className={styles.input} placeholder="Developer">
                  {positionVariables.map((item, i) => <option key={i} value={item}>{item}</option>)}
                </select>
                {errors.position && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Email</label>
                <input type='text' {...register("email", { required: false })} className={styles.input} placeholder="admin@gmail.com" />
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>Order (number)</label>
                <input type='number' {...register("order", { required: true })} className={styles.input} placeholder="1" />
                {errors.order && <p className={styles.error}>Field is required</p>}
              </div>
              <div className={global.sectionTitle}>Bild:</div>
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

export default withAuth(JobPage)

export async function getStaticPaths() {
    const paths = jobIds.map((jobId) => ({
        params: {jobId},
    }));

    return {paths, fallback: true};
}

//@ts-ignore
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translate'])),
        },
    };
}
