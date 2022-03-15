import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"
import sessionStorage from 'redux-persist/es/storage/session';
import rootReducer from "./Reducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    storage,
    blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store);