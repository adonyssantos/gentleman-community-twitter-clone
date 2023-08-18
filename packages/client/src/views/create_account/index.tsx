import React from 'react';
import { Container } from '@root/client/components/Container';
import { useAuthContext } from '@root/client/context/auth.context';
import { useI18n } from '@root/client/hooks/useI18n';
import { useZodForm } from '@root/client/hooks/useZodForm';
import { signupSchema } from '@root/shared/validators/user.model';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { View } from '@universal-labs/primitives';
import { z } from 'zod';

export const CreateAccountView = () => {
  const { t } = useI18n(['create_account']);
  type Schema = z.infer<typeof signupSchema>;
  const form = useZodForm({ schema: signupSchema });
  const auth = useAuthContext();

  const onSubmit = async ({ name, email, password }: Schema) =>
    await auth?.singup({ name, email, password });
  return (
    <Container className='flex h-screen max-w-md justify-between md:justify-center'>
      <View className='flex-between mt-5 flex flex-col space-y-10'>
        <Typography variant='h4' className='!font-bold'>
          {t('title')}
        </Typography>
        <View className='flex flex-col gap-2'>
          <TextInput label={t('name')} control={form.control} formField='name' />
          <TextInput label={t('email')} control={form.control} formField='email' />
          <TextInput label={t('password')} control={form.control} formField='password' />
        </View>
      </View>

      <Button variant='contained' className='!p-4' onPress={form.handleSubmit(onSubmit)}>
        {t('next')}
      </Button>
    </Container>
  );
};
