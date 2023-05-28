import { Image } from '@universal-labs/primitives';
import clsx from 'clsx';
import type { AvatarProps } from '.';

export interface AvatarImgProps extends Omit<AvatarProps, 'variant'> {
  source: Required<AvatarProps>['source'];
}

export function AvatarImg({ alt, className, ...props }: AvatarImgProps) {
  return <Image alt={alt} className={clsx('flex-1 object-cover', className)} {...props} />;
}
