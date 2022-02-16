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
                fontFamily: 'Zen Maru Gothic, sans-serif'
            },
            h1: {
                fontFamily: 'Irish Grover, cursive'
            }
        },
    },
});

export default theme;
