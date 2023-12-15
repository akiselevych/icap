import React, {ChangeEvent, useEffect, useState} from 'react';
//styles
import styles from './style.module.scss'
import {useDebounce} from "@/hooks/useDebounce";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/types";
import {updateContent, updateTextContent} from "@/reduxFolder/slices/StaticContent.slice";

const Row = ({tag, text, pageId}: {tag: string,text: string,pageId: number}) => {
    const [value, setValue] = useState<string>(text)
    const debouncedValue = useDebounce<string>(value, 1500)
    const dispatch = useDispatch<AppDispatch>();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        setValue(text);
        //eslint-disable-next-line
    }, [pageId]);

    useEffect(() => {
        if (text !== value.trim()){
            const updated = {
                content: {
                    [tag]: value.trim()
                }
            }
            // @ts-ignore
            dispatch(updateTextContent({id: pageId, data: updated}));
        }
        //eslint-disable-next-line
    }, [debouncedValue])

    return (
        <div className={styles.row}>
            <div className={`${styles.key} ${styles.col}`}>{tag}</div>
            <input type="text" value={value} onChange={handleChange} className={`${styles.col} ${styles.input}`}/>
        </div>
    );
};

export default Row;
