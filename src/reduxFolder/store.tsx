//Libs
import {combineReducers, configureStore} from "@reduxjs/toolkit";
// Slices
import News from "./slices/News.slice"
import Jobs from "./slices/Jobs.slice"
import Email from "./slices/Email.slice"
import Workers from "./slices/Workers.slice"
import Login from './slices/Login.slice'
import Portfolio from "./slices/Portfolio.slice"
import StaticContent from "./slices/StaticContent.slice"
import ImagesContent from "./slices/ImagesContent.slice"


const rootReducer = combineReducers({
    News,
    Jobs,
    Email,
    Workers,
    Login,
    Portfolio,
    StaticContent,
    ImagesContent
});

export const store = configureStore({
    reducer: rootReducer,
});
