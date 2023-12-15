//libs
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
//styles
import styles from "./styles.module.scss";
import global from '@/styles/global.module.scss'
//images
import icon1 from "../../../../public/assets/seopage/icons/priceIcon1.svg";
import icon2 from "../../../../public/assets/seopage/icons/priceIcon2.svg";
import check from "../../../../public/assets/seopage/icons/check.svg";
import whiteCheck from "../../../../public/assets/seopage/icons/whiteCheck.svg";
import blueArr from "../../../../public/assets/seopage/icons/blueArr.svg";
import whiteArr from "../../../../public/assets/seopage/icons/whiteArr.svg";



const PricePlanCard = ({price,planName, desc,points,isFav}: {price: string,planName: string, desc: string,points: string[],isFav: boolean}) => {
    const [isShowMore, setIsShowMore] = useState<boolean>(false);
    return (
        <div className={`${styles.card} ${isFav && styles.fav}`}>
            <p className={styles.price}>{price}</p>
            <div className={styles.head}>
                <Image src={isFav ? icon2:icon1} alt={"Basic SEO"}/>
                <h6 className={styles.planName}>{planName}</h6>
            </div>
            <p className={styles.desc}>
                {desc}
            </p>
            <div className={styles.points}>
                <p className={styles.pointsTitle}>Characteristics:</p>
                {points.slice(0,isShowMore ? points.length : 3).map((p,i) => (
                    <div className={styles.point} key={i}>
                        <Image src={isFav ? whiteCheck : check} alt={"Website-Audit"}/>
                        <p className={styles.pointText}>{p}</p>
                    </div>
                ))}
            </div>
            <div className={`${styles.showMore} ${isShowMore && styles.reversed}`} onClick={() => setIsShowMore((prev) => !prev)}>
                <Image src={isFav? whiteArr : blueArr} alt={"showe more button"}/>
            </div>
            <div className={`${global.primaryButton} ${styles.btn}`}>Further information</div>
        </div>
    );
};

export default PricePlanCard;
