import styles from './style.module.scss'
import Row from "@/components/DataAdminTable/layouts/ContentLayout/Row";


const ContentLayout = ({heads, pageId}: {heads: {tag: string, text: string}[],pageId: number}) => {

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.colName}>Key</div>
                    <div className={styles.colName}>Content</div>
                </div>
                <div className={styles.table}>
                    {heads.map(h => (
                        <Row pageId={pageId} key={h.tag} tag={h.tag} text={h.text}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentLayout;
