import { SafeAreaView, Text } from 'react-native';
import { AppProvider } from '@root/client/providers/AppProvider';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 50,
      }}
    >
      <AppProvider>
        <Text>Hello from React Native!!</Text>
      </AppProvider>
    </SafeAreaView>
  );
}
