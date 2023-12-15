//libs
import LoginForm from "@/components/LoginForm/LoginForm";
import Image from "next/image";
//styles
import styles from "./styles.module.scss";

const LoginPage = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.header}>
                <Image src={"https://icapgroupgmbh.com/images/Logo.svg"} width={156} height={48} alt={"Icap Logo"}/>
            </div>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;
