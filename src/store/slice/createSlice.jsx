import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    counter:0
}
const counterSlice = createSlice({

    name:'counter',
    initialState,
    reducers : {
        addCounter: (state, action) => {
            state.counter = ++state.counter
        },
        delCounter: (state, action)=>{
            if(state.counter > 0) {
                state.counter = --state.counter;
            }
        }
    }
})

const {actions , reducer} = counterSlice;
export default reducer

export const {addCounter , delCounter} = actions