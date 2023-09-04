import React from 'react';
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_400Regular,
  InriaSans_700Bold
} from '@expo-google-fonts/inria-sans';
import { StyleSheet, Text } from 'react-native';

export function TextLight({ text, style }) {
  const [fontsLoaded, fontError] = useFonts({
    InriaSans_300Light
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Text style={[styles.fontLight, {...style}]}>{text}</Text>;
}

export function TextRegular({ text, style }) {
  const [fontsLoaded, fontError] = useFonts({
    InriaSans_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Text style={[styles.fontRegular, {...style}]}>{text}</Text>;
}

export function TextBold({ text, style }) {
  const [fontsLoaded, fontError] = useFonts({
    InriaSans_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Text style={[styles.fontBold, {...style}]}>{text}</Text>;
}

const styles = StyleSheet.create({
  fontLight: {
    fontFamily: 'InriaSans_300Light'
  },
  fontRegular: {
    fontFamily: 'InriaSans_400Regular'
  },
  fontBold: {
    fontFamily: 'InriaSans_700Bold'
  }
});
