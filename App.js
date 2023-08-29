import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, InriaSans_300Light, InriaSans_400Regular, InriaSans_700Bold } from '@expo-google-fonts/inria-sans'

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
    <View style={styles.container}>
      <Text style={{ fontFamily: "InriaSans_700Bold" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
});
