import { cva } from 'class-variance-authority';

export const button = cva('rounded-full text-center transition-all duration-200 my-2 mx-1', {
  variants: {
    color: {
      primary: 'bg-primary-500 text-white border-transparent hover:bg-primary-600',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-4',
    },
    variant: {
      contained: '',
      outlined: 'bg-transparent',
      text: 'bg-transparent text-primary-500',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'text',
      className: 'hover:bg-primary-50',
    },
    {
      color: 'primary',
      variant: 'outlined',
      className:
        'border-primary-500 text-primary-500 border-[1px] hover:bg-primary-50 hover:text-primary-600',
    },
    {
      color: 'primary',
      variant: 'contained',
      className: 'hover:bg-primary-600',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    variant: 'text',
  },
});
