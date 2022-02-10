import {
  Center,
  VStack,
  Pressable,
  Text,
  useColorModeValue,
  Icon,
} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimatedColorBox from './animated-color-box';

export function TabBar({state, descriptors, navigation}) {
  return (
    <AnimatedColorBox
      flexDirection={'row'}
      justifyContent={'space-between'}
      bg={useColorModeValue('dark.100', 'dark.900')}
      px={8}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? 'primary.500' : 'gray.500';

        return (
          <Pressable onPress={onPress} key={index} py={2} mx={1} flex={1}>
            <Center>
              <VStack alignItems={'center'}>
                <Icon
                  as={Ionicons}
                  name={options.icon}
                  size={5}
                  color={color}
                />
                <Text fontSize={'xs'} color={color}>
                  {label}
                </Text>
              </VStack>
            </Center>
          </Pressable>
        );
      })}
    </AnimatedColorBox>
  );
}
