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

export function Divider({
  // className,
  // direction,
  // textAling,
  text,
  children,
  ...props
}: DividerProps) {
  return (
    <View className={clsx('mx-1 my-0 flex flex-row items-center')} {...props}>
      <View className={clsx('h-0.5 flex-1 bg-gray-400')} {...props} />
      {children ? (
        children
      ) : (
        <P className={clsx('flex px-4')} {...props}>
          {text}
        </P>
      )}
      <View className={clsx('h-0.5 flex-1 bg-gray-400')} {...props} />
    </View>
  );
}
