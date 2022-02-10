import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';
import {LibraryStack} from './LibraryStack';
import {UserStack} from './UserStack';
import {TabBar} from '../components/tab-bar';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerTitleAlign: 'left', headerShown: false}}>
      <Tab.Screen
        options={{title: 'Нүүр', icon: 'home-outline'}}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{title: 'Сан', icon: 'library-outline'}}
        name="LibraryStack"
        component={LibraryStack}
      />
      <Tab.Screen
        options={{
          title: 'Хэрэглэгч',
          icon: 'person-outline',
        }}
        name="UserStack"
        component={UserStack}
      />
    </Tab.Navigator>
  );
};
