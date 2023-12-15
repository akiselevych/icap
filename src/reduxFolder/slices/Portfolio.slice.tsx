//libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//hooks
import { useHttp } from "@/hooks/useHttp";
//types
import { IportfolioItem, RequestStatus } from "@/types";
//API
import { baseApiUrl as baseUrl } from "@/services/API";


const initialState: {
  portfolio: IportfolioItem[],
  loadPortfolioStatus: RequestStatus,
  updatePortfolioStatus: RequestStatus
  createPortfolioStatus: RequestStatus
  deletePortfolioStatus: RequestStatus
} = {
  portfolio: [],
  loadPortfolioStatus: "loading",
  updatePortfolioStatus: "idle",
  createPortfolioStatus: "idle",
  deletePortfolioStatus: "idle"
}

export const fetchPortfolio = createAsyncThunk(
  "Portfolio/fetchPortfolio",
  async () => {
    const { request } = useHttp();
    return request(`${baseUrl}/portfolio/`);
  }
)

export const updatePortfolioItem = createAsyncThunk(
  "portfolio/updatePortfolioItem",
  async (payload: {
    id: number,
    formData: FormData
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/portfolio/${[payload.id]}/`, "PATCH", payload.formData, {

    }, true);
  }
)

export const createPortfolioItem = createAsyncThunk(
  "portfolio/createPortfolioItem",
  async (payload: {
    formData: FormData
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/portfolio/`, "POST", payload.formData, {
    }, true);
  }
)
export const deletePortfolioItem = createAsyncThunk(
  'portfolio/deletePortfolioItem',
  async (payload: {
    id: number
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/portfolio/${payload.id}/`, 'DELETE', null, undefined, true);
  }
);



const EventsSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state, { payload }) => {
        state.loadPortfolioStatus = "loading"
      })
      .addCase(fetchPortfolio.fulfilled, (state, { payload }) => {
        state.portfolio = payload
        state.loadPortfolioStatus = "idle"
      })
      .addCase(fetchPortfolio.rejected, (state, { payload }) => {
        state.loadPortfolioStatus = "error"
      })
      .addCase(updatePortfolioItem.pending, (state, { payload }) => {
        state.updatePortfolioStatus = "loading"
      })
      .addCase(updatePortfolioItem.fulfilled, (state, { payload }) => {
        state.portfolio = state.portfolio.map(portfolioItem => portfolioItem.id === payload.id ? payload : portfolioItem)
        state.updatePortfolioStatus = "idle"
      })
      .addCase(updatePortfolioItem.rejected, (state, { payload }) => {
        state.updatePortfolioStatus = "error"
      })
      .addCase(createPortfolioItem.pending, (state, { payload }) => {
        state.createPortfolioStatus = "loading"
      })
      .addCase(createPortfolioItem.fulfilled, (state, { payload }) => {
        state.portfolio.push(payload)
        state.createPortfolioStatus = "idle"
      })
      .addCase(createPortfolioItem.rejected, (state, { payload }) => {
        state.createPortfolioStatus = "error"
      })
      .addCase(deletePortfolioItem.pending, (state, { payload }) => {
        state.deletePortfolioStatus = "loading"
      })
      .addCase(deletePortfolioItem.fulfilled, (state, { payload }) => {
        state.portfolio = state.portfolio.filter(portfolioItem => portfolioItem.id !== payload.deleted_id)
        state.deletePortfolioStatus = "idle"
      })
      .addCase(deletePortfolioItem.rejected, (state, { payload }) => {
        state.deletePortfolioStatus = "error"
      })
  }
})

const { reducer, actions } = EventsSlice
export const { } = actions;
export default reducer




