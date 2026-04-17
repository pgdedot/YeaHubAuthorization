import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FullProfile, ProfileState } from "../types/types";

const initialState: ProfileState = {
	fullProfile: null,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setFullProfile(state, action: PayloadAction<FullProfile>) {
			state.fullProfile = action.payload;
		},
	},
});

export const { setFullProfile } = profileSlice.actions;

export default profileSlice.reducer;
