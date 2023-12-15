//libs
import {FC, ReactElement, useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
// types
import {AppDispatch, RootStateType} from "@/types";
//redux
import {refreshToken, setIsLogged, setIsUnauthorizedRequest} from "@/reduxFolder/slices/Login.slice";

export function withAuth(WrappedComponent: FC): FC {
    return function WithAuth(props: Record<string, any>): ReactElement {
        const isLogged = useSelector((state: RootStateType) => state.Login.isLogged);
        const isUnauthorizedReq = useSelector((state: RootStateType) => state.Login.isUnauthorizedRequest);
        const router = useRouter();
        const dispatch = useDispatch<AppDispatch>();

        useEffect(() => {
            const access = JSON.parse(localStorage.getItem("accessIcap")!);
            const refresh = JSON.parse(localStorage.getItem("refreshIcap")!);
            if (access == null || access.token == null || refresh == null || refresh.token == null || new Date(refresh.exp) < new Date()){
                localStorage.removeItem("accessIcap");
                localStorage.removeItem("refreshIcap");
                router.push("/login");
                return;
            } else if (new Date(access.exp) < new Date()){
                dispatch(refreshToken(refresh.token))
                    .then((res) => dispatch(setIsLogged(true)));
                return;
            }
            if (!isLogged){
                dispatch(setIsLogged(true));
            }
            //eslint-disable-next-line
        }, []);
        useEffect(() => {
            if (isUnauthorizedReq){
                localStorage.removeItem("accessIcap");
                localStorage.removeItem("refreshIcap");
                dispatch(setIsUnauthorizedRequest(false));
                alert("An error occurred related to the authorization token. Please log in again and repeat your steps!")
                router.push("/login");
            }
            //eslint-disable-next-line
        }, [isUnauthorizedReq]);
        if(!isLogged){
            return <div>Loading</div>
        }

        return <WrappedComponent {...props} />;
    };
}