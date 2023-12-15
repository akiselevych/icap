"use client"
//libs
import React, {useState} from 'react';
import {useFieldArray, useForm} from "react-hook-form";
import {motion} from "framer-motion";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import {RequirementsFormInputs} from "@/types";
//components
import Step1 from "@/components/RequirementsForm/steps/Step1";
import Step2 from "@/components/RequirementsForm/steps/Step2";
import Step3 from "@/components/RequirementsForm/steps/Step3";
import Step4 from "@/components/RequirementsForm/steps/Step4";
import Step5 from "@/components/RequirementsForm/steps/Step5";
import Step6 from "@/components/RequirementsForm/steps/Step6";
import CalendlyModal from "@/components/CalendlyModal/CalendlyModal";
import Step8 from "@/components/RequirementsForm/steps/Step8/Step8";
import Step7 from "@/components/RequirementsForm/steps/Step7";
import NotMatch from "@/components/RequirementsForm/steps/InfoBanners/NotMatch";
import {useHttp} from "@/hooks/useHttp";


const variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
        }
    }
};
const RequirementsForm = () => {
    const handleAmount = () => {
        return typeof window != "undefined" && window.innerWidth > 800
    }
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [isHiddenBtn, setIsHiddenBtn] = useState<boolean>(false);
    const [isCalendlyOpen, setIsCalendlyOpen] = useState<boolean>(false);
    const [pricePlan, setPricePlan] = useState<"basis" | "pro" | "pro max">("pro");
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        getValues,
        reset,
        formState: {isValid},
    } = useForm<RequirementsFormInputs>({
        defaultValues: {
            purpose: undefined,
            isOldWebsite: undefined,
            oldWebsite: undefined,
            showInCities: [{city: ""}, {city: ""}],
            adsBudget: undefined,
            clientPrice: undefined,
            minQuantityOfRequests: undefined,
            name: undefined,
            surname: undefined,
            pricePlan: "pro",
            finalPrice: undefined
        }
    });

    const {fields: citiesArr, append: appendCity, remove: removeCity} = useFieldArray({
        control,
        name: "showInCities",
    });

    const STEPS = watch(`purpose`) === "Business Card" ? [
        <Step1 key={"step1"} setIsHidden={setIsHidden} setStepIndex={setStepIndex} setValue={setValue} watch={watch}/>,
        <NotMatch key={"notMatch"}/>
    ] : watch(`isOldWebsite`) ?
        [
            <Step1 key={"step1"} setIsHidden={setIsHidden} setStepIndex={setStepIndex} setValue={setValue}
                   watch={watch}/>,
            <Step2 key={"step2"} setValue={setValue} setStepIndex={setStepIndex} register={register} watch={watch}
                   setIsHidden={setIsHidden}/>,
            <Step3 key={"step3"} register={register} watch={watch} inputsArr={citiesArr} appendCity={appendCity}
                   removeCity={removeCity}/>,
            <Step4 key={"step4"} register={register} watch={watch}/>,
            <Step5 key={"step5"} register={register} watch={watch}/>,
            <Step6 key={"step6"} register={register} watch={watch}/>,
            <Step7 key={"step7"} register={register}/>,
            <Step8 key={"step8"} watch={watch} setValue={setValue} setStepIndex={setStepIndex}
                   setIsHidden={setIsHidden}/>
        ]
        :
        [
            <Step1 key={"step1"} setIsHidden={setIsHidden} setStepIndex={setStepIndex} setValue={setValue}
                   watch={watch}/>,
            <Step2 key={"step2"} setValue={setValue} setStepIndex={setStepIndex} register={register} watch={watch}
                   setIsHidden={setIsHidden}/>,
            <Step3 key={"step3"} register={register} watch={watch} inputsArr={citiesArr} appendCity={appendCity}
                   removeCity={removeCity}/>,
            <Step4 key={"step4"} register={register} watch={watch}/>,
            <Step5 key={"step5"} register={register} watch={watch}/>,
            <Step6 key={"step6"} register={register} watch={watch}/>,
            <Step7 key={"step7"} register={register}/>,
            <Step8 key={"step8"} watch={watch} setValue={setValue} setStepIndex={setStepIndex}
                   setIsHidden={setIsHidden}/>
        ];


    const {request} = useHttp();
    const onSubmit = (data: RequirementsFormInputs) => {
        const dataForSend = {
            purpose: data.purpose,
            has_old_website: data.isOldWebsite,
            old_website: data.oldWebsite,
            show_in_cities: data.showInCities.filter(c => c.city !== "").map(c => c.city),
            ads_budget: !!data.adsBudget ? data.adsBudget : 0,
            customer_value: !!data.clientPrice ? data.clientPrice : 0,
            optimal_inquiry: data.minQuantityOfRequests,
            first_name: data.name,
            last_name: data.surname,
            final_price: data.finalPrice,
            price_plan: data.pricePlan
        }
        request(`https://api.icapgroupgmbh.com/send-website-requirements`, "POST", JSON.stringify(dataForSend), {
            "Content-Type": "application/json"
        }, false);
        setPricePlan(data.pricePlan)
        setIsCalendlyOpen(true);

        reset();
    }

    const handleNextBtnClass = () => (
        (!!watch(`isOldWebsite`) && !!watch(`oldWebsite`) && stepIndex === 1)
        ||
        (watch(`showInCities`).filter(c => c.city != "").length > 0 && stepIndex === 2)
        ||
        (!!watch(`adsBudget`) && stepIndex === 3)
        ||
        (!!watch(`clientPrice`) && stepIndex === 4)
        ||
        (!!watch(`minQuantityOfRequests`) && stepIndex === 5)
        ||
        (!!watch(`name`) && !!watch(`surname`) && stepIndex === 6)
    );

    const handleSkipBtnClass = () => (
        (watch(`showInCities`).filter(c => c.city != "").length > 0 && stepIndex === 2)
        ||
        (!!watch(`adsBudget`) && stepIndex === 3)
        ||
        (!!watch(`clientPrice`) && stepIndex === 4)
    );

    return (
        <motion.section className={styles.container} id={"requirementsForm"} initial="hidden"
                        whileInView="visible"
                        variants={variant}
                        viewport={{once: true, amount: handleAmount() ? 0.8 : 0.4}}>
            <h2 className={`${global.sectionTitle} ${styles.title}`}>Passen wir zusammen? In 100 Sekunden Preispanne
                erfahren!</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles.animWrap} ${isHidden ? styles.hiddenAnimWrap : ''}`}>
                    {STEPS[stepIndex]}
                </div>

                <div className={styles.btnWrap}>
                    {((stepIndex > 0 && stepIndex < STEPS.length - 1) || watch(`purpose`) === "Business Card") &&
                        <div
                            className={`${global.secondaryButton} ${styles.backBtn} ${!isHiddenBtn ? styles.activeBtn : styles.hiddenBtn}`}
                            onClick={() => {
                                setIsHidden(true);
                                setIsHiddenBtn(true);
                                setTimeout(() => {
                                    if (watch(`purpose`) === "Business Card") {
                                        reset()
                                    }
                                    setStepIndex(prev => prev - 1);
                                    setIsHidden(false);
                                    setIsHiddenBtn(false);
                                }, 300);
                            }}>Zurück</div>
                    }
                    <div className={styles.rightBtns}>
                        {
                            (
                                stepIndex === 2 || stepIndex === 3 || stepIndex === 4
                            ) &&
                            // ${!isHiddenBtn && handleBtnClass() ? styles.activeBtn : styles.hiddenBtn}
                            <button type={"button"}
                                    disabled={handleSkipBtnClass()}
                                    className={`${global.secondaryButton} ${styles.skipBtn} ${!isHiddenBtn ? styles.activeBtn : styles.hiddenBtn}`}
                                    onClick={() => {
                                        setIsHidden(true);
                                        setIsHiddenBtn(true);
                                        setTimeout(() => {
                                            setStepIndex(prev => prev + 1);
                                            setIsHidden(false);
                                            setIsHiddenBtn(false);
                                        }, 300);
                                    }}>Keine/weiß ich nicht</button>
                        }
                        {(
                                (stepIndex === 1 && !!watch(`isOldWebsite`)) || stepIndex === 2 || (stepIndex === 3 && watch(`purpose`) === "Lead" +
                                    " Generation") || stepIndex === 4 || (stepIndex === 5) || (stepIndex === 6)
                            ) && watch(`purpose`) !== 'Business Card' &&
                            <button type={"button"}
                                    disabled={!handleNextBtnClass()}
                                    className={`${global.primaryButton} ${styles.nextBtn} ${!isHiddenBtn ? styles.activeBtn : styles.hiddenBtn}`}
                                    onClick={() => {
                                        setIsHidden(true);
                                        setIsHiddenBtn(true);
                                        setTimeout(() => {
                                            setStepIndex(prev => prev + 1);
                                            setIsHidden(false);
                                            setIsHiddenBtn(false);
                                        }, 300);
                                    }}>Fortfahren</button>
                        }
                    </div>

                </div>
            </form>
            {/*<CalendlyModal isCalendlyOpen={isCalendlyOpen} setIsCalendlyOpen={setIsCalendlyOpen}/>*/}
        </motion.section>
    );
};

export default RequirementsForm;
