
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface MenuContextProps {
    openMenu: boolean;
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext({} as MenuContextProps)

export function MenuContextProvider({ children }: { children: JSX.Element }) {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <MenuContext.Provider value={{
            openMenu,
            setOpenMenu
        }}>
            {children}
        </MenuContext.Provider>
    )
}

export function useMenuContext() {
    return useContext(MenuContext)
}