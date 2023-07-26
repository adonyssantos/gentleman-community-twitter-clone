import { ReactNode } from 'react';
import { View } from '@universal-labs/primitives';
import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { divider } from './styles';

export interface DividerProps extends VariantProps<typeof divider> {
  className?: string;
  children?: ReactNode;
}

export function Divider({ children, ...props }: DividerProps) {
  return (
    <>
      <View className={clsx('mx-1 my-0 flex flex-row items-center')} {...props}>
        <View className={clsx('h-0.5 flex-1 bg-gray-400')} />
        {children ? children : null}
        <View className='h-0.5 flex-1 bg-gray-400' />
      </View>
    </>
  );
}
