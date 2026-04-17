import { baseApi } from "@/shared/api/baseApi";
import type {
	GetSkillsListRequestParams,
	GetSkillsListResponse,
} from "../model/types/types";

export const skillsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSkillsList: build.query<
			GetSkillsListResponse,
			GetSkillsListRequestParams
		>({
			query: (params) => ({
				url: "/skills",
				params,
			}),
		}),
	}),
});

export const { useGetSkillsListQuery } = skillsApi;
