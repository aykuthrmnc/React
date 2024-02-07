import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "aykuthrmnc",
    fullName: "Aykut Harmancı",
    avatar: "./profile.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "aykuthrmnc",
      fullName: "Aykut Harmancı",
      avatar: "./profile.jpg",
    },
    {
      id: 2,
      username: "emziklibalik",
      fullName: "Emzikli Balık",
      avatar: "./9.jpeg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccounts: (state, action) => {
      state.accounts = state.accounts.filter((account) => account.id !== action.payload);
      if (action.payload === state.currentAccount?.id) {
        _setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _removeAccounts, _setCurrentAccount } = auth.actions;
export default auth.reducer;
