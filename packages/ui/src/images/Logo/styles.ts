import { cva } from 'class-variance-authority';

export const logo = cva('h-auto', {
  variants: {
    size: {
      small: 'w-8',
      medium: 'w-12',
      large: 'w-16',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
