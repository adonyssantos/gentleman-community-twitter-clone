import { useState } from 'react';
import { CameraIcon } from '@root/ui/icons/CameraIcon';
import { UserCircle } from '@root/ui/icons/UserCircle';
import { Image } from '@root/ui/images/Image';
import { Pressable, Span, View } from '@universal-labs/primitives';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker/build/ImagePicker.types';

interface Props {
  onPress: () => void;
}

const ImageContainer = ({ onPress }: Props) => {
  return (
    <View style={{ width: 200, height: 200 }}>
      <Pressable className='flex h-full w-full items-center justify-center' onPress={onPress}>
        <Span className='absolute inset-0 z-0 flex-1 justify-center'>
          <UserCircle />
        </Span>
        <Span className='z-10 rounded-full bg-slate-700 p-3'>
          <CameraIcon color='#e2e8f0' />
        </Span>
      </Pressable>
    </View>
  );
};

export const ImagePicker = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <ImageContainer onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </>
  );
};
