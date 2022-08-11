import { Pressable, StyleSheet } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  submitButton: {
    marginHorizontal: 15,
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const SignUpForm = ({ handleSubmit }) => {
  return (
    <>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput name='passwordConfirm' placeholder='Password' secureTextEntry />
      <Pressable onPress={handleSubmit} style={styles.submitButton}>
        <Text fontWeight={'bold'} color={'secondary'}>Sign up</Text>
      </Pressable>
    </>
  )
};

export default SignUpForm;