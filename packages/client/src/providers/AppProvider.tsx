import { View } from '@universal-labs/primitives';

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  // TODO: Add React Query Provider
  return <View className='m-5 flex-1'>{children}</View>;
}
