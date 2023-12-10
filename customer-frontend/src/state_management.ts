import { configureStore, createSlice } from "@reduxjs/toolkit";
import buttermilkCheeseCakeImage from "./assets/40214-piimajuustokakku-800x534.jpeg";
import blueberryCheeseCakeImage from "./assets/41100-mustikkajuustokakku-800x534.jpeg";

export type Pastry = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
};

export type PastriesState = {
    pastries: Pastry[];
}

const initialState: PastriesState = {
    pastries: [
        {
            id: 100,
            name: "Buttermilk cheesecake",
            description: "Fresh buttermilk cheesecake brings childhood taste memories to the tongue. The oat base, buttermilk, blueberries and cardamom are a gentle flavor combination. In addition to berries, grated white chocolate and spruce nuts are suitable for decoration.",
            imageUrl: buttermilkCheeseCakeImage
        },
        {
            id: 101,
            name: "Blueberry cheesecake",
            description: "Blueberry cheesecake is just as much a casual summer party treat as a festive Independence Day cake. If you want, you can marbleize the filling as per the instructions with blueberry puree or mix it completely with the cream cheese filling, which will make the cake a beautiful purple.",
            imageUrl: blueberryCheeseCakeImage
        }
    ],
};

const pastriesSliceName = "pastriesIndex";

export const pastriesSlice = createSlice({
    name: pastriesSliceName,
    initialState,
    reducers: {}
})

export const store = configureStore({
    reducer: {
        [pastriesSliceName]: pastriesSlice.reducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;