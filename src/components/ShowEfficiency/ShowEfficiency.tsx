//libs
import { FC } from "react";
//styles
import styles from './styles.module.scss'
import global from "@/styles/global.module.scss"
//components
import ShowEfficiencyCard from "@/components/ShowEfficiency/ShowEfficiencyCard/ShowEfficiencyCard";

const ShowEfficiency: FC<{
    title: string, macbook?: boolean, bgColor: string, countColor: string, cards: {
        image: string, imgWidth: number,
        imgHeight: number, title: string, text: string
    }[]
}> = ({ title, cards, bgColor, countColor, macbook }) => {
    return (
        <div className={styles.container}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>{title}</h2>

            <div className={styles.content}>
                {cards.map((card, index) => {
                    return (
                        <ShowEfficiencyCard imgHeight={card.imgHeight} imgWidth={card.imgWidth} macBook={macbook} countColor={countColor} index={index} bgColor={bgColor} key={index} image={card.image} count={index + 1} title={card.title}
                            text={card.text} />
                    )
                })}
            </div>
        </div>
    );
};

export default ShowEfficiency;
