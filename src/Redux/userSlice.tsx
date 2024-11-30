import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userId: string | null;
    phoneNumber: string | null;
    walletId: string | null;
}

const initialState: UserState = {
    userId: null,
    phoneNumber: null,
    walletId: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserState>) => {
            state.userId = action.payload.userId;
            state.phoneNumber = action.payload.phoneNumber;
            state.walletId = action.payload.walletId;
        },
        clearUserInfo: (state) => {
            state.userId = null;
            state.phoneNumber = null;
            state.walletId = null;
        },
    },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
