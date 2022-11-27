import {Box, VStack, Center, Icon, Heading} from "@chakra-ui/react";


// Used to add a border to light backgrounds
function getLightnessFromHex(hexColor) {
    let rgb;
    if(hexColor.length === 4){
        rgb = hexColor.slice(1,4).split("");
        rgb.forEach(function(p, i) {
            rgb[i] = parseInt(rgb[i].repeat(2), 16);
        });
    } else {
        rgb = hexColor.slice(1,7).match(/.{2}/g);
        rgb.forEach(function(p, i) {
            rgb[i] = parseInt(rgb[i], 16);
        });
    }
    return (1/510 * (Math.max(...rgb) + Math.min(...rgb))).toFixed(2);
}

export function MusicServiceLogoCard(props) {

    const kebabName = props.name ? props.name.toLower : undefined;
    const whiteBorder = '1px #E0E0E0 solid';
    let borderAttribute = getLightnessFromHex(props.bg) > 0.8 ? whiteBorder : undefined;

    return (
        <VStack key={kebabName + "-login"} w={props.w} spacing={props.nameMargin}>
            <Box w='100%'>
                <Center bg={props.bg} w='100%' h='100%' border={borderAttribute} borderRadius='8% / calc(8% * 1.85)' sx={{aspectRatio: "1.85"}}>
                    {
                        props.icon ?
                            <Icon viewBox={props.icon.viewBox} color={props.icon.color} h='unset' w='100%' maxW={props.icon.maxW ? props.icon.maxW : '33%'} maxH='calc(1.85 * 33%)'>
                                <path
                                    fill='currentColor'
                                    d={props.icon.d}
                                />
                            </Icon>
                            :
                            <>{props.svg}</>
                    }
                </Center>
            </Box>
            <Heading as='h5' size='sm' textAlign='center' fontFamily={'body'} fontWeight={'normal'}>
                {props.name}
            </Heading>
        </VStack>
    )
}