import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm } from 'react-hook-form';
import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';
import { useI18n } from './useI18n';

export function useZodForm<TSchema extends z.ZodType>({
  schema,
  ...props
}: Omit<UseFormProps<TSchema['_input']>, 'resolver'> & {
  schema: TSchema;
}) {
  const { t, ready } = useI18n(['zod', 'validations']);
  useEffect(() => {
    if (ready) {
      z.setErrorMap(makeZodI18nMap({ t: t, ns: 'zod' }));
    }
  }, [ready, t]);
  const form = useForm<TSchema['_input']>({
    ...props,
    resolver: zodResolver(schema, undefined),
  });

  return form;
}
