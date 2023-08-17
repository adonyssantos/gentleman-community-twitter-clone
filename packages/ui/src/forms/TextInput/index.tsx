import type { TextInputProps as NativeTextInputProps } from 'react-native';
import { useOnFocus } from '@root/ui/hooks/useOnFocus';
import { TextInput as UniversalTextInput, View } from '@universal-labs/primitives';
import type { VariantProps } from 'class-variance-authority';
import { Control, useController } from 'react-hook-form';
import { FieldSet } from '../FieldSet';
import { textInput } from './styles';

export interface TextInputProps extends NativeTextInputProps, VariantProps<typeof textInput> {
  className?: string;
  control: Control<any>;
  formField: string;
  label: string;
}

export function TextInput({
  className,
  control,
  formField,
  editable = true,
  label,
  ...props
}: TextInputProps) {
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
        <UniversalTextInput
          className={textInput({
            className,
          })}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={editable ? field.onChange : () => {}}
          autoCapitalize='none'
          value={field.value ?? ''}
          {...props}
        />
      </View>
    </FieldSet>
  );
}
