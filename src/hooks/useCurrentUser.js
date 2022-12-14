import { useQuery } from '@apollo/client';

import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (includeReviews) => {
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network'
  });

  return { data, loading };
};

export default useCurrentUser;