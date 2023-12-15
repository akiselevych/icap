import {IImageItem, ImageInstance, RequestStatus} from "@/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "@/hooks/useHttp";
import {baseApiUrl as baseUrl} from "@/services/API";


const initialState: {
    images: IImageItem[],
    loadImagesStatus: RequestStatus,
    updateImageStatus: RequestStatus
    createImageStatus: RequestStatus
    deleteImageStatus: RequestStatus
} = {
    images: [],
    loadImagesStatus: "loading",
    updateImageStatus: "idle",
    createImageStatus: "idle",
    deleteImageStatus: "idle",
}


export const fetchAllImages = createAsyncThunk(
    "Images/fetchAllImages",
    async () => {
        const { request } = useHttp();
        return request(`${baseUrl}/webpage-images/`);
    }
)

export const updateImage = createAsyncThunk(
    "Images/updateImage",
    async ({id,image}: {id: number, image:FormData | File}) => {
        const { request } = useHttp();
        return request(`${baseUrl}/images/${id}/`, "PATCH", image,{},true);
    }
)
export const deleteImage = createAsyncThunk(
    "Images/deleteImage",
    async (id: number) => {

    }
)

const ImagesContent = createSlice(
    {
        name: "Images",
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchAllImages.pending, (state) => {
                    state.loadImagesStatus = "loading";
                })
                .addCase(fetchAllImages.fulfilled, (state, {payload}) => {
                    state.loadImagesStatus = "idle";
                    state.images = payload;
                })
                .addCase(fetchAllImages.rejected, (state, {payload}) => {
                    state.loadImagesStatus = "error";
                })
                .addCase(updateImage.pending, (state) => {
                    state.updateImageStatus = "loading";
                })
                .addCase(updateImage.fulfilled, (state, {payload}: {payload: ImageInstance}) => {
                    state.updateImageStatus = "idle";
                    state.images.find(image => image.page_name === image.page_name)!.images  = state.images.find(image => image.page_name === image.page_name)!.images.map(img => {
                        if (img.id === payload.id){
                            return payload;
                        }
                        return img;
                    })
                })
                .addCase(updateImage.rejected, (state, {payload}) => {
                    state.updateImageStatus = "error";
                })
                .addCase(deleteImage.pending, (state) => {

                })
                .addCase(deleteImage.fulfilled, (state, {payload}) => {

                })
                .addCase(deleteImage.rejected, (state, {payload}) => {

                })
        }
    }
)

const { reducer, actions } = ImagesContent;
export const { } = actions;
export default reducer