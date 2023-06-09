import Svg, { Path, type SvgProps } from 'react-native-svg';

export function CameraIcon(props: SvgProps) {
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
      <Path d='M12 20H5a2 2 0 01-2-2V9a2 2 0 012-2h1a2 2 0 002-2 1 1 0 011-1h6a1 1 0 011 1 2 2 0 002 2h1a2 2 0 012 2v3.5M16 19h6M19 16v6' />
      <Path d='M9 13a3 3 0 106 0 3 3 0 00-6 0' />
    </Svg>
  );
}
