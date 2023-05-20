import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { Span, View } from '@universal-labs/primitives';
import clsx from 'clsx';

export interface FieldSetProps extends ViewProps {
  focused: boolean;
  label: string;
  children: ReactNode;
  hasValue: boolean;
  error?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export function FieldSet({
  focused,
  label,
  children,
  hasValue,
  error,
  isDisabled,
  isInvalid,
  ...props
}: FieldSetProps) {
  return (
    <View
      className={clsx(
        'relative my-2 w-full items-start justify-end',
        'h-16 overflow-hidden rounded-lg bg-gray-100 pt-2',
        isInvalid ? 'border-error border-[1px]' : '',
        isDisabled ? 'opacity-70' : '',
      )}
    >
      <Span
        className={clsx(
          'absolute top-0 left-4',
          '-z-10 items-start transition-all',
          isInvalid ? 'text-error' : 'text-gray-400',
          focused || hasValue
            ? 'translate-y-[5px] -translate-x-[10px] scale-90'
            : 'trnaslate-x-[15px] translate-y-[20px] scale-100',
        )}
      >
        {label}
      </Span>
      <View className='h-full w-full'>{children}</View>
    </View>
  );
}
