import { Pressable, FlatList, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import TextInput from './TextInput';
import RepositorySortMenu from './RepositorySortMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  searchInput: {
    marginHorizontal: 0,
    marginTop: 0,
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 0
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RenderHeader = ({
  selectedSort,
  setSelectedSort,
  searchKeyWord,
  setSearchKeyword
}) => {
  return (
    <View>
      <TextInput
        onChangeText={value => setSearchKeyword(value)}
        value={searchKeyWord}
        style={styles.searchInput}
        placeholder='Type to filter'
      />
      <RepositorySortMenu selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      <ItemSeparator />
    </View>
  );
}

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const {
      selectedSort,
      setSelectedSort,
      searchKeyword,
      setSearchKeyword
    } = this.props;

    return (
      <RenderHeader
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        searchKeyWord={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    );
  };

  renderItem = ({ item }) => {
    const { handleRepositoryPress } = this.props;
    return (
      <Pressable onPress={() => handleRepositoryPress(item.id)}>
        <RepositoryItem
          item={item}
        />
      </Pressable>
    );
  };

  render() {
    const { repositories } = this.props;

    const mappedRepositories = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={mappedRepositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

// export const RepositoryListContainer = ({
//   repositories,
//   handleRepositoryPress,
//   selectedSort,
//   setSelectedSort,
//   searchKeyWord,
//   setSearchKeyword
// }) => {

//   const renderItem = ({ item }) => {
//     return (
//       <Pressable onPress={() => handleRepositoryPress(item.id)}>
//         <RepositoryItem
//           item={item}
//         />
//       </Pressable>
//     );
//   };

//   const mappedRepositories = repositories
//     ? repositories.edges.map(edge => edge.node)
//     : [];

//   return (
//     <FlatList
//       data={mappedRepositories}
//       ItemSeparatorComponent={ItemSeparator}
//       renderItem={renderItem}
//       ListHeaderComponent={
//         <RenderHeader
//           selectedSort={selectedSort}
//           setSelectedSort={setSelectedSort}
//           searchKeyWord={searchKeyWord}
//           setSearchKeyword={setSearchKeyword}
//         />
//       }
//     />
//   );
// };

const RepositoryList = () => {
  const navigate = useNavigate();
  const [ selectedSort, setSelectedSort ] = useState('');
  const [ searchKeyword, setSearchKeyword ] = useState('');
  const [ debouncedSearchWord ] = useDebounce(searchKeyword, 1000);
  const [ queryVariables, setQueryVariables ] = useState();
  const { data, loading } = useRepositories(queryVariables);

  useEffect(() => {
    switch (selectedSort) {
      case 'highest':
        setQueryVariables({ searchKeyword: debouncedSearchWord, orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' })
        break;
      case 'lowest':
        setQueryVariables({ searchKeyword: debouncedSearchWord, orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' })
        break;
      default:
        setQueryVariables({ searchKeyword: debouncedSearchWord, orderBy: 'CREATED_AT', orderDirection: 'DESC' })
        break;
    }
  }, [selectedSort, debouncedSearchWord]);

  const handleRepositoryPress = (id) => {
    navigate(`/repository/${id}`);
  }

  if (loading) return <Text>Loading ...</Text>;

  return (
    <RepositoryListContainer
      repositories={data.repositories}
      handleRepositoryPress={handleRepositoryPress}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;
