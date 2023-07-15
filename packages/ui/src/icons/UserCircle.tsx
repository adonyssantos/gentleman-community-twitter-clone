import Svg, { Path, SvgProps } from 'react-native-svg';

export const UserCircle = (props: SvgProps) => {
  return (
    <Svg width={200} height={200} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        opacity={0.5}
        d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z'
        fill='#1C274C'
      />
      <Path
        d='M16.807 19.011A8.46 8.46 0 0112 20.5a8.46 8.46 0 01-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15c3.09 0 4.59.83 5.318 2.163.35.643.093 1.433-.511 1.848zM12 12a3 3 0 100-6 3 3 0 000 6z'
        fill='#1C274C'
      />
    </Svg>
  );
};
