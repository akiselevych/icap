//libs
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "@/hooks/useHttp";
//redux
import {createJob,updateJob,deleteJob} from "./Jobs.slice"
import {createNews,updateNews,deleteNews} from "./News.slice"
import {createWorker, deleteWorker,updateWorker} from "./Workers.slice"
import {createPortfolioItem,deletePortfolioItem,updatePortfolioItem} from "./Portfolio.slice"
//types & api
import {LoginFormInputs} from "@/types";
import {tokenSetters} from "@/services/tokenSetters";
import {baseAuthUrl as baseUrl} from "@/services/API";

type InitialStateType = {
    isLoginLoading:boolean,
    isLoginError: boolean,
    isUnauthorizedRequest: boolean,
    isLogged: boolean
}
const initialState: InitialStateType = {
    isLoginLoading: false,
    isLoginError: false,
    isUnauthorizedRequest: false,
    isLogged: false,
}

export const loginUser = createAsyncThunk(
    "login/loginUser",
    async (userData: LoginFormInputs) => {
        try {
            const {request} = useHttp();
            const response = await request(`${baseUrl}/token/`, "POST",JSON.stringify(userData), {
                "Content-Type": "application/json"
            });
            tokenSetters(response.access, response.refresh)
        } catch (e){
            return "error"
        }
    }
)

export const refreshToken = createAsyncThunk(
    "login/refreshToken",
    async (token: string) => {
        try {
            const {request} = useHttp();
            const response = await request(`${baseUrl}/token/refresh/`, "POST",JSON.stringify({refresh:token}), {
                "Content-Type": "application/json"
            });
            tokenSetters(response.access, response.refresh)
        } catch (e){
            return "error"
        }
    }
)

export const Login = createSlice({
    name: "Login",
    initialState,
    reducers: {
        setIsLogged: (state, {payload}) => {
            state.isLogged = payload;
        },
        setIsUnauthorizedRequest: (state, {payload}) => {
            state.isUnauthorizedRequest = payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoginLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            if (payload == "error"){
                state.isLoginError = true;
            } else {
                state.isLoginError = false;
                state.isLogged = true;
            }
            state.isLoginLoading = false;
        });
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoginLoading = false;
            state.isLoginError = true;
        });
        builder.addCase(refreshToken.pending, (state) => {
            state.isLoginLoading = true;
            state.isLoginError = false;
        });
        builder.addCase(refreshToken.fulfilled, (state, {payload}) => {
            if (payload !== "error"){
                state.isLogged = true;
            } else {
                state.isLoginError = true;
            }
            state.isLoginLoading = false;
        });
        builder.addCase(refreshToken.rejected, (state) => {
            state.isLoginError = true;
        });
        //ACTIONS FROM OTHER SLICES
        builder.addCase(createJob.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(updateJob.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(deleteJob.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(createNews.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(updateNews.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(deleteNews.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(createPortfolioItem.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(deletePortfolioItem.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(updatePortfolioItem.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(createWorker.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(updateWorker.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
        builder.addCase(deleteWorker.rejected, (state) => {
            state.isUnauthorizedRequest = true;
        });
    }
})

const {reducer, actions} = Login;

export const {setIsLogged,setIsUnauthorizedRequest} = actions;
export default reducer;