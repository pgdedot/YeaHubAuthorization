import type { ProfileSkill } from "@/entities/auth";
import type { Response } from "@/shared/helpers/query";

export type GetSkillsListResponse = Response<ProfileSkill[]>;

export interface GetSkillsListRequestParams {
	page?: number;
	limit?: number;
	specializations?: number[];
	authorId?: string;
	title?: string;
}
