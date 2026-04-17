import profileReducer from "@/entities/profile/model/slices/profileSlice";
import { baseApi } from "@/shared/api/baseApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
	profile: profileReducer,
	[baseApi.reducerPath]: baseApi.reducer,
});
