import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'quaternary',
                color: "white"
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
        tertiary: "#37324A",
        quaternary: "#282537",
    }
})