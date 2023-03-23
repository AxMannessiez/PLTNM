import { Button } from '@chakra-ui/react';

const variantStyles = {
  base: {
    px: 4,
    _hover: {
      opacity: '.8',
    },
  },
  solid: {
    bg: 'pltnm.primary',
    color: 'white',
  },
  outline: {
    variant: 'outline',
    borderColor: 'pltnm.primary',
    color: 'pltnm.primary',
    fontWeight: 'normal',
  },
};

export default function PltnmButton(props) {
  return props.variant === 'outline' ? (
    <Button {...variantStyles.base} {...variantStyles.outline} {...props} />
  ) : (
    <Button {...variantStyles.base} {...variantStyles.solid} {...props} />
  );
}
