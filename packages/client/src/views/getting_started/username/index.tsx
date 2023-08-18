import { useState } from 'react';
import { Container } from '@root/client/components/Container';
import { HeaderPage } from '@root/client/components/HeaderPage';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
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
      <View className='flex flex-col space-y-4'>
        <View className='items-center p-4'>
          <ColorLogo size='small' />
        </View>
        <HeaderPage
          title={t('pickUsername.title')}
          subtitle={t('pickUsername.subtitle')}
          className='flex flex-col gap-2'
        />
        <TextInput
          label={t('pickUsername.label')}
          control={form.control}
          formField='username'
        />
        <View className='flex flex-row flex-wrap gap-2'>
          {itemsRendered.map((item, index) => {
            return (
              <Button
                key={index}
                variant='link'
                className='!p-0'
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
          textCase='normal-case'
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
