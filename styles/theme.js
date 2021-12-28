import { color, extendTheme } from "@chakra-ui/react";

const colors = {
    dark: "#2A0E02",
    light: "#fff",
    highlight: "#F7B05B",
};

const theme = extendTheme({
    colors: { ...colors },
    styles: {
        global: {
            "html, body": {
                color: colors.light,
                backgroundColor: colors.dark,
                lineHeight: "tall",
                fontFamily: "Montserrat Alternates, sans-serif",
            },
            h1: {
                fontSize: "3.5rem",
            }
        },
    },
});

export default theme;
