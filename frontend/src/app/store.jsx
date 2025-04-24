import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from '../store/userSlice.js';
import postsReducer from '../store/postsSlice.js';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['userData','postsData']
};

const rootReducer = combineReducers({
    userData: userReducer,
    postsData: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // necesar pt redux-persist
        }),
});

export const persistedStore = persistStore(store);
