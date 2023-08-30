import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, InriaSans_300Light, InriaSans_400Regular, InriaSans_700Bold } from '@expo-google-fonts/inria-sans'
import AppNavigator from './src/routes';
import ConversorMoedas from './src/screens/Conversor Moedas';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    InriaSans_300Light,
    InriaSans_400Regular,
    InriaSans_700Bold
  })

    if (!fontsLoaded && !fontError) {
      return null;
    }
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

