import { baseApi } from "@/shared/api/baseApi";
import type {
	EditProfileRequestData,
	EditUserRequestData,
} from "../model/types/types";

export const editProfileApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		updateProfile: build.mutation<void, EditProfileRequestData>({
			query: ({ id, ...profile }) => ({
				url: `profiles/${id}`,
				body: profile,
				method: "PUT",
			}),
			invalidatesTags: ["profile"],
			async onQueryStarted({ ...profile }, { queryFulfilled, dispatch }) {
				try {
					await queryFulfilled;
					await dispatch(
						editProfileApi.endpoints.updateUser.initiate(profile.user),
					);
				} catch (e) {
					console.error("Profile update failed", e);
				}
			},
		}),
		updateUser: build.mutation<void, EditUserRequestData>({
			query: ({ id, ...userInfo }) => ({
				url: `users/${id}`,
				body: { ...userInfo },
				method: "PATCH",
			}),
			invalidatesTags: ["profile"],
		}),
	}),
});

export const { useUpdateProfileMutation, useUpdateUserMutation } =
	editProfileApi;
