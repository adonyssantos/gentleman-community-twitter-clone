import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { View } from '@universal-labs/primitives';
import type { VariantProps } from 'class-variance-authority';
import { logo } from './styles';

export interface LogoContainerProps extends ViewProps, VariantProps<typeof logo> {
  children?: ReactNode;
  className?: string;
}

export function LogoContainer({ className, size, children, ...props }: LogoContainerProps) {
  return (
    <View className={logo({ size, className })} {...props}>
      {children}
    </View>
  );
}
