import type { Specialization } from "@/entities/auth";
import type { Response } from "@/shared/helpers/query";

export type GetSpecializationsResponse = Response<Specialization[]>;

export interface GetSpecializationsRequestParams {
	page?: number;
	title?: string;
	limit?: number;
	specializations?: number[];
	authorId?: string;
}
