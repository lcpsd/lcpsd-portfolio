import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'
import { useCurrentSectionContext } from './Context'

interface SectionProps extends FlexProps {
    children:
    | ReactNode
    | JSX.Element[]
    | string
    | string[];
}

export function CurrentSection() {

    const { currentSection, setCurrentSection } = useCurrentSectionContext()

    useEffect(() => {
        const allSections: NodeListOf<HTMLElement> = document.querySelectorAll('.current-section-node')

        console.log(allSections)

        window.onscroll = () => {

            allSections.forEach(section => {

                const sectionOffsetTop = section.offsetTop
                const sectionOffsetBottom = sectionOffsetTop + section.offsetHeight
                const windowOffsetTop = window.scrollY + 200

                if (sectionOffsetBottom >= windowOffsetTop && sectionOffsetTop <= windowOffsetTop) {
                    if (currentSection !== section.id && section.id) {
                        setCurrentSection(section.id)
                    }
                }
            })
        }
    }, [])

    return (<></>)
}

export function Section({ children, id, ...rest }: SectionProps) {

    const [isCurrent, setIsCurrent] = useState<boolean>()

    const { currentSection } = useCurrentSectionContext()

    useEffect(() => {
        currentSection === id ? setIsCurrent(true) : setIsCurrent(false)
    }, [currentSection])

    return (
        <Flex
            transition="opacity ease-in-out 1s"
            opacity={isCurrent ? 1 : 0}
            id={id}
            className='current-section-node'
            direction="column"
            h="100vh"
            align="center"
            justify="center"
            py={10}
            zIndex="10"
            {...rest}
        >
            {children}
        </Flex>
    )
}