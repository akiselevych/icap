//styles
import styles from './style.module.scss'
import Row from "@/components/DataAdminTable/layouts/HeadlineLayout/Row";
import {useEffect} from "react";


const HeadlineLayout = ({heads, pageId}: {heads: {tag: string, text: string}[],pageId: number}) => {


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.colName}>Header tags</div>
                <div className={styles.colName}>Structure</div>
                <div className={styles.colName}>Symbols count</div>
            </div>
            <div className={styles.table}>
                {!!heads && heads.map((head,i) => (
                   <Row pageId={pageId} head={head} key={head.tag}/>
                ))}
            </div>
        </div>
    );
};

export default HeadlineLayout;
