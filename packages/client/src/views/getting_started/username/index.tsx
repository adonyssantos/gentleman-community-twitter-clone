import { useState } from 'react';
import { Container } from '@root/client/components/Container';
import { HeaderPage } from '@root/client/components/HeaderPage';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { TextInput } from '@root/ui/forms/TextInput';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

const suggest = [
  'defaultUserName',
  'username1',
  'username2',
  'username3',
  'username4',
  'username5',
];

export function UsernameView() {
  const { t } = useI18n(['gettingStarted', 'common']);

  const form = useForm({
    defaultValues: {
      username: suggest[0],
    },
  });

  const [showMore, setShowMore] = useState(false);

  const itemsRendered = showMore ? suggest.slice(1, 6) : suggest.slice(1, 3);

  const isSuggested = form.watch('username') === suggest[0];

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
