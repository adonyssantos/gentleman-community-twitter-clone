import Svg, { Path, type SvgProps } from 'react-native-svg';

export function CloseIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <Path d='M0 0h24v24H0z' stroke='none' />
      <Path d='M18 6L6 18M6 6l12 12' />
    </Svg>
  );
}
