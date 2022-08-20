import { Box } from "@chakra-ui/react";
import { LinkProps } from "next/link";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { useMenuContext } from "../contexts/MenuContext";
import { theme } from "../styles/theme";
import { useCurrentSectionContext } from "./CurrentSection/Context";

interface ActiveLinksProps extends LinkProps {
    href: string;
    children: ReactElement;
}

interface CustomLinkProps {
    isActive: boolean;
}

const CustomLink = styled.span<CustomLinkProps>`
    .menuLink{

        color: ${theme.colors?.white};

        position: relative;

        ::after{
            transition: width ease-in 0.2s;

            content: '';
            width: ${(props: any) => props.isActive ? "140%" : "0%"};
            height: 1px;
    
            position: absolute;
            left: -20%;
            bottom: -10px;

            background: ${theme.colors?.primary};
        }
    }
`

export function ActiveLink({ children, href }: ActiveLinksProps) {

    const { currentSection } = useCurrentSectionContext()
    const [isActive, setIsActive] = useState(false)
    const { setOpenMenu } = useMenuContext()

    const linkHref = String(href).split("#")[1]

    function handleScrollTo(event: any, id: string) {
        event.preventDefault()
        const offsetTop = document.getElementById(id)?.offsetTop ?? 0
        const offset = 120
        scrollTo(0, offsetTop - offset)
    }

    useEffect(() => {
        linkHref === currentSection && setIsActive(true)
        linkHref !== currentSection && setIsActive(false)

    }, [currentSection])

    return (
        <CustomLink isActive={isActive} onClick={(e: any) => handleScrollTo(e, linkHref)}>
            <Box onClick={e => e.preventDefault()}>
                {cloneElement(children, {
                    onClick: () => setOpenMenu(false),
                    className: "menuLink"
                })
                }
            </Box>
        </CustomLink>
    )
}