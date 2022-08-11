import { View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from './Text';
import ReviewList from './ReviewList';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  reviewContainer: {
    paddingVertical: 15,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  ratingContainer: {
    marginLeft: 15,
    height: 44,
    width: 44,
    borderRadius: 44/2,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewInfoContainer: {
    marginHorizontal: 15,
    flexShrink: 1,
    justifyContent: 'space-evenly'
  },
  reviewInfo: {
    paddingVertical: 3
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  if (!repository) return null
  return (
    <View>
      <RepositoryItem item={repository} linkButton />
      <ItemSeparator />
    </View>
  )
};

const Repository = () => {
  const { id } = useParams();
  const { data, loading, fetchMore } = useRepository({id, first: 3});

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) return <Text>Loading ...</Text>;

  const reviews = data
    ? data.repository.reviews.edges.map(e => e.node)
    : []

  return (
    <ReviewList
      data={reviews}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
      renderItem={({ item }) => <ReviewItem review={item} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default Repository;