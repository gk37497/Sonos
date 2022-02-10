import React from 'react';
import {NativeBaseProvider} from 'native-base';
import theme from './src/theme';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigators/MainStack';
import LoginModal, {setLoginModal} from './src/components/login-modal';
import {AuthProvider} from './src/contexts/AuthContext';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <MainStack />
          <LoginModal ref={setLoginModal} />
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  );
};

export default App;
