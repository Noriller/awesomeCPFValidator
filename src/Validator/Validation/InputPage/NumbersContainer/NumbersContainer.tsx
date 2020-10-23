import React from 'react';
import { View, Text, TextInput } from 'react-native';
import NumberBox from './NumberBox/NumberBox';
import { NumbersContainerStyles } from './NumbersContainer.styles';

const NumbersContainer = () => {
  const [value, setValue] = React.useState(null);

  return (
    <View style={NumbersContainerStyles.container}>
      <NumberBox id='nome1' />
      <NumberBox id='nome2' />
      <NumberBox id='nome3' />
      <Text style={[NumbersContainerStyles.text, NumbersContainerStyles.textPoint]}>.</Text>
      <NumberBox />
      <NumberBox />
      <NumberBox />
      <Text style={[NumbersContainerStyles.text, NumbersContainerStyles.textPoint]}>.</Text>
      <NumberBox />
      <NumberBox />
      <NumberBox />
      <Text style={[NumbersContainerStyles.text, NumbersContainerStyles.textHyphen]}>-</Text>
      <NumberBox />
      <NumberBox />
    </View>
  );
};

export default NumbersContainer;
