import { useQuery } from '@apollo/client';

import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useRepository = (variables) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { repositoryId: variables.id, ...variables },
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { data, loading, error, fetchMore: handleFetchMore, };
};

export default useRepository;