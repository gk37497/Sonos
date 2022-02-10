import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOption from '../utils/NavigationOptions';
import UserScreen from '../screens/UserScreen';

export const UserStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        ...NavigationOption,
      }}>
      <Stack.Screen
        name="UserScreen"
        options={{title: 'Хэрэглэгч'}}
        component={UserScreen}
      />
    </Stack.Navigator>
  );
};
