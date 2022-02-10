import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOption from '../utils/NavigationOptions';
import HomeScreen from '../screens/HomeScreen';

export const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        ...NavigationOption,
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Нүүр'}}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
