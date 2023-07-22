import type { ReactNode } from 'react';
import { View } from '@universal-labs/primitives';
import clsx from 'clsx';

export interface ContainerProps {
  children: ReactNode;
  className: string;
}
export function Container({ children, className }: ContainerProps) {
  return <View className={clsx('m-auto max-w-lg flex-1 p-5', className)}>{children}</View>;
}
