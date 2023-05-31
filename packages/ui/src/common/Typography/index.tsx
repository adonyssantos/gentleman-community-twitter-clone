import type { ReactNode } from 'react';
import type { TextProps } from 'react-native';
import { H1, H2, H3, H4, H5, H6, P, Span } from '@universal-labs/primitives';
import type { VariantProps } from 'class-variance-authority';
import { typography } from './styles';

export interface TypographyProps extends TextProps, VariantProps<typeof typography> {
  className?: string;
  children?: ReactNode;
}

const createText = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'body1':
    case 'body2':
      return P;
    case 'overline':
    case 'caption':
      return Span;
    case 'h1':
      return H1;
    case 'h2':
      return H2;
    case 'h3':
      return H3;
    case 'h4':
      return H4;
    case 'h5':
      return H5;
    case 'subtitle1':
    case 'subtitle2':
    case 'h6':
      return H6;
    default:
      throw new Error('Variant doesnt support');
  }
};

export function Typography({
  className,
  color,
  align,
  variant = 'body1',
  ...props
}: TypographyProps) {
  const TextElement = createText(variant);

  return (
    <TextElement className={typography({ color, align, variant, className })} {...props} />
  );
}
