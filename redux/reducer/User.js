import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn :false,
    // firstName: 'John',
    // lastName: 'Doe',
    // userId: 1,
    profileImage: '../../assets/user.png',
}
export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logIn: (state, action ) => { 
            return {...state, ...{isLoggedIn:true}, ...action.payload}
        },
        // updatedFirstName: (state, action) => {
        //     state.firstName = action.payload.firstName
        // },

        resetToInitialState: () => {
            return initialState
        },
        updateToken : (state, action) => { 
            state.token = action.payload;
        }
    },
});

// export const { updatedFirstName, resetToInitialState } = User.actions;
export const {logIn, resetToInitialState,updateToken } = User.actions;
export default User.reducer;


// action user/updatedFirstName @ 07:12:15.171
//  LOG     prev state {"user": {"firstName": "John", "lastName": "Doe", "userId": 1}}
//  LOG     action     {"payload": {"firstName": "J"}, "type": "user/updatedFirstName"}
//  LOG     next state {"user": {"firstName": "J", "lastName": "Doe", "userId": 1}}