import { movieApi } from "../../services/movieApi/movieApi";
import { AppDispatch } from "../store";
import { movieSlice } from "./movieSlice";

export const replaceWheelLisByIds = (ids: number[]) => async (dispatch: AppDispatch) => {
  try {
    ids.forEach(async (id: number, index) => {
      const result = await dispatch(movieApi.endpoints.fetchById.initiate(id));
      const movie = result.data;
      if (movie) {
        dispatch(movieSlice.actions.replace({index, movie}))
      }
    })
  } catch (e) {
  }
}
