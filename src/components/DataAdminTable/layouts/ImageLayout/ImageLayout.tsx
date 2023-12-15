//styles
import styles from './styles.module.scss'
//components
import Row from "@/components/DataAdminTable/layouts/ImageLayout/Row";
//types
import {ImageInstance} from "@/types";

const ImageLayout = ({images,pageId}: {images: ImageInstance[],pageId: number}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.colName}>Image</div>
                <div className={styles.colName}>Alt text</div>
                <div className={styles.colName}>Weight</div>
                <div className={styles.colName}>Format</div>
            </div>
            <div className={styles.table}>
                {images.map((image, index) => (
                    <Row image={image} key={image.id} pageId={pageId}/>
                ))}
            </div>
        </div>
    );
};

export default ImageLayout;
