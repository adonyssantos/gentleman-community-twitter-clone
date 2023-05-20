import type { PressableProps } from 'react-native';
import { Pressable } from '@universal-labs/primitives';
import type { VariantProps } from 'class-variance-authority';
import { button } from './styles';

export interface ButtonProps extends PressableProps, VariantProps<typeof button> {
  className?: string;
}

export function Button({ className, intent, size, ...props }: ButtonProps) {
  return <Pressable className={button({ intent, size, className })} {...props} />;
}
