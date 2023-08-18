import { useState } from 'react';
import { Container } from '@root/client/components/Container';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function UsernameView() {
  const { t } = useI18n(['gettingStarted', 'common']);

  // TODO: fetch this from trpc and user context
  const defaultUsername = 'defaultUserName';
  const suggest = ['username1', 'username2', 'username3', 'username4', 'username5'];

  const form = useForm({
    defaultValues: {
      username: defaultUsername,
    },
  });

  const [showMore, setShowMore] = useState(false);

  const itemsRendered = showMore ? suggest.slice(0, 5) : suggest.slice(0, 2);

  const isSuggested =
    form.watch('username').toLocaleLowerCase() === defaultUsername.toLocaleLowerCase();

  return (
    <Container className='flex min-h-screen max-w-md justify-between'>
      <View className='flex flex-col space-y-5'>
        <View className='items-center p-4'>
          <ColorLogo size='small' />
        </View>
        <View className='flex flex-col gap-2'>
          <Typography variant='h4' className='!font-bold '>
            {t('pickUsername.title')}
          </Typography>
          <Typography variant='subtitle1' className='text-slate-700'>
            {t('pickUsername.subtitle')}
          </Typography>
        </View>
        <TextInput
          label={t('pickUsername.label')}
          control={form.control}
          formField='username'
          defaultValue={defaultUsername}
        />
        <View className='grid grid-flow-row grid-cols-4'>
          {itemsRendered.map((item, index) => {
            return (
              <Button
                key={index}
                variant={'link'}
                textCase='lowercase'
                onPress={() => {
                  form.setValue('username', item);
                }}
              >
                {index === itemsRendered.length - 1 ? `@${item}` : `@${item},`}
              </Button>
            );
          })}
        </View>
        <Button
          color={'primary'}
          align={'left'}
          variant={'link'}
          textCase='capitalize'
          className='!p-0'
          onPress={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? t('common:showLess') : t('common:showMore')}
        </Button>
      </View>
      <Button variant={isSuggested ? 'outlined' : 'contained'} textCase='normal-case'>
        {isSuggested ? t('common:skip') : t('common:next')}
      </Button>
    </Container>
  );
}
