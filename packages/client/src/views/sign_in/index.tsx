import { Container } from '@root/client/components/Container';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Divider } from '@root/ui/common/Divider';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { BrandGithubIcon } from '@root/ui/icons/BrandGithubIcon';
import { BrandGoogleIcon } from '@root/ui/icons/BrandGoogleIcon';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export function SignInView() {
  const { t } = useI18n(['signin']);

  const form = useForm({
    defaultValues: {
      alternative: '',
    },
  });

  return (
    <Container className='flex min-h-screen max-w-md justify-between'>
      <View className='items-center p-4'>
        <ColorLogo size='small' />
      </View>
      <View className='flex flex-col space-y-5'>
        <Typography variant='h4' className='!font-bold '>
          {t('title')}
        </Typography>
        <View className='flex flex-col'>
          <View className='flex flex-col gap-2'>
            <Button variant='outlined' startIcon={<BrandGoogleIcon />}>
              {t('with_google')}
            </Button>
            <Button variant='outlined' startIcon={<BrandGithubIcon />}>
              {t('with_gitHub')}
            </Button>
          </View>
          <Divider>
            <Typography className='flex px-4'>{t('or')}</Typography>
          </Divider>
          <View className='flex flex-col gap-2'>
            <TextInput
              label={t('alternative')}
              className=''
              control={form.control}
              formField='alternative'
            />
            <Button variant='contained'>{t('next')}</Button>
            <Button variant='outlined'>{t('forgot_password')}</Button>
          </View>
        </View>
        <View className='flex flex-row gap-1 pt-4'>
          <Typography variant='subtitle1' className='text-slate-700'>
            {t('do_not_have_an_account')}
            <Link href={'sign_up'} className='text-primary-500'>
              {t('sign_up')}
            </Link>
          </Typography>
        </View>
      </View>
      <View className='' />
    </Container>
  );
}
