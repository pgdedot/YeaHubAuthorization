import { NavLink } from "react-router-dom";
import type { CategoryMenuItem } from "../../model/types";
import styles from "./SidebarMenuItem.module.css";
import arrow from "@/assets/Arrow.svg";
import { useState } from "react";
import clsx from "clsx";

interface Props {
	menuItem: CategoryMenuItem;
}

const SidebarMenuItemCategory = ({ menuItem }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={clsx(styles.categoriesWrapper, {
				[styles.categoriesWrapperOpen]: isOpen,
			})}
			onClick={() => setIsOpen((prev) => !prev)}
		>
			<span className={styles.categoriesMenuWrapper}>
				<img src={menuItem.icon} />
				<p className={styles.singleMenuLink}>{menuItem.title}</p>
				<img
					src={arrow}
					alt="arrow"
					className={clsx(styles.arrow, { [styles.closeArrow]: isOpen })}
					onClick={() => setIsOpen((prev) => !prev)}
				/>
			</span>
			<div className={clsx(styles.itemsWrapper, { [styles.hidden]: !isOpen })}>
				{menuItem.elements.map((item, index) => (
					<div key={index} className={styles.categoriesLinkWrapper}>
						<img src={item.icon} />
						<NavLink to={item.route} className={styles.singleMenuLink}>
							{item.title}
						</NavLink>
					</div>
				))}
			</div>
		</div>
	);
};

export default SidebarMenuItemCategory;
