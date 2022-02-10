import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOption from '../utils/NavigationOptions';
import LibraryScreen from '../screens/LibraryScreen';

export const LibraryStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        ...NavigationOption,
      }}>
      <Stack.Screen
        name="LibraryScreen"
        options={{title: 'Сан'}}
        component={LibraryScreen}
      />
    </Stack.Navigator>
  );
};
