import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLS, setToLS } from "../helpers/controlLocalStorage";

const BASE_URL = import.meta.env.VITE_YEAHUB_API_URL;

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	credentials: "include",
	prepareHeaders: (headers) => {
		const accessToken = getFromLS("accessToken");
		if (accessToken) {
			headers.set("Authorization", `Bearer ${accessToken}`);
		}

		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error?.status === 401) {
		const refreshResults = await baseQuery("/auth/refresh", api, extraOptions);

		if (refreshResults.data) {
			setToLS("accessToken", refreshResults.data.access_token);

			result = await baseQuery(args, api, extraOptions);
		} else {
			console.error("Failed to refresh token");
		}
	}

	return result;
};

export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["profile"],
	endpoints: () => ({}),
});
