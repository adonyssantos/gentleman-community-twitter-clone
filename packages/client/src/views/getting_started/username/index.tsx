import { useState } from 'react';
import { Container } from '@root/client/components/Container';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

const suggest = ['username', 'username1', 'username2', 'username3', 'username4', 'username5'];

export function UsernameView() {
  const { t } = useI18n(['username']);

  const form = useForm({
    defaultValues: {
      username: '',
    },
  });

  const [showMore, setShowMore] = useState(false);

  const itemsRendered = showMore ? suggest.slice(0, 4) : suggest.slice(0, 2);

  const renderItems = itemsRendered.map((item, index) => {
    return (
      <Button
        key={index}
        variant='link'
        textCase='lowercase'
        className='!m-0 !p-0'
        onPress={() => {
          form.setValue('username', item);
        }}
      >
        {index === itemsRendered.length - 1 ? `@${item}` : `@${item},`}
      </Button>
    );
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
          label='Username'
          control={form.control}
          formField='username'
          defaultValue={suggest[0]}
        />
        <View className='grid grid-flow-row grid-cols-4 grid-rows-2'>{renderItems}</View>
        <Button
          color={'primary'}
          align={'left'}
          variant={'link'}
          textCase='lowercase'
          className='!p-0'
          onPress={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? t('showLess') : t('showMore')}
        </Button>
      </View>
      <Button variant='contained'>{t('next')}</Button>
    </Container>
  );
}
