//libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//hooks
import { useHttp } from "@/hooks/useHttp";
//types
import { IjobItem, RequestStatus } from "@/types";
//API
import { baseApiUrl as baseUrl } from "@/services/API";


const initialState: {
  jobs: IjobItem[],
  loadJobsSatatus: RequestStatus,
  updateJobStatus: RequestStatus
  createJobStatus: RequestStatus
  deleteJobStatus: RequestStatus
} = {
  jobs: [],
  loadJobsSatatus: "loading",
  updateJobStatus: "idle",
  createJobStatus: "idle",
  deleteJobStatus: "idle"
}

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async () => {
    const { request } = useHttp();
    return request(`${baseUrl}/position/`);
  }
)

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async (payload: {
    id: number,
    data: Partial<IjobItem>
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/position/${[payload.id]}/`, "PATCH", JSON.stringify(payload.data), {
      "Content-Type": "application/json"
    }, true);
  }
)

export const createJob = createAsyncThunk(
  "jobs/createJob",
  async (payload: {
    data: Partial<IjobItem>
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/position/`, "POST", JSON.stringify(payload.data), {
      "Content-Type": "application/json"
    }, true);
  }
)
export const deleteJob = createAsyncThunk(
  'jobs/deleteJob',
  async (payload: {
    id: number
  }) => {
    const { request } = useHttp();
    return request(`${baseUrl}/position/${payload.id}/`, 'DELETE', null, undefined, true);
  }
);



const EventsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, { payload }) => {
        state.loadJobsSatatus = "loading"
      })
      .addCase(fetchJobs.fulfilled, (state, { payload }) => {
        state.jobs = payload
        state.loadJobsSatatus = "idle"
      })
      .addCase(fetchJobs.rejected, (state, { payload }) => {
        state.loadJobsSatatus = "error"
      })
      .addCase(updateJob.pending, (state, { payload }) => {
        state.updateJobStatus = "loading"
      })
      .addCase(updateJob.fulfilled, (state, { payload }) => {
        state.jobs = state.jobs.map(job => job.id === payload.id ? payload : job)
        state.updateJobStatus = "idle"
      })
      .addCase(updateJob.rejected, (state, { payload }) => {
        state.updateJobStatus = "error"
      })
      .addCase(createJob.pending, (state, { payload }) => {
        state.createJobStatus = "loading"
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        state.jobs.push(payload)
        state.createJobStatus = "idle"
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.createJobStatus = "error"
      })
      .addCase(deleteJob.pending, (state, { payload }) => {
        state.deleteJobStatus = "loading"
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        state.jobs = state.jobs.filter(job => job.id !== payload.deleted_id)
        state.deleteJobStatus = "idle"
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.deleteJobStatus = "error"
      })
  }
})

const { reducer, actions } = EventsSlice
export const { } = actions;
export default reducer




