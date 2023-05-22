import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovie } from "../../models/TMovie";

type CollectionState = {
  moviList: TMovie[];
  isLoading: boolean;
  error: string
}

const initialState: CollectionState = {
  moviList: [],
  isLoading: false,
  error: ''
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    collectionsFetching: (state) => {
      state.isLoading = true;
    },
    collectionsFetchingSuccess: (state, action: PayloadAction<TMovie[]>) => {
      state.isLoading = false;
      state.error = '';
      state.moviList = action.payload;
    },
    collectionsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export const collectionReducer = collectionSlice.reducer;
