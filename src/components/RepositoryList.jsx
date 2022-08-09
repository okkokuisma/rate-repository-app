import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.textSecondary
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => {
  return (
    <RepositoryItem
      item={item}
    />
  );
};

const RepositoryList = () => {
  const { data, loading } = useRepositories();

  const repositories = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  if (loading) return <Text>Loading ...</Text>;

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;
