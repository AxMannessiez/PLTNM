/* eslint-disable react/prop-types, react/destructuring-assignment, react/jsx-props-no-spreading */

import {
  Box,
  Center,
  Heading,
  Icon,
  useBoolean,
  VStack,
} from '@chakra-ui/react';

// Used to add a border to light backgrounds
const getLightnessFromHex = hexColor => {
  let rgb;
  if (hexColor.length === 4) {
    rgb = hexColor.slice(1, 4).split('');
    rgb.forEach((p, i) => {
      rgb[i] = parseInt(rgb[i].repeat(2), 16);
    });
  } else {
    rgb = hexColor.slice(1, 7).match(/.{2}/g);
    rgb.forEach((p, i) => {
      rgb[i] = parseInt(rgb[i], 16);
    });
  }
  return ((1 / 510) * (Math.max(...rgb) + Math.min(...rgb))).toFixed(2);
};

export default function MusicServiceLogoCard(props) {
  const [cardHovered, setCardHovered] = useBoolean();

  const kebabName = props.name ? props.name.toLower : undefined;
  const whiteBorder = '1px #E0E0E0 solid';
  const borderAttribute =
    getLightnessFromHex(props.bg) > 0.8 ? whiteBorder : undefined;

  return (
    <VStack
      key={`${kebabName}-login`}
      maxW={props.maxW}
      spacing={props.nameMargin}
      onMouseEnter={setCardHovered.on}
      onMouseLeave={setCardHovered.off}
      transform={cardHovered ? 'scale(1.1)' : undefined}
      transition="transform .2s ease"
      as="a"
      href={props.link}
      title={cardHovered ? undefined : `${props.name} Login`}
    >
      <Box w="100%">
        <Center
          bg={props.bg}
          border={borderAttribute}
          w="100%"
          h="100%"
          sx={{
            aspectRatio: '1',
            borderRadius: '1rem',
            '@media screen and (min-width: 30em)': {
              aspectRatio: '1.85',
              borderRadius: '0.75rem',
            },
          }}
          boxShadow={cardHovered ? '0 10px 20px 0px rgba(0, 0, 0, .2)' : 'base'}
          transition="box-shadow .1s ease-out, aspect-ratio .4s ease, border-radius .4s ease"
          overflow="hidden"
        >
          {props.icon ? (
            <Icon
              viewBox={props.icon.viewBox}
              color={props.icon.color}
              h="unset"
              w="100%"
              maxW={props.icon.maxW ? props.icon.maxW : '33%'}
              maxH="calc(1.85 * 33%)"
              transform={{ base: 'scale(1.85)', sm: 'scale(1)' }}
              transition="transform .4s ease"
              {...props.icon.otherProps}
            >
              <path fill="currentColor" d={props.icon.d} />
            </Icon>
          ) : (
            <Center
              h="100%"
              w="100%"
              transform={{ base: 'scale(1.6)', sm: 'scale(1)' }}
              transition="transform .4s ease"
            >
              {props.svg}
            </Center>
          )}
        </Center>
      </Box>
      <Heading
        as="h5"
        fontSize={{ base: 'xs', sm: 'sm' }}
        textAlign="center"
        fontFamily="body"
        fontWeight="normal"
        sx={{
          whiteSpace: 'nowrap',
          visibility: cardHovered ? 'visible' : 'hidden',
        }}
        opacity={cardHovered ? 1 : 0}
        transition="opacity .1s ease"
        noOfLines={1}
      >
        {props.name}
      </Heading>
    </VStack>
  );
}
