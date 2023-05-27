import { cva } from 'class-variance-authority';

export const typography = cva('', {
  variants: {
    color: { 
      primary: 'text-primary-500', 
      inherit: '' 
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
      inherit: '',
    },
    variant: {
      body1: 'text-base font-normal',
      body2: 'text-sm font-normal',
      h1: 'text-6xl font-light',
      h2: 'text-5xl font-light',
      h3: 'text-4xl font-normal',
      h4: 'text-2xl font-normal',
      h5: 'text-xl font-normal',
      h6: 'text-base font-medium',
      overline: 'text-10px leading-3 font-normal uppercase',
      caption: 'text-xs font-normal',
      subtitle1: 'text-base font-normal',
      subtitle2: 'text-sm font-medium',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: 'inherit',
    align: 'inherit',
  },
});
