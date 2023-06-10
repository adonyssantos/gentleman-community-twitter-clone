import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { View } from '@universal-labs/primitives';
import clsx from 'clsx';

interface AvatarContainerProps extends ViewProps {
  children: ReactNode;
  className?: string;
}

export function AvatarContainer({ children, className, ...props }: AvatarContainerProps) {
  return (
    <View className={clsx('h-12 w-12', 'm-1', className)} {...props}>
      {children}
    </View>
  );
}
