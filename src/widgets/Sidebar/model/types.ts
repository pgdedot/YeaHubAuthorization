export type MenuItem = SingleMenuItem | CategoryMenuItem;

export interface SingleMenuItem {
	type: 'single';
	route: string;
	title: string;
	icon: string;
	notifications?: number;
	isAdmin?: boolean;
}

export interface CategoryMenuItem {
	type: 'category';
	title: string;
	icon: string;
	notifications?: number;
	elements: {
		title: string;
		icon: string;
		route: string;
	}[];
}