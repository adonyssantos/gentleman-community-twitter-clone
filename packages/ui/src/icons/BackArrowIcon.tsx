import Svg, { Path, type SvgProps } from 'react-native-svg';

export function BackArrowIcon(props: SvgProps) {
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
      <Path d='M5 12h14M5 12l6 6M5 12l6-6' />
    </Svg>
  );
}
