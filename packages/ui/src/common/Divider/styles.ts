import { cva } from 'class-variance-authority';

export const divider = cva('flex flex-row items-center justify-center', {
  variants: {
    direction: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
    textAling: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    variant: {
      fullWidth: {
        horizontal: 'w-full',
        vertical: 'h-full',
      },
      inset: {
        horizontal: 'w-1/2',
        vertical: 'h-1/2',
      },
      middle: {
        horizontal: 'w-1/4',
        vertical: 'h-1/4',
      },
    },
  },
  compoundVariants: [
    {
      direction: 'horizontal',
      textAling: 'left',
      className: 'mx-0',
    },
    {
      direction: 'horizontal',
      textAling: 'center',
      className: 'mx-auto',
    },
    {
      direction: 'horizontal',
      textAling: 'right',
      className: 'mx-0',
    },
    {
      direction: 'vertical',
      textAling: 'left',
      className: 'my-0',
    },
    {
      direction: 'vertical',
      textAling: 'center',
      className: 'my-auto',
    },
    {
      direction: 'vertical',
      textAling: 'right',
      className: 'my-0',
    },
  ],
  defaultVariants: {
    direction: 'horizontal',
    textAling: 'center',
    variant: 'fullWidth',
  },
});
