import { getMovieById } from "../../services/movieApi/getMovieById";
import { AppDispatch } from "../store";
import { collectionSlice } from "./collectionSlice";


export const fetchCollectionMovies = (ids: number[]) => async (dispatch: AppDispatch) => {
  try {
    dispatch(collectionSlice.actions.collectionsFetching())
    const promises = ids.map((id: number) => {
      return getMovieById(id);
    })
    const response = await Promise.all(promises);
    dispatch(collectionSlice.actions.collectionsFetchingSuccess(response))
  } catch (e) {
    dispatch(collectionSlice.actions.collectionsFetchingError(String(e)));
  }
}
