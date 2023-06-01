import type { ImageProps, ImageSourcePropType } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { AvatarContainer } from './AvatarContainer';
import { AvatarImg } from './AvatarImg';
import { AvatarLetter } from './AvatarLetter';
import { avatar } from './styles';
import { stringAvatar } from './utilities';

export interface AvatarProps extends VariantProps<typeof avatar>, Omit<ImageProps, 'source'> {
  source?: ImageSourcePropType;
  variant?: 'circular' | 'rounded' | 'square';
  alt: string;
  className?: string;
}

export function Avatar({ source, alt, className, variant, ...props }: AvatarProps) {
  if (!source) {
    return (
      <AvatarContainer>
        <AvatarLetter {...stringAvatar(alt)} className={avatar({ variant, className })} />
      </AvatarContainer>
    );
  }

  return (
    <AvatarContainer>
      <AvatarImg
        source={source}
        alt={alt}
        className={avatar({ variant, className })}
        {...props}
      />
    </AvatarContainer>
  );
}
