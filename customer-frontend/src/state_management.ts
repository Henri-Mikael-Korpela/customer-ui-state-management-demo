/**
 * @file This file contains the Redux store and related code.
 * @note Naming of types, variables and functions could be improved upon.
 * There was not enough time to think of better names and refactor.
 */
import { PayloadAction, configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "./Api";
import { PastryToFrontend } from "./entities/Pastry";

type MainState = {
    pastries: PastryToFrontend[];
    /**
     * Maps pastry IDs to ratings.
     */
    pastryRatings: { [pastryId: number]: number };
}
type PastryRating = {
    pastryId: number;
    rating: number;
}

const PASTRIES_SLICE_NAME = "pastriesIndex";

const initialState: MainState = {
    pastries: [],
    pastryRatings: {},
};

const pastriesSlice = createSlice({
    name: PASTRIES_SLICE_NAME,
    initialState,
    reducers: {
        setRatingForPastry: (state, action: PayloadAction<PastryRating>) => {
            const { pastryId, rating } = action.payload;
            state.pastryRatings[pastryId] = rating;
        }
    },
    extraReducers: builder => {
        builder.addCase(initPastries.fulfilled, (state, action) => {
            state.pastries = action.payload;
        });
    }
});

const initPastries = createAsyncThunk("pastries/initPastries", async () => {
    const pastriesFromApi = await Api.getPastries();
    const pastriesToFrontend = pastriesFromApi.map(pastry => ({
        id: pastry.id,
        description: pastry.description,
        name: pastry.name,
        imageUrl: Api.urlFromPath(pastry.imagePath),
    }));
    return pastriesToFrontend;
});
const { setRatingForPastry } = pastriesSlice.actions;

export { initPastries, setRatingForPastry };
export const store = configureStore({
    reducer: {
        [PASTRIES_SLICE_NAME]: pastriesSlice.reducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;