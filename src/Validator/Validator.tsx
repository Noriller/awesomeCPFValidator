import React from 'react';
import { View, Text } from 'react-native';
import NumberBox from './Validation/InputPage/NumbersContainer/NumberBox/NumberBox';
import NumbersContainer from './Validation/InputPage/NumbersContainer/NumbersContainer';
import { ValidatorStyles } from './Validator.styles';

const Validator: React.FC = () => {
  return (
    <View style={ValidatorStyles.container}>
      <NumbersContainer />
      <Text style={ValidatorStyles.text}>Za WARUDO!</Text>
    </View>
  );
};

export default Validator;
