import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calculadora from '../screens/Calculadora/index';
import ConversorMedidas from '../screens/Conversor Medidas';
import ConversorMoedas from '../screens/Conversor Moedas/index';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createMaterialTopTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#2E9FB6",
      tabBarStyle:{
        backgroundColor: '#0D0D0D',
        borderBottomWidth: 0
      }
    }}
    tabBar={(props) => <CustomTabBar {...props}/> }
    >
      <Tab.Screen 
        name="Calculadora" 
        component={Calculadora}
        options={{
          tabBarIcon: "calculator"
        }} 
      />
      <Tab.Screen 
        name="ConversorMedidas" 
        component={ConversorMedidas}
        options={{
          tabBarIcon: "ruler-horizontal"
        }}  
      />
      <Tab.Screen 
        name="ConversorMoedas" 
        component={ConversorMoedas} 
        options={{
          tabBarIcon: "dollar-sign"
        }} 
      />
    </Tab.Navigator>
  );
}
