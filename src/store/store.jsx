import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/createSlice'


const store = configureStore({
    reducer: {
        counterReducer

    }
})

export default store