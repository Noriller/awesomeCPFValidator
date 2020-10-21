import React from 'react';
import { View, Text } from 'react-native';
import { mainStyles } from './main.styles';

const Main: React.FC = () => {
  return (
    <View>
      <Text style={mainStyles.text}>Olá mundo!</Text>
    </View>
  );
};

export default Main;
