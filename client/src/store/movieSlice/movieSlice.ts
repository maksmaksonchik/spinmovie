import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovie } from "../../models/TMovie";
import { movieApi } from "../../services/movieApi/movieApi";

type MovieState = {
  wheelList: TMovie[];
}

const initialState: MovieState = {
  wheelList: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    replace(state, action: PayloadAction<{index: number, movie: TMovie}>) {
      state.wheelList[action.payload.index] = action.payload.movie;
    }
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(movieApi.endpoints.fetchTopTen.matchFulfilled, (state, action) => {
      state.wheelList = action.payload;
    })
  },
})

export const movieReducer = movieSlice.reducer;
