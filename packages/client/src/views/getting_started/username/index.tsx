import { Container } from '@root/client/components/Container';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function UsernameView() {
  const { t } = useI18n(['username']);

  const form = useForm({
    defaultValues: {
      alternative: '',
    },
  });
  const suggest = [
    'username',
    'username1',
    'username2',
    'username3',
    'username4',
    'username5',
  ];

  const itemsRendered = suggest.slice(1, 3);

  const renderItems = itemsRendered.map((item, index) => {
    if (index === itemsRendered.length - 1) {
      return (
        <Typography variant='subtitle1' color='primary' key={index}>
          @{item}
        </Typography>
      );
    } else {
      return (
        <Typography variant='subtitle1' color='primary' key={index}>
          {`@${item}, `}
        </Typography>
      );
    }
  });

  return (
    <Container className='flex min-h-screen max-w-md justify-between'>
      <View className='flex flex-col space-y-5'>
        <View className='items-center p-4'>
          <ColorLogo size='small' />
        </View>
        <View className='flex flex-col gap-2'>
          <Typography variant='h4' className='!font-bold '>
            {t('title')}
          </Typography>
          <Typography variant='subtitle1' className='text-slate-700'>
            {t('subtitle')}
          </Typography>
        </View>
        <TextInput
          label={suggest[0]}
          className=''
          control={form.control}
          formField='username'
        />
        <View className='flex flex-row justify-start'>{renderItems}</View>
        <Button color={'primary'} align={'left'} variant={'link'} textCase='lowercase'>
          {t('show_more')}
        </Button>
      </View>
      <Button variant='contained'>{t('next')}</Button>
    </Container>
  );
}
