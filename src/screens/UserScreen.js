import React, {useContext, useEffect, useState} from 'react';
import {Text, Center, useColorModeValue, Button} from 'native-base';
import AnimatedColorBox from '../components/animated-color-box';
import {loginModal} from '../components/login-modal';
import AuthContext from '../contexts/AuthContext';
import ThemeToggle from '../components/theme-toggle';
const UserScreen = () => {
  const state = useContext(AuthContext);
  const [token, setToken] = useState(null);
  const onPress = () => {
    loginModal.open();
  };

  useEffect(() => {
    setToken(state.token);
  }, [state.token]);

  const deleteToken = () => state.deleteToken();
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('dark.50', 'dark.900')}
      w="full"
      h="full">
      <Center p="20">
        <Text fontSize="xs" mb={10}>
          UserScreen
        </Text>
        <ThemeToggle />
        <Button onPress={onPress} mt={10}>
          Login
        </Button>
        <Button onPress={deleteToken} mt={5}>
          Delete Token
        </Button>
        <Text bold fontSize={'md'} mt={10}>
          TOKEN
        </Text>
        <Text mt={5} fontSize={'sm'}>
          {token}
        </Text>
      </Center>
    </AnimatedColorBox>
  );
};

export default UserScreen;
