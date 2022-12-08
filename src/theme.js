import {extendTheme, withDefaultColorScheme} from '@chakra-ui/react'
import '@fontsource/source-sans-pro'
import '@fontsource/space-grotesk'
import '@fontsource/lato'
import { StepsStyleConfig } from "chakra-ui-steps";

//TODO use text color by default

const colors = {
    pltnm: {
        primary: '#F32346',
        secondary: '#0D1CEB',
        background: '#EBE1D4',
        text: '#171717',
        primaryValues: {
            300: '#F32346',
            500: '#F32346'
        },
    }
};

const fonts = {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Source Sans Pro', sans-serif`,
    numbers: `'Lato', sans-serif`
};

const CustomSteps = {
    ...StepsStyleConfig,
    baseStyle: (props) => {
        return {
            ...StepsStyleConfig.baseStyle(props),
            step: {
                ...StepsStyleConfig.baseStyle(props).step,
                transition: 'opacity .3s ease',
                '&:hover': {
                    cursor: 'default'
                },
                '&.clickable:hover': {
                    cursor: 'pointer',
                    opacity: 0.8
                }
            },
            stepIconContainer: {
                ...StepsStyleConfig.baseStyle(props).stepIconContainer,
                background: 'white',
                borderColor: colors.pltnm.primary,
                opacity: 0.8,
                transition: 'opacity .2s ease',
                '&[aria-current=step]': {
                    background: 'white',
                    borderColor: colors.pltnm.primary,
                    opacity: 1,
                    borderWidth: '3px',
                    '& span': {
                        color: colors.pltnm.primary,
                        fontWeight: 'bold'
                    }
                },
                '&[data-highlighted]': {
                    background: colors.pltnm.primary,
                    borderColor: colors.pltnm.primary,
                    opacity: 1,
                },
                '& span': {
                    fontFamily: fonts.numbers
                },
                '&[data-clickable]': {
                    '&:hover': {
                        borderColor: colors.pltnm.primary,
                    }
                }
            },
            connector: {
                ...StepsStyleConfig.baseStyle(props).connector,
                borderColor: '#e8e8e8',
                '&[data-highlighted]': {
                    borderColor: '#e8e8e8',
                    '&:after': {
                        content: "''",
                        borderColor: colors.pltnm.primary,
                        borderTopWidth: 2,
                        position: 'absolute',
                        top: '-2px',
                        left: 0,
                        bottom: 0,
                        height: 2,
                        width: '100%',
                        animation: 'progress ease .3s',
                    }
                },
            },
            label: {
                ...StepsStyleConfig.baseStyle(props).label,
                fontFamily: fonts.body,
                color: colors.pltnm.text,
            }
        };
    },
};

const theme = extendTheme(
    {
        colors: colors,
        fonts: fonts,
        components: {
            Steps: CustomSteps,
        },
    },
    withDefaultColorScheme({
        colorScheme: 'primary'
    })
)

export default theme;