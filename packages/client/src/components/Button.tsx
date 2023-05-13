import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(['your', 'base', 'classes'], {
  variants: {
    intent: {
      primary: ['your', 'primary', 'classes'],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export const button = (variants: ButtonVariants) => twMerge(buttonVariants(variants));
