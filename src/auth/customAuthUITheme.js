const customTheme = {
    default: {
        colors: {
            // = var(--chakra-colors-gray-100)
            defaultButtonBackgroundHover: '#F3F4F6',
        }
    }
}
// Only way to access hover prop

// Inline css for everything else to use chakra variables
const containerStyle = {
    width:  'var(--chakra-sizes-xs)',
    gap: '.5rem'
}
const buttonStyle = {
    height: 'var(--chakra-sizes-10)',
    minWidth: 'var(--chakra-sizes-10)',
    paddingInlineStart: 'var(--chakra-space-4)',
    paddingInlineEnd: 'var(--chakra-space-4)',
    border: '1px solid var(--chakra-colors-gray-200)',
    borderRadius: 'var(--chakra-radii-md)',
    color: 'inherit',
    fontFamily: 'var(--chakra-fonts-body)',
    fontSize: 'var(--chakra-fontSizes-md)',
    transitionProperty: 'var(--chakra-transition-property-common)',
    transitionDuration: 'var(--chakra-transition-duration-normal)',
}


export { customTheme, containerStyle, buttonStyle };
