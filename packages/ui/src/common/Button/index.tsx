import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';
import { Pressable, Span } from '@universal-labs/primitives';
import type { VariantProps } from 'class-variance-authority';
import { Typography } from '../Typography';
import { button } from './styles';

export interface ButtonProps extends PressableProps, VariantProps<typeof button> {
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  textCase?: 'uppercase' | 'lowercase' | 'normal-case' | 'capitalize';
}

export function Button({
  className,
  color,
  size,
  variant,
  children,
  align,
  textCase = 'uppercase',
  endIcon,
  startIcon,
  ...props
}: ButtonProps) {
  return (
    <Pressable className={button({ color, size, variant, align, className })} {...props}>
      {startIcon && <Span className='mr-2 '>{startIcon}</Span>}
      <Typography variant='button' color='inherit' align={align} className={textCase}>
        {children}
      </Typography>
      {endIcon && <Span className='ml-2'>{endIcon}</Span>}
    </Pressable>
  );
}
