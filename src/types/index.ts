import {store} from "@/reduxFolder/store";
import {Dispatch, RefObject, SetStateAction} from "react";
import {StaticImageData} from "next/image";

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ITranslateProp {
    t: (key: string) => string;
}

export type RequestStatus = "idle" | "loading" | "error";

export interface InewsItem {
    id: number;
    date: string;
    image: string | FormData;
    image_name: string;
    name: string;
    subtitle: string;
    description: string;
    slug: string;
}

export interface IjobItem {
    id: number;
    date: string;
    name: string;
    description: string;
    key_qualifications: string;
    role_responsibilities: string;
    your_benefits: string;
    important_for_us: string;
    city: string;
    type: "Remote" | "Office" | "Remote/Office";
    desired_skills: string[] | string;
    slug: string;
}

export interface IworkerItem {
    id: number;
    image: string;
    position: WorkerPositionType;
    name: string;
    email: string;
    order: number;
    image_name: string;
}

export interface IportfolioItem {
    id: number;
    image: string;
    name: string;
    url: string;
    order: number;
    image_name: string;
}

export interface IContentItem {
    id: number,
    page_name: string,
    meta_tags: {
        meta_title: string,
        description: string
    },
    "heading_tags": {
        [key: string]: string
    },
    language: Languages
}

export type ITextContent = {
    id: number,
    language: string,
    content: {
        [key: string]: string
    },
}


export interface IImageItem {
    id: number,
    page_name: string,
    images: ImageInstance[]
}

export interface ImageInstance {
    id: number,
    image: string | StaticImageData | FormData | File,
    image_name: string,
    alt_text: string,
    format: string,
    weight: string,
    web_page: number,
}

export interface LoginFormInputs {
    username: string;
    password: string;
}

export type WorkerPositionType =
    | "CEO"
    | "HR Manager"
    | "Technical Director"
    | "Design Director"
    | "UI/UX Designer"
    | "Back-End Developer"
    | "Front-End Developer"
    | "Android Developer"
    | "QA Engineer"
    | "SEO Engineer"
    | "SEA Engineer"
    | "DevOps Engineer"
    | "Advertising & CEO's Assistant"
    | "E-Commerce & CEO's Assistant"
    | "Marketing Manager"
    | "Others";


export type RequirementsFormInputs = {
    purpose: "Lead Generation" | "Business Card",
    isOldWebsite: boolean,
    oldWebsite: string,
    showInCities: { city: string }[],
    adsBudget: number,
    clientPrice: number,
    minQuantityOfRequests: number,
    pricePlan: "basis" | "pro" | "pro max",
    name: string,
    surname: string,
    finalPrice: string
}

export enum Languages {
    EN = 2, DE = 1, UA = 3
}