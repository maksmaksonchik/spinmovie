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
    },
    replacingByIdsSuccess: (state, action: PayloadAction<TMovie[]>) => {
      state.wheelList = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
    .addMatcher(movieApi.endpoints.fetchTopTen.matchFulfilled, (state, action) => {
      state.wheelList = action.payload;
    })
    .addMatcher(movieApi.endpoints.searchByFilters.matchFulfilled, (state, action) => {
      if (action.payload.length === 10) {
        state.wheelList = action.payload;
      }
    })
  },
})

export const movieReducer = movieSlice.reducer;
