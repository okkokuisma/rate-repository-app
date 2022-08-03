import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInputContainer: {
    marginHorizontal: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center'
  },
  textInput: {
    marginLeft: 15
  },
  error: {
    borderColor: 'red'
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textInputContainer,
    error && styles.error,
    style
  ];

  return (
    <View style={textInputStyle}>
      <NativeTextInput style={styles.textInput} {...props} />
    </View>
  );
};

export default TextInput;