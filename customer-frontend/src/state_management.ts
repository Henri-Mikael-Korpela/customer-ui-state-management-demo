import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
/* import buttermilkCheeseCakeImage from "./assets/40214-piimajuustokakku-800x534.jpeg";
import blueberryCheeseCakeImage from "./assets/41100-mustikkajuustokakku-800x534.jpeg"; */

export type Pastry = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
};

/* const initialState2 = {
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
    ] as Pastry[],
}; */

export type CounterState = {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;