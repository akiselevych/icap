//libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//hooks
import { useHttp } from "@/hooks/useHttp";
//types
import { InewsItem, RequestStatus } from "@/types";
//API
import { baseApiUrl as baseUrl } from "@/services/API";




const initialState: {
  news: InewsItem[],
  loadNewsStatus: RequestStatus
  updateNewsStatus: RequestStatus
  createNewsStatus: RequestStatus
  deleteNewsStatus: RequestStatus
} = {
  news: [],
  loadNewsStatus: "loading",
  updateNewsStatus: "idle",
  createNewsStatus: "idle",
  deleteNewsStatus: "idle",
}


export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async () => {
    const { request } = useHttp();
    return request(`${baseUrl}/news/`);
  }
)

export const updateNews = createAsyncThunk(
  "jobs/updateNews",
  async (payload: {
    id: number,
    formData: FormData
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/news/${[payload.id]}/`, "PATCH", payload.formData, {}, true);
  }
)

export const createNews = createAsyncThunk(
  "jobs/createNews",
  async (payload: {
    formData: FormData
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/news/`, "POST", payload.formData, {}, true);
  }
)
export const deleteNews = createAsyncThunk(
  'jobs/deleteNews',
  async (payload: {
    id: number
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/news/${payload.id}/`, 'DELETE', null, undefined, true);
  }
);



const EventsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, { payload }) => {
        state.loadNewsStatus = "loading"
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.news = payload
        state.loadNewsStatus = "idle"
      })
      .addCase(fetchNews.rejected, (state, { payload }) => {
        state.loadNewsStatus = "error"
      })
      .addCase(updateNews.pending, (state, { payload }) => {
        state.updateNewsStatus = "loading"
      })
      .addCase(updateNews.fulfilled, (state, { payload }) => {
        state.news = state.news.map(job => job.id === payload.id ? payload : job)
        state.updateNewsStatus = "idle"
      })
      .addCase(updateNews.rejected, (state, { payload }) => {
        state.updateNewsStatus = "error"
      })
      .addCase(createNews.pending, (state, { payload }) => {
        state.createNewsStatus = "loading"
      })
      .addCase(createNews.fulfilled, (state, { payload }) => {
        state.news.push(payload)
        state.createNewsStatus = "idle"
      })
      .addCase(createNews.rejected, (state, { payload }) => {
        state.createNewsStatus = "error"
      })
      .addCase(deleteNews.pending, (state, { payload }) => {
        state.deleteNewsStatus = "loading"
      })
      .addCase(deleteNews.fulfilled, (state, { payload }) => {
        state.news = state.news.filter(job => job.id !== payload.deleted_id)
        state.deleteNewsStatus = "idle"
      })
      .addCase(deleteNews.rejected, (state, { payload }) => {
        state.deleteNewsStatus = "error"
      })
  }
})

const { reducer, actions } = EventsSlice
export const { } = actions;
export default reducer
