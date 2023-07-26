import { CameraIcon } from '@root/ui/icons/CameraIcon';
import { UserCircle } from '@root/ui/icons/UserCircle';
import { Pressable, Span, View } from '@universal-labs/primitives';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker/build/ImagePicker.types';

interface ContainerProps {
  onPress: () => void;
}

interface Props {
  onFinish: (uri: string) => void;
}

const ImageContainer = ({ onPress }: ContainerProps) => {
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

export const ImagePicker = ({ onFinish }: Props) => {
  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      onFinish(uri);
    }
  };

  return (
    <>
      <ImageContainer onPress={pickImage} />
    </>
  );
};
