//styles
import styles from './style.module.scss'
import Row from "@/components/DataAdminTable/layouts/MetaLayout/Row";


const MetaLayout = ({heads, pageId}: {heads: {tag: string, text: string}[],pageId: number}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.colName}>Meta titles</div>
                <div className={styles.colName}>Meta description</div>
                <div className={styles.colName}>Symbols count</div>
            </div>
            <div className={styles.table}>
                {heads.map((head, index) => (
                   <Row head={head} pageId={pageId} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default MetaLayout;
