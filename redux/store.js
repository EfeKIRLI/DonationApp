import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import User from "./reducer/User";
import logger from "redux-logger";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const rootReducer = combineReducers({ 
   user : User,
});

const store = configureStore({ 
    reducer:rootReducer,
    middleware:buildGetDefaultMiddleware => {  
        return buildGetDefaultMiddleware.concat(logger);
    } //bir loglama işlemi gerçekleştirmek veya isteği bir API'ye göndermeden önce belirli bir eylemi tetiklemek için middleware kullanılabilir.
});

export default store;


