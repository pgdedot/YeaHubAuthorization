import type { ComponentType } from "react";

export interface Tab<T> {
	id: T;
	label: string;
	Component?: ComponentType;
}
