import React from 'react';
import {Text, Center, useColorModeValue} from 'native-base';
import AnimatedColorBox from '../components/animated-color-box';
const LibraryScreen = () => {
  return (
    <AnimatedColorBox
      //   flex={1}
      bg={useColorModeValue('dark.50', 'dark.900')}
      w="full"
      h="full">
      <Center p="20">
        <Text fontSize="xs">LibraryScreen</Text>
      </Center>
    </AnimatedColorBox>
  );
};

export default LibraryScreen;
