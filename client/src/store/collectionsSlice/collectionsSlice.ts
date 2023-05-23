import { createSlice } from "@reduxjs/toolkit";
import { TCollection } from "../../models/TCollection";
import { collectionApi } from "../../services/collectionApi/collectionsApi";

type CollectionsState = {
  teamCollections: TCollection[];
  userCollections: TCollection[];
}

const initialState: CollectionsState = {
  teamCollections: [],
  userCollections: []
}

export const collectionsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(collectionApi.endpoints.fetchTeamCollections.matchFulfilled, (state, action) => {
      state.teamCollections = action.payload;
    })
    .addMatcher(collectionApi.endpoints.fetchUserCollectios.matchFulfilled, (state, action) => {
      state.userCollections = action.payload;
    })
    .addMatcher(collectionApi.endpoints.create.matchFulfilled, (state, action) => {
      state.userCollections.push(action.payload);
    })
    .addMatcher(collectionApi.endpoints.delete.matchFulfilled, (state, action) => {
      state.userCollections = state.userCollections.filter((collection) => collection.id !== action.payload.id);
    })
  },
})

export const collectionsReducer = collectionsSlice.reducer;
