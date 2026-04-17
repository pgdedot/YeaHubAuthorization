import type { MenuItem } from "../../model/types"
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem"
import styles from './SidebarMenuList.module.css'

interface Props {
  menuItems: MenuItem[];
}

const SidebarMenuList = ({menuItems}: Props) => {

  return (
    <nav className={styles.navMenu}>
      {menuItems.map((menuItem, index) => 
        <SidebarMenuItem
          menuItem={menuItem}
          key={index}
        />
      )}
    </nav>
  )
}

export default SidebarMenuList
