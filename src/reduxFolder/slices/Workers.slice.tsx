//libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//hooks
import { useHttp } from "@/hooks/useHttp";
//types
import { IworkerItem, RequestStatus } from "@/types";
//API
import { baseApiUrl as baseUrl } from "@/services/API";


const initialState: {
  workers: IworkerItem[],
  loadWorkersSatatus: RequestStatus,
  updateWorkersStatus: RequestStatus
  createWorkersStatus: RequestStatus
  deleteWorkersStatus: RequestStatus
} = {
  workers: [],
  loadWorkersSatatus: "loading",
  updateWorkersStatus: "idle",
  createWorkersStatus: "idle",
  deleteWorkersStatus: "idle"
}

export const fetchWorkers = createAsyncThunk(
  "Workers/fetchWorkers",
  async () => {
    const { request } = useHttp();
    return request(`${baseUrl}/our-team/`);
  }
)

export const updateWorker = createAsyncThunk(
  "workers/updateWorker",
  async (payload: {
    id: number,
    formData: FormData
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/our-team/${[payload.id]}/`, "PATCH", payload.formData, {

    }, true);
  }
)

export const createWorker = createAsyncThunk(
  "workers/createWorker",
  async (payload: {
    formData: FormData
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/our-team/`, "POST", payload.formData, {
    }, true);
  }
)
export const deleteWorker = createAsyncThunk(
  'workers/deleteWorker',
  async (payload: {
    id: number
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/our-team/${payload.id}/`, 'DELETE', null, undefined, true);
  }
);



const EventsSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkers.pending, (state, { payload }) => {
        state.loadWorkersSatatus = "loading"
      })
      .addCase(fetchWorkers.fulfilled, (state, { payload }) => {
        state.workers = payload
        state.loadWorkersSatatus = "idle"
      })
      .addCase(fetchWorkers.rejected, (state, { payload }) => {
        state.loadWorkersSatatus = "error"
      })
      .addCase(updateWorker.pending, (state, { payload }) => {
        state.updateWorkersStatus = "loading"
      })
      .addCase(updateWorker.fulfilled, (state, { payload }) => {
        state.workers = state.workers.map(worker => worker.id === payload.id ? payload : worker)
        state.updateWorkersStatus = "idle"
      })
      .addCase(updateWorker.rejected, (state, { payload }) => {
        state.updateWorkersStatus = "error"
      })
      .addCase(createWorker.pending, (state, { payload }) => {
        state.createWorkersStatus = "loading"
      })
      .addCase(createWorker.fulfilled, (state, { payload }) => {
        state.workers.push(payload)
        state.createWorkersStatus = "idle"
      })
      .addCase(createWorker.rejected, (state, { payload }) => {
        state.createWorkersStatus = "error"
      })
      .addCase(deleteWorker.pending, (state, { payload }) => {
        state.deleteWorkersStatus = "loading"
      })
      .addCase(deleteWorker.fulfilled, (state, { payload }) => {
        state.workers = state.workers.filter(worker => worker.id !== payload.deleted_id)
        state.deleteWorkersStatus = "idle"
      })
      .addCase(deleteWorker.rejected, (state, { payload }) => {
        state.deleteWorkersStatus = "error"
      })
  }
})

const { reducer, actions } = EventsSlice
export const { } = actions;
export default reducer




