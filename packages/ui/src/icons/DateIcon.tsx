import Svg, { Path, type SvgProps } from 'react-native-svg';

export function DateIcon(props: SvgProps) {
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
      <Path d='M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2zM16 3v4M8 3v4M4 11h16' />
      <Path d='M11 16a1 1 0 102 0 1 1 0 10-2 0' />
    </Svg>
  );
}
