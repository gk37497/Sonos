import React, {useState} from 'react';
import {Text, Box, useColorModeValue, StatusBar} from 'native-base';
import AnimatedColorBox from '../components/animated-color-box';
import useAllBooks from '../hooks/useAllBooks';
const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [books, loading] = useAllBooks(refreshing, setRefreshing);

  console.log('books====', books.length);
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('dark.50', 'dark.900')}
      w="full">
      <StatusBar
        barStyle={useColorModeValue('dark-content', 'light-content')}
      />
      <Box bg={'dark.100'} flex={1}>
        <Text>Header</Text>
      </Box>
      <Box bg={'dark.300'} flex={2}>
        <Text>Container1</Text>
      </Box>
      <Box bg={'dark.600'} flex={5}>
        <Text>Container2</Text>
      </Box>
    </AnimatedColorBox>
  );
};

export default HomeScreen;
