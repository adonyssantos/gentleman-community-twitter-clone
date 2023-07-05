import { useOnFocus } from '@root/ui/hooks/useOnFocus';
import { View } from '@universal-labs/primitives';
import type { VariantProps } from 'class-variance-authority';
import { Control, useController } from 'react-hook-form';
import { FieldSet } from '../FieldSet';
import { datePicker } from './styles';

export interface DatePickerProps extends VariantProps<typeof datePicker> {
  className?: string;
  control: Control<any>;
  formField: string;
  label: string;
}

export function DatePicker({
  className,
  control,
  formField,
  editable,
  label,
  ...props
}: DatePickerProps) {
  const { field, fieldState } = useController({
    name: formField,
    control,
  });
  const { focused, onBlur, onFocus } = useOnFocus();
  const isInvalid = !!fieldState.error;

  return (
    <FieldSet
      focused={focused}
      hasValue={!!field.value}
      error={fieldState.error?.message}
      isDisabled={!editable}
      isInvalid={isInvalid}
      label={label}
    >
      <View className='h-full flex-row'>
        
      </View>
    </FieldSet>
  );
}
