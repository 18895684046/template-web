import { ref } from 'vue'
import { getNavbar } from "@/http/service/navbar"

export interface Navbar {
  data: Data;
}

interface Data {
  home: Home;
  menu: MenuItem[];
}

interface Home {
  name: string;
  url: string;
  image: string;
  disabled: boolean;
}

interface MenuItem {
  disabled: boolean;
  name: string;
  submenu?: SubMenuItem[];
  url: string;
}
interface SubMenuItem {
  name: string;
  top: number;
  subServices: SubServiceItem[]
}

interface SubServiceItem {
  name: string;
  url: string;
  disabled: boolean;
}

const useNavbar = () => {
  const navbar = ref<Navbar>()

  // 获取所有服务信息
  getNavbar().then(
    res => {
      navbar.value = res
    }
  )

  return navbar
}

export default useNavbar
