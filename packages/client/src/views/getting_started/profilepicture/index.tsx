import { useState } from 'react';
import { Container } from '@root/client/components/Container';
import { useI18n } from '@root/client/hooks/useI18n';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { ImagePicker } from '@root/ui/forms/ImagePicker';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { View } from '@universal-labs/primitives';

export function ProfilePictureView() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { t } = useI18n(['gettingStarted', 'common']);

  return (
    <Container className='flex min-h-screen max-w-md justify-between'>
      <View className='flex flex-col space-y-5'>
        <View className='items-center p-4'>
          <ColorLogo size='small' />
        </View>
        <View className='flex flex-col gap-2'>
          <Typography variant='h4' className='!font-bold '>
            {t('pickProfilePicture.title')}
          </Typography>
          <Typography variant='subtitle1' className='text-slate-700'>
            {t('pickProfilePicture.subtitle')}
          </Typography>
        </View>
        {/* image component */}
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
