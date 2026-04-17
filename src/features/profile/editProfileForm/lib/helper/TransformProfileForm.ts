import type { FullProfile } from "@/entities/profile";
import type { EditProfileFormValues } from "../../model/types/types";

export const TransformProfileToForm = (profile: FullProfile) => ({
	username: profile.username,
	specialization: profile.activeProfile.specializationId,
	email: profile.email,
	location: profile.city,
	aboutMe: profile.activeProfile.description,
	skills: profile.activeProfile.profileSkills,
	socialNetworks: profile.activeProfile.socialNetwork,
});

export const TransformFormToProfile = (
	values: EditProfileFormValues,
	profile: FullProfile,
) => ({
	id: profile.activeProfile.id,
	specializationId: values.specialization,
	description: values.aboutMe || "",
	socialNetwork: values.socialNetworks ?? [],
	profileSkills: values.skills?.map((s) => String(s.id)) ?? [],
	user: {
		id: profile.id,
		username: values.username,
		email: values.email || "",
		city: values.location || "",
		birthday: profile.birthday || null,
		address: "",
		avatarUrl: values.image === null ? "" : profile.avatarUrl || "",
		avatarImage: values.image === null ? null : values.image,
	},
});
