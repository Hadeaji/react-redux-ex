import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface StatusState {
    value: 'AFK' | 'Active' | 'Busy' | 'Offline';
    lastUpdate: Date;
  }

const initialState: StatusState = {
    value: 'Offline',
    lastUpdate: new Date(), 
}


export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        offlineState: (state)=> {
            state.value = 'Offline';
            state.lastUpdate = new Date();
        },
        afkState: (state)=> {
            state.value = 'AFK';
            state.lastUpdate = new Date();
        },
        activeState: (state)=> {
            state.value = 'Active';
            state.lastUpdate = new Date();
        },
        busyState: (state)=> {
            state.value = 'Busy';
            state.lastUpdate = new Date();
        },
    },
});

export const { offlineState, afkState, activeState, busyState } = statusSlice.actions;

export const selectStatus = (store: RootState) => store.status.value;


export default statusSlice.reducer;
