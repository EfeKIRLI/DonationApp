import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import User from "./reducer/User";
import logger from "redux-logger";
import { getDefaultMiddleware } from '@reduxjs/toolkit';



const rootReducer = combineReducers({ 
   user : User,
});

const store = configureStore({ 
    reducer:rootReducer,
    middleware: getDefaultMiddleware => {  
        return getDefaultMiddleware().concat(logger)
    } //bir loglama işlemi gerçekleştirmek veya isteği bir API'ye göndermeden önce belirli bir eylemi tetiklemek için middleware kullanılabilir.
});

export default store;


