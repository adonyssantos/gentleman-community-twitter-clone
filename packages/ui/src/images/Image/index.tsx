import type { ImageProps as ReactNativeImageProps } from 'react-native';
import { Image as ReactNativeImage } from '@universal-labs/primitives';

export interface ImageProps extends ReactNativeImageProps {
  className?: string;
}

export function Image({ ...props }: ImageProps) {
  return <ReactNativeImage {...props} />;
}
