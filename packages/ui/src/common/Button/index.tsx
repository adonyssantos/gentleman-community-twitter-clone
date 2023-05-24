import type { PressableProps } from 'react-native';
import { Pressable } from '@universal-labs/primitives';
import type { VariantProps } from 'class-variance-authority';
import { button } from './styles';

export interface ButtonProps extends PressableProps, VariantProps<typeof button> {
  className?: string;
}

export function Button({ className, color, size, variant, ...props }: ButtonProps) {
  return <Pressable className={button({ color, size, variant, className })} {...props} />;
}
