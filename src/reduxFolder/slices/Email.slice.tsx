//libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//hooks
import { useHttp } from "@/hooks/useHttp";
//types
import { IjobItem, RequestStatus } from "@/types";
//API
import { baseApiUrl as baseUrl } from "@/services/API";


const initialState: {
  sendEmailStatus: RequestStatus,
} = {
  sendEmailStatus: "idle"
}




export const sendEmail = createAsyncThunk(
  'email/sendEmail',
  async (payload: {
    formData: FormData
  }) => {
    const { request } = useHttp();
    return await request(`https://api.icapgroupgmbh.com/send-vacancy`, 'POST', payload.formData, {});
  }
);



const EmailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state, { payload }) => {
        state.sendEmailStatus = "loading"
      })
      .addCase(sendEmail.fulfilled, (state, { payload }) => {
        state.sendEmailStatus = "idle"
      })
      .addCase(sendEmail.rejected, (state, { payload }) => {
        console.error(payload)
        state.sendEmailStatus = "error"
      })
  }
})

const { reducer, actions } = EmailSlice
export const { } = actions;
export default reducer




