import React, {useContext} from 'react';
import {Text, HStack, Switch, useColorMode} from 'native-base';
import AuthContext from '../contexts/AuthContext';

export default function ThemeToggle() {
  const {colorMode, toggleColorMode} = useColorMode();
  const context = useContext(AuthContext);

  const themeToggle = () => {
    toggleColorMode();
    context.changeTheme(colorMode === 'light' ? ' dark' : 'light');
  };
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch isChecked={colorMode === 'light'} onToggle={themeToggle} />
      <Text>Light</Text>
    </HStack>
  );
}
