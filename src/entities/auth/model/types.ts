import type { SocialNetwork } from "@/entities/profile";

export interface LoginBodyRequest {
	username: string;
	password: string;
}

export interface SingUpBodyRequest {
	username: string;
	password: string;
	email: string;
	phone?: string;
	country?: string;
	city?: string;
	birthday?: string;
	address?: string;
	avatarUrl?: string;
	refId?: string;
}

export interface User {
	id: string;
	username: string;
	country: string;
	city: string;
	email: string;
	birthday: string | null;
	address: string;
	avatarUrl: string;
	createdAt: string;
	updatedAt: string;
	isVerified?: boolean;
	telegramUsername: string | null;
}

interface AuthResponse {
	access_token: string;
	user: User;
}

export type SignUpResponse = AuthResponse;

export type LoginResponse = AuthResponse;

interface Permission {
	id: number;
	name: string;
}

interface Role {
	id: number;
	name: string;
	permissions: Permission[];
}

interface CreatedBy {
	id: string;
	username: string;
}

export interface Specialization {
	id: number;
	title: string;
	slug: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
	createdBy: CreatedBy;
}

export interface ProfileSkill {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
	specializations: Specialization[];
	createdBy: CreatedBy;
}

export interface Profile {
	id: string;
	userId: string;
	profileType: number;
	specializationId: number;
	markingWeight: number;
	description: string;
	image_src: string;
	isActive: boolean;
	ratingPoints: number;
	socialNetwork: SocialNetwork[];
	profileSkills: ProfileSkill[];
}

export interface UserProfile {
	id: string;
	username: string;
	email: string;
	phone: string;
	country: string;
	city: string;
	birthday: string;
	address: string;
	avatarUrl: string;
	updatedAt: string;
	createdAt: string;
	userRoles: Role[];
	isVerified: boolean;
	isEmailNotificationsEnable: boolean;
	telegramUsername: string;
	profiles: Profile[];
}
