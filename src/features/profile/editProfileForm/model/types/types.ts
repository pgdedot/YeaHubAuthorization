import type { ProfileSkill } from "@/entities/auth";
import type { SocialNetwork } from "@/entities/profile";

export interface EditProfileFormValues {
	image?: string;
	username: string;
	specialization: number;
	email: string;
	location?: string;
	skillLevel?: string;
	socialNetworks?: SocialNetwork[];
	aboutMe?: string;
	skills?: ProfileSkill[];
}

export interface EditUserRequestData {
	id: string;
	username: string;
	email: string;
	city: string;
	birthday: string | null;
	address: string;
	avatarUrl: string;
	avatarImage?: string | null;
}

export interface EditProfileRequestData {
	id: string;
	specializationId: number;
	description: string;
	socialNetwork: SocialNetwork[];
	profileSkills: string[];
	user: EditUserRequestData;
}

type AddNewProfileData = Omit<EditProfileRequestData, "user" | "id">;

export interface AddNewProfileRequestData extends AddNewProfileData {
	userId: string;
}

export interface SelectedSkill {
	id: number;
	title: string;
	imageSrc: string;
}