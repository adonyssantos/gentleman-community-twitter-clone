import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from '@root/client/providers/AppProvider.native';

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 50,
        }}
      >
        <NavigationContainer>
          <Text>Hello from React Native!!</Text>
        </NavigationContainer>
      </SafeAreaView>
    </AppProvider>
  );
}
