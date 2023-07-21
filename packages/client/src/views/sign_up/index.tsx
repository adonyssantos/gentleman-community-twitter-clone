import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { BrandGithubIcon } from '@root/ui/icons/BrandGithubIcon';
import { BrandGoogleIcon } from '@root/ui/icons/BrandGoogleIcon';
import { P, View } from '@universal-labs/primitives';
import Link from 'next/link';

export function SignUpView() {
  const { t } = useI18n(['signup']);

  return (
    <>
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
          <Button variant='contained'>{t('create_account')}</Button>
          <Typography variant='caption' className=''>
            {t('agree')}
            <Link href={'terms'} className='text-primary-500'>
              {t('link_terms')}
            </Link>
            {t('and')}
            <Link href={'privacy'} className='text-primary-500'>
              {t('link_privacy')}
            </Link>
            {t('include')}
            <Link href={'cookies'} className='text-primary-500'>
              {t('cookie_use')}
            </Link>
          </Typography>
          <Typography variant='subtitle1'>
            {t('already')}
            <Link href={'login'} className='text-primary-500'>
              {t('log_in')}
            </Link>
          </Typography>
        </View>
      </View>
    </>
  );
}
