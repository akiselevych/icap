import {IContentItem, ITextContent, RequestStatus} from "@/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "@/hooks/useHttp";
import {baseApiUrl as baseUrl} from "@/services/API";
import {updateNews} from "@/reduxFolder/slices/News.slice";


const initialState: {
    content: IContentItem[],
    textContent: ITextContent[],
    pendingChanges: boolean,
    loadContentStatus: RequestStatus,
    updateContentStatus: RequestStatus
    createContentStatus: RequestStatus
    deleteContentStatus: RequestStatus
} = {
    content: [],
    textContent: [],
    pendingChanges: false,
    loadContentStatus: "loading",
    updateContentStatus: "idle",
    createContentStatus: "idle",
    deleteContentStatus: "idle",
}

export const fetchPendingStatus = createAsyncThunk(
    "StaticContent/fetchPendingStatus",
    async () => {
        const {request} = useHttp();
        return request(`${baseUrl}/languages/pending_changes_status/`, "GET", null,{},true);
    }
)
export const rebuildApplication = createAsyncThunk(
    "StaticContent/rebuildApplication",
    async () => {
        const URL = 'https://api.github.com/repos/ICAPGroupgmbh/IcapWebsite/actions/workflows/ci_cd.yml/dispatches';

        const {request} = useHttp();
        request(URL, "POST", JSON.stringify({"ref": "main"}), {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer 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`,
            "Content-Type": "application/json",
            "X-GitHub-Api-Version": "2022-11-28"
        });
        const data = {
            pending_changes: false
        }
        request(`${baseUrl}/languages/update_pending_changes/`, "PATCH",JSON.stringify(data), {"Content-Type": "application/json"},true);
    }
)


export const fetchAllContent = createAsyncThunk(
    "StaticContent/fetchAllContent",
    async () => {
        const {request} = useHttp();
        return request(`${baseUrl}/webpages/`);
    }
)

export const updateContent = createAsyncThunk(
    "StaticContent/updateContent",
    async (payload: { id: number, data: Partial<IContentItem> }) => {
        const {request} = useHttp();
        return request(`${baseUrl}/webpages/${payload.id}/`, "PATCH", JSON.stringify(payload.data), {
            "Content-Type": "application/json"
        }, true);
    }
)
export const deleteContent = createAsyncThunk(
    "StaticContent/deleteContent",
    async (id: number) => {
        const {request} = useHttp();
        return request(`${baseUrl}/webpages/${id}/`, "DELETE", null, {
            "Content-Type": "application/json"
        }, true);
    }
)


export const fetchAllTextContent = createAsyncThunk(
    "StaticContent/fetchAllTextContent",
    async () => {
        const {request} = useHttp();
        return request(`${baseUrl}/languages/`);
    }
)
export const updateTextContent = createAsyncThunk(
    "StaticContent/updateTextContent",
    async (payload: { id: number, data: Partial<ITextContent> }) => {
        const {request} = useHttp();
        return await request(`${baseUrl}/languages/${payload.id}/`, "PATCH", JSON.stringify(payload.data), {
            "Content-Type": "application/json"
        }, true);
    }
)

const StaticContent = createSlice(
    {
        name: "StaticContent",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchPendingStatus.pending, (state) => {
                    state.loadContentStatus = "loading";
                })
                .addCase(fetchPendingStatus.fulfilled, (state, {payload}) => {
                    state.loadContentStatus = "idle";
                    state.pendingChanges = payload.pending_changes;
                })
                .addCase(fetchPendingStatus.rejected, (state, {payload}) => {
                    state.loadContentStatus = "error";
                })

                .addCase(rebuildApplication.fulfilled, (state, {payload}) => {
                    state.loadContentStatus = "idle";
                    state.pendingChanges = false;
                })


                .addCase(fetchAllContent.pending, (state) => {
                    state.loadContentStatus = "loading";
                })
                .addCase(fetchAllContent.fulfilled, (state, {payload}) => {
                    state.loadContentStatus = "idle";
                    state.content = payload;
                })
                .addCase(fetchAllContent.rejected, (state, {payload}) => {
                    state.loadContentStatus = "error";
                })
                .addCase(fetchAllTextContent.pending, (state) => {
                    state.loadContentStatus = "loading";
                })
                .addCase(fetchAllTextContent.fulfilled, (state, {payload}) => {
                    state.loadContentStatus = "idle";
                    state.textContent = payload;
                })
                .addCase(fetchAllTextContent.rejected, (state, {payload}) => {
                    state.loadContentStatus = "error";
                })
                .addCase(updateContent.pending, (state) => {
                    state.updateContentStatus = "loading";
                })
                .addCase(updateContent.fulfilled, (state, {payload}) => {
                    state.updateContentStatus = "idle";
                    state.pendingChanges = true;
                    state.content = state.content.map(c => {
                        if (c.id === payload.id) {
                            return payload;
                        }
                        return c;
                    })
                })
                .addCase(updateContent.rejected, (state, {payload}) => {
                    state.loadContentStatus = "error";
                })
                .addCase(updateTextContent.pending, (state) => {
                    state.updateContentStatus = "loading";
                })
                .addCase(updateTextContent.fulfilled, (state, {payload}) => {
                    state.updateContentStatus = "idle";
                    state.pendingChanges = true;
                    state.textContent = state.textContent.map(c => {
                        if (c.id === payload.id) {
                            return payload;
                        }
                        return c;
                    })
                })
                .addCase(updateTextContent.rejected, (state, {payload}) => {
                    state.loadContentStatus = "error";
                })


                .addCase(deleteContent.pending, (state) => {
                    state.deleteContentStatus = "loading";
                })
                .addCase(deleteContent.fulfilled, (state, {payload}) => {
                    state.deleteContentStatus = "idle";
                    state.content = state.content.filter(c => c.id !== payload)
                })
                .addCase(deleteContent.rejected, (state, {payload}) => {
                    state.deleteContentStatus = "error";
                })
        }
    }
)

const {reducer, actions} = StaticContent;
export const {} = actions;
export default reducer