import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { BrandGithubIcon } from '@root/ui/icons/BrandGithubIcon';
import { BrandGoogleIcon } from '@root/ui/icons/BrandGoogleIcon';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { P, View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function SignInView() {
  const { t } = useI18n(['signin']);

  const form = useForm({
    defaultValues: {
      alternative: '',
    },
  });

  return (
    <>
      <View className='m-auto max-h-full max-w-lg flex-1 items-center justify-center p-5'>
        <ColorLogo size='small' />
      </View>
      <View className='mt-10 flex h-full flex-1 items-center justify-center'>
        <View className='flex flex-col space-y-6 p-4'>
          <Typography variant='h4' className='!font-bold'>
            {t('title')}
          </Typography>
          <Button variant='outlined' startIcon={<BrandGoogleIcon />}>
            {t('with_google')}
          </Button>
          <Button variant='outlined' startIcon={<BrandGithubIcon />}>
            {t('with_gitHub')}
          </Button>
          <Typography variant='subtitle1' className='flex w-full flex-row'>
            <P className='my-2 h-0.5 flex-1 self-center bg-slate-400' />
            <P className='flex justify-center px-4'>{t('or')}</P>
            <P className='my-2 h-0.5 flex-1 self-center bg-slate-400' />
          </Typography>
          <TextInput
            label={t('alternative')}
            className='my-4'
            control={form.control}
            formField='alternative'
          />
          <Button variant='contained'>{t('next')}</Button>
          <Button variant='outlined'>{t('forgot_password')}</Button>
          <View className='flex flex-row gap-1 py-8'>
            <Typography variant='subtitle1' className='text-slate-700'>
              {t('do_not_have_an_account')}
            </Typography>
            <Typography variant='subtitle1' color={'primary'}>
              {t('sign_up')}
            </Typography>
          </View>
        </View>
      </View>
    </>
  );
}
