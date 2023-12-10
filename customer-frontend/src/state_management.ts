import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "./Api";
import { PastryToFrontend } from "./entities/Pastry";

type PastriesState = {
    pastries: PastryToFrontend[];
}

const PASTRIES_SLICE_NAME = "pastriesIndex";

const initialState: PastriesState = {
    pastries: [],
};

const pastriesSlice = createSlice({
    name: PASTRIES_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(initPastries.fulfilled, (state, action) => {
            state.pastries = action.payload;
        });
    }
});

export const initPastries = createAsyncThunk("pastries/initPastries", async () => {
    const pastriesFromApi = await Api.getPastries();
    const pastriesToFrontend = pastriesFromApi.map(pastry => ({
        id: pastry.id,
        description: pastry.description,
        name: pastry.name,
        imageUrl: Api.urlFromPath(pastry.imagePath),
    }));
    return pastriesToFrontend;
});

export const store = configureStore({
    reducer: {
        [PASTRIES_SLICE_NAME]: pastriesSlice.reducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;