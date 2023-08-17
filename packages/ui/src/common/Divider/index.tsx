import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { View } from '@universal-labs/primitives';
import clsx from 'clsx';
import { Typography } from '../Typography';

export interface DividerProps extends ViewProps {
  className?: string;
  children?: ReactNode;
}

export function Divider({ children, ...props }: DividerProps) {
  return (
    <>
      <View className={clsx('mx-1 my-0 flex flex-row items-center')} {...props}>
        <View className={clsx('h-0.5 flex-1 bg-gray-400')} />
        {children ? (
          <View className='px-2'>
            <Typography>{children}</Typography>
          </View>
        ) : null}
        <View className='h-0.5 flex-1 bg-gray-400' />
      </View>
    </>
  );
}
