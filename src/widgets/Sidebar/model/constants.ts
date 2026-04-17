import type { MenuItem } from "./types";
import homeIcon from "@/assets/Home.svg";
import profile from "@/assets/UserProfile.svg";
import book from "@/assets/Book.svg";
import knowledgeBase from "@/assets/KnowledgeBase.svg";
import analytics from "@/assets/Analytics.svg";

export const menuItems: MenuItem[] = [
	{
		type: "single",
		route: "/",
		title: "Главная",
		icon: homeIcon,
	},
	{
		type: "single",
		route: "/profile",
		title: "Мой профиль",
		icon: profile,
	},
	{
		type: "category",
		title: "Обучение",
		icon: book,
		elements: [
			{
				icon: "/",
				route: "/",
				title: "Собеседования",
			},
			{
				icon: "/",
				route: "/",
				title: "Задачи",
			},
		],
	},
	{
		type: "category",
		title: "База знаний",
		icon: knowledgeBase,
		elements: [
			{
				icon: "/",
				route: "/",
				title: "Ресурсы",
			},
			{
				icon: "/",
				route: "/",
				title: "Вопросы",
			},
			{
				icon: "/",
				route: "/",
				title: "Вопросы",
			},
		],
	},
	{
		type: "single",
		route: "/",
		title: "Аналитика",
		icon: analytics,
	},
];
