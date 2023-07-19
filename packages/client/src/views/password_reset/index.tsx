import { Container } from '@root/client/components/Container';
import { Header } from '@root/client/components/Header';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
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
    <Container>
      <Header />
      <View className='mt-10 flex h-full flex-1 items-center justify-center'>
        <View className='flex flex-col space-y-6 p-4'>
          <Typography variant='h4' className='!font-bold'>
            {t('title')}
          </Typography>
          <Typography variant='subtitle1' className='flex w-full flex-row'>
            <P className='flex justify-center'>{t('description')}</P>
          </Typography>
          <TextInput
            label={t('alternative')}
            className='my-4'
            control={form.control}
            formField='alternative'
          />
          <Button variant='contained'>{t('next')}</Button>
        </View>
      </View>
    </Container>
  );
}
