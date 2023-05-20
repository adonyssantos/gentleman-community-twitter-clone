import { cva } from 'class-variance-authority';

export const textInput = cva('outline-none w-full border-none px-4 pt-2', {
  variants: {
    color: {
      primary: '',
      secondary: '',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-4',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
});
