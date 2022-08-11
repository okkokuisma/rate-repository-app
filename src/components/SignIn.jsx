import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import SignInForm from './SignInForm';
import useAuth from '../hooks/useAuth';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required'),
  password: yup
  .string()
  .required('Password is required'),
});

const SignIn = () => {
  const [ signIn ] = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate('/', { replace: true });

    } catch (e) {
      console.log(e);
    }
  }

  return <SignInContainer onSubmit={onSubmit} />
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <SignInForm handleSubmit={handleSubmit} />
        )}
      </Formik>
    </>
  )
}

export default SignIn;