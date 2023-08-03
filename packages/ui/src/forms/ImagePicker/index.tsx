import * as React from 'react';
import { CameraIcon } from '@root/ui/icons/CameraIcon';
import { UserCircle } from '@root/ui/icons/UserCircle';
import { Pressable, Span, View } from '@universal-labs/primitives';
import { manipulateAsync } from 'expo-image-manipulator';
import { ImageResult, SaveFormat } from 'expo-image-manipulator/build/ImageManipulator.types';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker/build/ImagePicker.types';

interface ContainerProps {
  onPress: () => void;
}

interface ImagePickerProps {
  onFinish: ({ blob, file }: PickProps) => void;
}

export interface PickProps {
  blob: Blob;
  file: ImageResult;
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

export const ImagePicker = ({ onFinish }: ImagePickerProps) => {
  const onPress = async () => {
    const res = await pickImage();
    onFinish(res);
  };
  const pickImage = async () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<{ blob: Blob; file: ImageResult }>(async (resolve, reject) => {
      let result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      const sizedImage = await manipulateAsync(
        result.assets![0].uri,
        [
          {
            resize: { width: 800 },
          },
        ],
        {
          format: SaveFormat.PNG,
          compress: 1,
        },
      );

      if (sizedImage.uri) {
        const response = await fetch(sizedImage.uri);
        const blob = await response.blob();
        resolve({ blob, file: sizedImage });
      } else {
        reject(false);
      }
    });
  };
  return (
    <>
      <ImageContainer onPress={onPress} />
    </>
  );
};
