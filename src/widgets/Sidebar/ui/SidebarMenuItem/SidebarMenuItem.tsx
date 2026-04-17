import type { MenuItem } from "../../model/types"
import SidebarMenuItemCategory from "./SidebarMenuItemCategory"
import SidebarMenuItemSingle from "./SidebarMenuItemSingle"

interface Props {
  menuItem: MenuItem
}

const SidebarMenuItem = ({menuItem}: Props) => {
  switch(menuItem.type){
    case 'category':
      return (
        <SidebarMenuItemCategory menuItem={menuItem}/>
      )
    case 'single': 
      return (
        <SidebarMenuItemSingle menuItem={menuItem}/>
      )
  }
}

export default SidebarMenuItem
