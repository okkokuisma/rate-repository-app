import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortVariables) => {
  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { ...sortVariables },
    fetchPolicy: 'cache-and-network'
  });

  return { data, loading, error, refetch };
};

export default useRepositories;