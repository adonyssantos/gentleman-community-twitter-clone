import { View } from 'react-native';
import { Button } from '@root/ui/common/Button';
import { H1, P } from '@universal-labs/primitives';

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  // TODO: Add React Query Provider
  return (
    <View>
      <H1>Hello Gentleman Community!!</H1>
      <Button intent='primary' size='medium'>
        <P>Boton</P>
      </Button>
      {children}
    </View>
  );
}
