import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit";

interface IValState {
    transferVal : number;
    storageVal : number;
    smallScreen : boolean;
}

const initialState : IValState = {
    transferVal: 0,
    storageVal: 0,
    smallScreen: false
}

export const valSlice = createSlice({
    name: 'val',
    initialState,
    reducers: {
        setTransferVal(state, action : PayloadAction<number>) {
            state.transferVal = action.payload
        },
        setStorageVal(state, action : PayloadAction<number>) {
            state.storageVal = action.payload
        },
        setSmallScreen(state, action : PayloadAction<boolean>) {
            state.smallScreen = action.payload
        }
    }
})

export default valSlice.reducer