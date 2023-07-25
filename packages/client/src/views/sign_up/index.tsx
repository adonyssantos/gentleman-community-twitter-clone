import { Container } from '@root/client/components/Container';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { BrandGithubIcon } from '@root/ui/icons/BrandGithubIcon';
import { BrandGoogleIcon } from '@root/ui/icons/BrandGoogleIcon';
import { View } from '@universal-labs/primitives';
import Link from 'next/link';

export function SignUpView() {
  const { t } = useI18n(['signup']);

  return (
    <Container className='flex min-h-screen justify-center'>
      <View className='flex flex-col'>
        <Typography variant='h4' className='!font-bold'>
          {t('title')}
        </Typography>
        <Button variant='outlined' startIcon={<BrandGoogleIcon />}>
          {t('with_google')}
        </Button>
        <Button variant='outlined' startIcon={<BrandGithubIcon />}>
          {t('with_gitHub')}
        </Button>
        <View className='mx-1 my-2 flex flex-row items-center'>
          <View className='h-0.5 flex-1 bg-slate-400' />
          <Typography className='flex px-4'>{t('or')}</Typography>
          <View className='h-0.5 flex-1 bg-slate-400' />
        </View>
        <Button variant='contained'>{t('create_account')}</Button>
        <View className='flex flex-row justify-center p-1'>
          <Typography variant='caption' className=''>
            {t('agree')}
            <Typography variant='caption' color={'primary'}>
              {t('link_terms')}
            </Typography>
            {t('and')}
            <Typography variant='caption' color={'primary'}>
              {t('link_privacy')}
            </Typography>
            {t('include')}
            <Typography variant='caption' color={'primary'}>
              {t('cookie_use')}
            </Typography>
          </Typography>
        </View>
        <Typography variant='subtitle1'>
          {t('already')}
          <Link href={'sign_in'} className='text-primary-500'>
            {t('log_in')}
          </Link>
        </Typography>
      </View>
    </Container>
  );
}
