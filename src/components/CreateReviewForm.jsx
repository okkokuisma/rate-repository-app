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

const CreateReviewForm = ({ handleSubmit }) => {
  return (
    <>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline />
      <Pressable onPress={handleSubmit} style={styles.submitButton}>
        <Text fontWeight={'bold'} color={'secondary'}>Create a review</Text>
      </Pressable>
    </>
  )
};

export default CreateReviewForm;