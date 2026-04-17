import type { Tab } from "@/shared/ui/Tabs";
import AboutMeTabForm from "../ui/AboutMeTabForm/AboutMeTabForm";
import PersonalInfoTabForm from "../ui/PersonalInfoTabForm/PersonalInfoTabForm";
import SkillsTabForm from "../ui/SkillsTabForm/SkillsTabForm";
import type { SocialNetwork } from "@/entities/profile";

export const tabs: Tab<string>[] = [
	{
		id: "personal-info",
		label: "Персональная информация",
		Component: PersonalInfoTabForm,
	},
	{
		id: "about-me",
		label: "Обо мне",
		Component: AboutMeTabForm,
	},
	{
		id: "skills",
		label: "Навыки",
		Component: SkillsTabForm,
	},
];

export const socialNetworks: SocialNetwork[] = [
	{ title: "Instagram", code: "instagram" },
	{ title: "Linkedin", code: "linkedin" },
	{ title: "Twitter", code: "twitter" },
	{ title: "Facebook", code: "facebook" },
	{ title: "GitHub", code: "github" },
	{ title: "Behance", code: "behance" },
	{ title: "WhatsApp", code: "whatsapp" },
	{ title: "Telegram", code: "telegram" },
	{ title: "Youtube", code: "youtube" },
];
