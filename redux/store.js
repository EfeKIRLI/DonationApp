import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import User from "./reducer/User";
import logger from "redux-logger";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer,persistStore} from "redux-persist";



const rootReducer = combineReducers({ 
   user : User,
});

const configuration = { 
    key: 'root',
    storage : AsyncStorage,
    version: 1,


}

const persistedReducer = persistReducer(configuration, rootReducer );

const store = configureStore({ 
    // reducer:rootReducer,
    reducer:persistedReducer,

    middleware: getDefaultMiddleware => {  
        return getDefaultMiddleware(
            {serializableCheck: false}
        ).concat(logger);
     } //bir loglama işlemi gerçekleştirmek veya isteği bir API'ye göndermeden önce belirli bir eylemi tetiklemek için middleware kullanılabilir.
});

export default store;

export const persistor =  persistStore(store) // Stora kalıcı hale getirilir. Depolama alanında veri kaydetme ve alma 


