import { SafeAreaView, Text } from 'react-native';
import { AppProvider } from '@root/client/providers/AppProvider';

export default function App() {
  return (
    <SafeAreaView>
      <AppProvider>
        <Text>Hello from React Native!!</Text>
      </AppProvider>
    </SafeAreaView>
  );
}
