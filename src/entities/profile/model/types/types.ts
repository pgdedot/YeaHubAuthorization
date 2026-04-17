import type { Profile, UserProfile } from "@/entities/auth/model/types";

export interface FullProfile extends UserProfile {
	activeProfile: Profile;
}

export interface ProfileState {
	fullProfile: FullProfile | null;
}

export type SocialNetworkCode =
	| "instagram"
	| "linkedin"
	| "twitter"
	| "github"
	| "behance"
	| "whatsapp"
	| "telegram"
	| "facebook"
	| "youtube";

export interface SocialNetwork {
	code: SocialNetworkCode;
	title: string;
}
