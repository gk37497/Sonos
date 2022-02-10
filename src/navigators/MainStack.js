import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './BottomTabs';
import {HomeStack} from './HomeStack';
import {UserStack} from './UserStack';
import {LibraryStack} from './LibraryStack';

export const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="LibraryStack" component={LibraryStack} />
      <Stack.Screen name="UserStack" component={UserStack} />
    </Stack.Navigator>
  );
};
