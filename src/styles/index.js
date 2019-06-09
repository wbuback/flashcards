import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 24,
    borderColor: '#546e7a',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 10,
  },
  btn: {
    borderRadius: 15,
  },
  btnText: {
    color: '#fff',
  },
  error: {
    color: 'red',
  },
});

export default mainStyles;
