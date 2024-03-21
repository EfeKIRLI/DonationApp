import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    userId: 1,
    profileImage: '../../assets/user.png',
}
export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updatedFirstName: (state, action) => {
            state.firstName = action.payload.firstName
        },

        resetToInitialState: () => {
            return initialState
        }
    },
});

export const { updatedFirstName, resetToInitialState } = User.actions;
export default User.reducer;


// action user/updatedFirstName @ 07:12:15.171
//  LOG     prev state {"user": {"firstName": "John", "lastName": "Doe", "userId": 1}}
//  LOG     action     {"payload": {"firstName": "J"}, "type": "user/updatedFirstName"}
//  LOG     next state {"user": {"firstName": "J", "lastName": "Doe", "userId": 1}}