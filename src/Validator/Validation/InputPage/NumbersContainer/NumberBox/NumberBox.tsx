import React, { Props } from 'react';
import { View, Text, TextInput } from 'react-native';
import { NumberBoxStyles } from './NumberBox.styles';
import * as rxjs from 'rxjs';

const NumberBox = ({ id }: { id: string }) => {
  const [value, setValue] = React.useState('');

  const onChangeText = (e: string) => {
    setValue(e);
    return e;
  };

  return (
    <TextInput
      //
      style={NumberBoxStyles.input}
      maxLength={1}
      value={value}
      placeholder={'1'}
      keyboardType={'number-pad'}
      clearTextOnFocus={false}
      autoCorrect={false}
      enablesReturnKeyAutomatically={true}
      blurOnSubmit={false}
      onChangeText={(e) => onChangeText(e)}
    />
  );
};

export default NumberBox;
