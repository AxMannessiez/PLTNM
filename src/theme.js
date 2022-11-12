import {extendTheme, withDefaultColorScheme} from '@chakra-ui/react'
import '@fontsource/source-sans-pro'
import '@fontsource/space-grotesk'

const theme = extendTheme(
    {
        colors: {
            pltnm: {
                primary: '#F32346',
                secondary: '#0D1CEB',
                background: '#EBE1D4',
                text: '#171717'
            },
            spotify: {
                green: '#1DB954',
                black: '#191414'
            }
        },
        fonts: {
            heading: `'Source Sans Pro', sans-serif`,
            body: `'Space Grotesk', sans-serif`,
        },
    },
    withDefaultColorScheme({
        colorScheme: 'primary'
    }),
)

export default theme;