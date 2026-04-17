import { AppLogo } from "@/shared/ui/AppLogo";
import SidebarMenuList from "../SidebarMenuList/SidebarMenuList";
import styles from "./Sidebar.module.css";

import logo from "@/assets/logoPurple.png";
import { menuItems } from "../../model/constants";

const Sidebar = () => {
	return (
		<aside className={styles.container}>
			<div className={styles.asideHeader}>
				<AppLogo
					height="33px"
					width="33px"
					navigateTo="/"
					textClassName="mainLayoutText"
					logoSrc={logo}
				/>
			</div>

			<div className={styles.navContainer}>
				<SidebarMenuList menuItems={menuItems} />
			</div>
		</aside>
	);
};

export default Sidebar;
