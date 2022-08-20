
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface CurrentSectionProps {
    setCurrentSection: Dispatch<SetStateAction<string>>;
    currentSection: string;
}

export const CurrentSectionContext = createContext({} as CurrentSectionProps)

export function CurrentSectionContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

    const [currentSection, setCurrentSection] = useState<string>("")

    useEffect(() => {
        const firstSection = document
            .querySelectorAll('.current-section-node')[0].id

        setCurrentSection(firstSection)
    }, [])

    return (
        <CurrentSectionContext.Provider value={{
            currentSection,
            setCurrentSection
        }}>
            {children}
        </CurrentSectionContext.Provider>
    )
}

export function useCurrentSectionContext() {
    return useContext(CurrentSectionContext)
}