import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'quinary',
                color: "white"
            },
            svg: {
                strokeWidth: "1px"
            },
            '.swiper-pagination-bullet': {
                background: "quaternary",
                border: "1px",
                borderColor: "primary",
                height: "1rem",
                width: "1rem"
            },
            "*": {
                scrollBehavior: "smooth"
            },
            "::-webkit-scrollbar-track": {
                background: "transparent"
            },
            "::-webkit-scrollbar-thumb": {
                background: "primary",
                borderRadius: "10px"
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: "primary",
                filter: "brightness(0.8)"
            }
        },
        fonts: {
            heading: 'Poppins',
            body: 'Poppins'
        },

    },
    colors: {
        white: "#F3F3F3",
        primary: "#00FFD1",
        secondary: "#2DB8E7",
        tertiary: "#6753C7",
        quaternary: "#37324A",
        quinary: "#282537",
    }
})