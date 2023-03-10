import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';
import valReducer from './reducers/ValReducer'
import providerReducer from './reducers/ProvidesReduces'

const rootReducer = combineReducers({
    valReducer,
    providerReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']