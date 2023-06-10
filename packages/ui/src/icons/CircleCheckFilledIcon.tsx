import Svg, { Path, type SvgProps } from 'react-native-svg';

export function CircleCheckFilledIcon(props: SvgProps) {
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
      <Path
        d='M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-1.293 5.953a1 1 0 00-1.32-.083l-.094.083L11 12.585l-1.293-1.292-.094-.083a1 1 0 00-1.403 1.403l.083.094 2 2 .094.083a1 1 0 001.226 0l.094-.083 4-4 .083-.094a1 1 0 00-.083-1.32z'
        fill='currentColor'
        stroke='none'
      />
    </Svg>
  );
}
