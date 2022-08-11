import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import SignUpForm from './SignUpForm';
import useSignUp from '../hooks/useSignUp';
import useAuth from '../hooks/useAuth';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Username length must be between 1 and 30 characters')
    .max(30, 'Username length must be between 1 and 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password length must be between 5 and 50 characters')
    .max(50, 'Password length must be between 5 and 50 characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirm is required')
});

const SignUp = () => {
  const navigate = useNavigate();
  const [ signUp ] = useSignUp();
  const [ signIn ] = useAuth();

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;
      console.log(values)
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/', { replace: true });

    } catch (e) {
      console.log(e);
    }
  }

  return <SignUpContainer onSubmit={onSubmit} />
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <SignUpForm handleSubmit={handleSubmit} />
        )}
      </Formik>
    </>
  )
}

export default SignUp;