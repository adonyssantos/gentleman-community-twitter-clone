import { useState } from 'react';
import { Container } from '@root/client/components/Container';
import { HeaderPage } from '@root/client/components/HeaderPage';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { ImagePicker } from '@root/ui/forms/ImagePicker';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';

export function ProfilePictureView() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { t } = useI18n(['getting_started', 'common']);

  return (
    <Container className='flex min-h-screen max-w-md justify-between'>
      <View className='flex flex-col space-y-4'>
        <View className='items-center p-4'>
          <ColorLogo size='small' />
        </View>
        <HeaderPage
          title={t('pickProfilePicture.title')}
          subtitle={t('pickProfilePicture.subtitle')}
          className='flex flex-col gap-2'
        />
        <View className='flex w-full flex-col items-center pt-20'>
          <ImagePicker onFinish={(uri) => setImageUri(uri)} />
        </View>
      </View>
      <Button variant={!imageUri ? 'outlined' : 'contained'}>
        {!imageUri ? t('common:skip') : t('common:finish')}
      </Button>
    </Container>
  );
}
