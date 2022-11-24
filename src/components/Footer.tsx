import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Footer() {

    const [currentYear, setCurrentYear] = useState(0)

    useEffect(() => {
        const currentYear = new Date().getFullYear()
        setCurrentYear(currentYear)
    })

    return (
        <Flex
            align="center"
            justify="center"
            h="20vh"
            p={10}
            borderTop="1px"
            borderTopColor="quaternary"
        >
            {currentYear} - Lucas Cardoso
        </Flex>
    )
}