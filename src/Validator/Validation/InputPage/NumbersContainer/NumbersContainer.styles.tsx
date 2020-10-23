import { StyleSheet } from 'react-native';

export const NumbersContainerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#444444',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  textPoint: {
    alignSelf: 'flex-end',
  },
  textHyphen: {
    alignSelf: 'flex-start',
  },
});
