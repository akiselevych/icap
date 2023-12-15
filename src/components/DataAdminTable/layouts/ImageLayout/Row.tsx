//libs
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import {AppDispatch, ImageInstance} from "@/types";
import {useForm} from "react-hook-form";
import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateImage} from "@/reduxFolder/slices/ImagesContent.slice";
import {useDebounce} from "@/hooks/useDebounce";

const Row = ({image,pageId}: {image:ImageInstance,pageId: number}) => {
    const [altText, steAltText] = useState<string>(image.alt_text);
    const debouncedValue = useDebounce<string>(altText, 1500);
    const handleChangeAltText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        steAltText(event.target.value)
    }


    useEffect(() => {
        steAltText(image.alt_text);
        //eslint-disable-next-line
    }, [pageId]);
    useEffect(() => {
        if (image.alt_text !== altText){
            const formdata = new FormData();
            formdata.append("alt_text", altText)
            dispatch(updateImage({id: image.id, image: formdata}));
        }
        //eslint-disable-next-line
    }, [debouncedValue]);



    const [uploadedImage, setImage] = useState<File>()
    const dispatch = useDispatch<AppDispatch>();


    const uniqueSrc = '?timestamp=' + new Date().getTime();

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <label htmlFor={`imageUpload_${image.id}`} className={styles.label}>
                    <Image width={276} height={168} src={`${image.image}${"?" + new Date().getTime()}`} alt={"image"} className={styles.image}/>
                </label>
                <input type="file" className={styles.input}
                       style={{ display: "none" }}
                       id={`imageUpload_${image.id}`}
                       hidden
                       onChange={(e) => {
                           const formData = new FormData();
                           formData.append("image", e.target.files?.[0] as File)
                           dispatch(updateImage({id: image.id, image: formData}))
                       }}
                />
            </div>
            <div className={styles.col}>
                <textarea value={altText} onChange={handleChangeAltText} className={`${styles.input}`}/>
            </div>
            <div className={styles.col}>
                {image.weight}
            </div>
            <div className={styles.col}>
                {image.format}
            </div>
        </div>
    );
};

export default Row;
