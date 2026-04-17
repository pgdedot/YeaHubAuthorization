import { baseApi } from "@/shared/api/baseApi";
import type {
	LoginBodyRequest,
	LoginResponse,
	SignUpResponse,
	SingUpBodyRequest,
	UserProfile,
} from "../model/types";
import { setFullProfile } from "@/entities/profile/model/slices/profileSlice";
import { removeFromLS, setToLS } from "@/shared/helpers/controlLocalStorage";

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<LoginResponse, LoginBodyRequest>({
			query: (body) => ({
				url: "auth/login",
				method: "POST",
				body,
			}),
			async onQueryStarted(_, { queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					setToLS("accessToken", result.data.access_token);
				} catch (e) {
					console.error("Failed login", e);
				}
			},
		}),
		register: build.mutation<SignUpResponse, SingUpBodyRequest>({
			query: (body) => ({
				url: "auth/signUp",
				method: "POST",
				body,
			}),
			async onQueryStarted(_, { queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					setToLS("accessToken", result.data.access_token);
				} catch (e) {
					console.error("Failed registration", e);
				}
			},
		}),
		profile: build.query<UserProfile, void>({
			query: () => "auth/profile",
			providesTags: ["profile"],
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					dispatch(
						setFullProfile({
							...result.data,
							activeProfile: result.data.profiles[0],
						}),
					);
				} catch (e) {
					console.error("Failed get profile", e);
				}
			},
		}),
		logout: build.query<void, void>({
			query: () => "auth/logout",
			async onQueryStarted(_, { queryFulfilled }) {
				try {
					await queryFulfilled;
					removeFromLS("accessToken");
				} catch (e) {
					console.error("Failed logout", e);
				}
			},
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useProfileQuery,
	useLazyLogoutQuery,
} = authApi;
