import { baseApi } from "@/shared/api/baseApi";
import type {
	GetSpecializationsRequestParams,
	GetSpecializationsResponse,
} from "../model/types";
import type { Specialization } from "@/entities/auth";

const specializationApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSpecializationsList: build.query<
			GetSpecializationsResponse,
			GetSpecializationsRequestParams
		>({
			query: (params) => ({
				url: "specializations",
				params,
			}),
		}),
		getSpecializationById: build.query<Specialization, number>({
			query: (id) => ({
				url: `specializations/${id}`,
			}),
		}),
	}),
});

export const { useGetSpecializationsListQuery, useGetSpecializationByIdQuery } =
	specializationApi;
