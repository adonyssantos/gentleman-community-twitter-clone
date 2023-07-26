import { ReactNode } from 'react';
import { P, View } from '@universal-labs/primitives';
import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { divider } from './styles';

export interface DividerProps extends VariantProps<typeof divider> {
  className?: string;
  children?: ReactNode;
  text?: string;
  textAling?: 'left' | 'center' | 'right';
  direction?: 'horizontal' | 'vertical';
}

export function Divider({ text, textAling, ...props }: DividerProps) {
  return (
    <View className={clsx('mx-1 my-0 flex flex-row items-center', { textAling })} {...props}>
      <View className={clsx('h-0.5 flex-1 bg-gray-400', { textAling })} />
      <P className={clsx('flex px-4')}>{text}</P>
      <View className='h-0.5 flex-1 bg-gray-400' />
    </View>
  );
}
