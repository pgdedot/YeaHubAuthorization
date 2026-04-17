import { type Key } from "react";
import type { Tab } from "./types";
import styles from "./Tabs.module.css";
import clsx from "clsx";

interface Props<T> {
	tabs: Tab<T>[];
	activeTabId: string;
	setActiveTab: (id: T) => void;
}

const Tabs = <T,>({ tabs, activeTabId, setActiveTab }: Props<T>) => {
	return (
		<ul className={styles.tabsWrapper}>
			{tabs.map((item) => (
				<li
					key={item.id as Key}
					onClick={() => setActiveTab(item.id)}
					className={clsx(styles.tabItem, {
						[styles.tabItemActive]: activeTabId === item.id,
					})}
				>
					<p
						className={clsx(styles.tabItemLabel, {
							[styles.tabItemActiveLabel]: activeTabId === item.id,
						})}
					>
						{item.label}
					</p>
				</li>
			))}
		</ul>
	);
};

export default Tabs;
