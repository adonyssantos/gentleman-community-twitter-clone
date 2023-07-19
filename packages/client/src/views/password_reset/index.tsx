import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { P, View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function PasswordResetView() {
  const { t } = useI18n(['password_reset']);

  const form = useForm({
    defaultValues: {
      alternative: '',
    },
  });

  return (
    <View className='h-max w-full'>
      <View className='m-5 flex h-full w-full items-center justify-center'>
        <ColorLogo size='small' />
      </View>
      <View className='mt-10 flex h-full flex-1 items-center justify-center'>
        <View className='flex flex-col space-y-6 p-4'>
          <Typography variant='h4' className='!font-bold'>
            {t('title')}
          </Typography>
          <Typography variant='subtitle1' className='flex w-full flex-row'>
            <P className='flex justify-center px-4'>{t('description')}</P>
          </Typography>
          <Button variant='contained'>{t('next')}</Button>
        </View>
      </View>
    </View>
  );
}
