import { color, extendTheme } from '@chakra-ui/react'

const colors = {
    dark: '#1F1300',
    light: '#fff',
    highlight: '#F7B05B'
}
// const colors = {
//     dark: '#3A2E39',
//     light: '#fff',
//     highlight: '#F15152'
// }

const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                color: colors.light,
                backgroundColor: colors.dark,
                lineHeight: "tall",
                fontFamily: 'Montserrat Alternates, sans-serif',
            },
            a: {
                color: colors.highlight,
            },
            h1: {
                fontSize: '3.5rem',
            },
        },
    },
})

export default theme