import { cva } from 'class-variance-authority';

export const avatar = cva('', {
  variants: {
    variant: {
      circular: 'rounded-full',
      rounded: 'rounded-md',
      square: 'rounded-none',
    },
  },
  defaultVariants: {
    variant: 'circular',
  },
});
