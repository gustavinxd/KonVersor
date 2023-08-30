/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.teamLogo}>
        <FontAwesome5 name="skull" color="#fff" size={20}/>
        <Text style={styles.teamTitle}>PirateDevs</Text>
      </View>
      <View style={styles.content}>
        {state.routes.map((route, index) =>{
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return(
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{alignItems: 'center', padding: 4}}>
                <View style={styles.innerButton}>
                  <FontAwesome5 
                  name={options.tabBarIcon}
                  size={25}
                  color={isFocused ? "#2E9FB6" : "#fff"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )

        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D0D0D',
    },
    content:{
      flexDirection:'row',
      marginTop: Platform.OS === 'ios' ? 38 : 24,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,     
    
    },
    buttonTab:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    innerButton:{
      padding: 4
    },
    teamLogo:{
      color: '#fff',
      position:'absolute',
      left: 15,
      bottom: 10,
      flexDirection: 'row',
      alignItems:'flex-end'
    },
    teamTitle:{
      color: '#fff',
      fontSize: 16
    },
})