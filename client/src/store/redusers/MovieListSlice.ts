import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovie } from "../../models/TMovie"


type MovieListState = {
  movieList: TMovie[];
  isLoading: boolean;
  error: string;
}

const initialState: MovieListState = {
  movieList: [],
  isLoading: false,
  error: ''
}

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    movieListFetching(state) {
      state.isLoading = true;
    },
    movieListFetchingSuccess(state, action: PayloadAction<TMovie[]>) {
      state.isLoading = false;
      state.error = '';
      state.movieList = action.payload;
    },
    movieListFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default movieListSlice.reducer;
