import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import User from "./reducer/User";
import categories from "./reducer/Categories";
import Donation from "./reducer/Donations"
import Donations from "./reducer/Donations";



const rootReducer = combineReducers({
    user: User,
    categories: categories,
    donations: Donations,
});

const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,


}

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
    // reducer:rootReducer, 
    reducer: persistedReducer,

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware(
            { serializableCheck: false })
            // .concat(logger);
    } //bir loglama işlemi gerçekleştirmek veya isteği bir API'ye göndermeden önce belirli bir eylemi tetiklemek için middleware kullanılabilir.
});

export default store;

export const persistor = persistStore(store) // Stora kalıcı hale getirilir. Depolama alanında veri kaydetme ve alma 
persistor.purge(); // donation item verileri yüklendi. Resetleme ve temizleme yapıldı.

