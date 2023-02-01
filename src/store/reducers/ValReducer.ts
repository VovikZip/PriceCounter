import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit";

interface IValState {
    transferVal : number;
    storageVal : number;
    totalBackblaze : number;
    totalBunny : number;
    totalScaleway : number;
    totalVultr : number;
}

const initialState : IValState = {
    transferVal: 0,
    storageVal: 0,
    totalBackblaze: 0,
    totalBunny: 0,
    totalScaleway: 0,
    totalVultr: 0,
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
    }
})

export default valSlice.reducer