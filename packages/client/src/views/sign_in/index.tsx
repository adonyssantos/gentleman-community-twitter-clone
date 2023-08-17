import { useState } from 'react';
import { Container } from '@root/client/components/Container';
import { useI18n } from '@root/client/hooks/useI18n';
import { useZodForm } from '@root/client/hooks/useZodForm';
import { Button } from '@root/ui/common/Button';
import { Divider } from '@root/ui/common/Divider';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { BrandGithubIcon } from '@root/ui/icons/BrandGithubIcon';
import { BrandGoogleIcon } from '@root/ui/icons/BrandGoogleIcon';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';
import Link from 'next/link';
import { z } from 'zod';
import Alternative from './alternative';

export function SignInView() {
  const { t } = useI18n(['signin']);

  const [isAlternative, setIsAlternative] = useState<boolean>(false);

  const [altEmail, setAltEmail] = useState<string>('');

  const altSchema = z.object({
    alternative_email: z.string().email(),
  });

  type AltSchema = z.infer<typeof altSchema>;

  const form = useZodForm({ schema: altSchema });

  const alternativeSubmit = (data: AltSchema) => {
    setIsAlternative(true);
    setAltEmail(data.alternative_email);
  };
  return (
    <Container className='flex min-h-screen max-w-md justify-between'>
      <View className='items-center p-4'>
        <ColorLogo size='small' />
      </View>
      <View className='flex flex-col space-y-5'>
        <Typography variant='h4' className='!font-bold '>
          {t('title')}
        </Typography>
        {!isAlternative ? (
          <View className='flex flex-col'>
            <View className='flex flex-col gap-2'>
              <Button variant='outlined' startIcon={<BrandGoogleIcon />}>
                {t('with_google')}
              </Button>
              <Button variant='outlined' startIcon={<BrandGithubIcon />}>
                {t('with_gitHub')}
              </Button>
            </View>
            <Divider>{t('or')}</Divider>
            <View className='flex flex-col gap-2'>
              <TextInput
                label={t('alternative_email')}
                control={form.control}
                formField='alternative_email'
              />
              <Button variant='contained' onPress={form.handleSubmit(alternativeSubmit)}>
                {t('next')}
              </Button>

              <Button variant='outlined'>{t('forgot_password')}</Button>
            </View>
          </View>
        ) : (
          <Alternative email={altEmail} />
        )}

        <View className='flex flex-row gap-1 pt-4'>
          <Typography variant='subtitle1' className='text-slate-700'>
            {t('do_not_have_an_account')}
            <Link href={'sign_up'} className='text-primary-500 ml-2'>
              <Typography variant='subtitle1' color={'primary'}>
                {t('sign_up')}
              </Typography>
            </Link>
          </Typography>
        </View>
      </View>
      <View />
    </Container>
  );
}
