import { NavLink } from "react-router-dom";
import type { SingleMenuItem } from "../../model/types";
import styles from './SidebarMenuItem.module.css'

interface Props {
  menuItem: SingleMenuItem;
}


const SidebarMenuItemSingle = ({menuItem}: Props) => {
  return (
    <div className={styles.menuWrapper}>
      <img src={menuItem.icon} alt="" />
      <NavLink to={menuItem.route} className={styles.singleMenuLink}>{menuItem.title}</NavLink>
    </div>
  )
}

export default SidebarMenuItemSingle
