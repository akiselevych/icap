//libs
import React, {useEffect} from 'react';
import {useRouter} from "next/router";
//services
import { withAuth } from "@/services/AuthWrapper";



const StaticContentPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/admin/static-content/homepage")
        //eslint-disable-next-line
    }, []);

    return (
        <>

        </>
    );
};


export default withAuth(StaticContentPage);
