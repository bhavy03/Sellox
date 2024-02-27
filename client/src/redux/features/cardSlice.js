import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCards: [],
  currentId: {},
  searchField: "",
  isAuthenticated: false,
  userdata: {
    success: false,
    user: null,
  },
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setAllCards: (state, action) => {
      state.currentCards = action.payload;
    },
    setCurrentCard: (state, action) => {
      state.currentId = action.payload;
    },
    setSearch: (state, action) => {
      state.searchField = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUserdata: (state, action) => {
      state.userdata = action.payload;
      // console.log(state.userdata);
      // console.log(state.userdata.user);
    },
  },
});

export const {
  setAllCards,
  setCurrentCard,
  setSearch,
  setAuthenticated,
  setUserdata,
} = cardSlice.actions;

export default cardSlice.reducer;
