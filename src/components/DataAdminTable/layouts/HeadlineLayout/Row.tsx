//libs
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
//styles
import styles from './style.module.scss'
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/types";
import {updateContent} from "@/reduxFolder/slices/StaticContent.slice";

const Row = ({head,pageId}: {head: {tag: string, text: string}, pageId: number}) => {
    const [value, setValue] = useState<string>(head.text)
    const debouncedValue = useDebounce<string>(value, 1500)
    const dispatch = useDispatch<AppDispatch>();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        setValue(head.text);
        //eslint-disable-next-line
    }, [pageId]);

    useEffect(() => {
        if (head.text !== value){
            const updated = {
                heading_tags: {[head.tag]: value}
            }
            dispatch(updateContent({id: pageId, data: updated}));
        }
        //eslint-disable-next-line
    }, [debouncedValue])

    return (
        <div className={styles.row}>
            <div className={styles.col}>{head.tag.split("_").at(0)?.toUpperCase()}</div>
            <input type="text" value={value} onChange={handleChange} className={`${styles.col} ${styles.input}`}/>
            <div className={styles.col}>up to 150</div>
        </div>
    );
};

export default Row;
