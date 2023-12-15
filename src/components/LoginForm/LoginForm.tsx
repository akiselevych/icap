//libs
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//styles
import styles from './styles.module.scss'
//images
import { baseImageUrl2 } from "@/services/API"
const show = `${baseImageUrl2}/showed.svg`
const hide = `${baseImageUrl2}/hidden.svg`
//redux
import { loginUser } from "@/reduxFolder/slices/Login.slice";
//types
import { AppDispatch, LoginFormInputs, RootStateType } from "@/types";
const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [isShow, setIsShow] = useState<boolean>(false);
  const errorMessage = useSelector((state: RootStateType) => state.Login.isLoginError)
  const loading = useSelector((state: RootStateType) => state.Login.isLoginLoading)

  useEffect(() => {
    if (!loading && localStorage.getItem("accessIcap") != null) {
      router.push("/admin");
    }
    // eslint-disable-next-line
  }, [loading]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset
  } = useForm<LoginFormInputs>()


  const submitForm = (data: LoginFormInputs) => {
    dispatch(loginUser(data));
  }
  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <div className={styles.inputWrapper}>
          <label className={`${styles.label}`}>Login</label>
          <input type="text" placeholder={"Enter your login"} className={styles.input} {...register("username", { required: true })} />
        </div>

        <div className={styles.inputWrapper}>
          <label className={`${styles.label}`}>Password</label>
          <input type={isShow ? "text" : "password"} placeholder={"Enter your password"} className={styles.input} {...register("password", { required: true })} />
          <Image width={20} height={20} onClick={() => setIsShow(!isShow)} src={isShow ? show : hide} alt={"Show password"} className={styles.showIcon} />
        </div>

        <button className={styles.submitBtn} type={"submit"} disabled={!isValid}>{loading ? "Loading ..." : "Sign in"}</button>
        {errorMessage && <div className={styles.error}>Something went wrong, try again !</div>}
      </form>
    </section>
  );
};

export default LoginForm;
