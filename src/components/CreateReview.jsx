import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import CreateReviewForm from './CreateReviewForm';
import useCreateReview from '../hooks/useCreateReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: null,
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
});

const CreateReview = () => {
  const navigate = useNavigate();
  const [ createReview ] = useCreateReview()

  const onSubmit = async (values) => {
    try {
      const review = {...values, rating: Number(values.rating)}
      const createdReview = await createReview(review);
      navigate(`/repository/${createdReview.repositoryId}`);

    } catch (e) {
      console.log(e);
    }
  }

  return <CreateReviewContainer onSubmit={onSubmit} />
};

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <CreateReviewForm handleSubmit={handleSubmit} />
        )}
      </Formik>
    </>
  )
}

export default CreateReview;