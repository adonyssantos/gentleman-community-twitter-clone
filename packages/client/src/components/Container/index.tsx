import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { View } from '@universal-labs/primitives';
import clsx from 'clsx';

export interface ContainerProps extends ViewProps {
  children: ReactNode;
  className: string;
}
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <View className={clsx('m-auto max-w-lg flex-1 p-5', className)} {...props}>
      {children}
    </View>
  );
}
