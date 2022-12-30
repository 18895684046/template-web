import { defineStore } from 'pinia';
import { getNavbar } from "@/http/service/navbar"
export interface Navbar {
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


export const useNavbarStore = defineStore({
    id: 'navbar',
    state: (): Navbar => ({
        home: {
            name: "",
            url: "",
            image: "",
            disabled: false,
        },
        menu: [],
    }),
    getters: {
        getMenu(): MenuItem[] {
            return this.menu;
        },
    },
    actions: {
        setMenu(menu: MenuItem[]) {
            this.menu = menu;
        },
        setHome(home: Home) {
            this.home = home;
        },
        async getNav() {
            try {
                const response = await getNavbar();
                console.log("response", response)
                const { menu, home } = response;
                this.setMenu(menu);
                this.setHome(home);
                return Promise.resolve(response);
            } catch (e) {
                return Promise.reject(e);
            }
        }
    },
});
