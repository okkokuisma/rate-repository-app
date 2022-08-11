import { Pressable, View, StyleSheet, Image } from 'react-native';
import * as Linking from 'expo-linking';

import Text from './Text';
import theme from '../theme';
import RepositoryStat from './RepositoryStat';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  imageContainer: {
    marginLeft: 15,
    marginTop: 15,
    height: 100,
  },
  avatar: {
    borderRadius: 10,
    width: 50,
    height: 50
  },
  descriptionContainer: {
    flexShrink: 1,
    marginLeft: 15,
    marginTop: 15,
    height: 100,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  statContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  languageText: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 10
  },
  linkButton: {
    marginHorizontal: 15,
    marginBottom: 15,
    height: 50,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const RepositoryItem = ({ item, linkButton }) => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  }

  return (
    <View testID="repositoryItem" style={ styles.container }>
      <View style={{ flexDirection: 'row' }}>
        <View style={ styles.imageContainer }>
          <Image
            style={ styles.avatar }
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={ styles.descriptionContainer }>
          <Text fontWeight={'bold'} fontSize={'subheading'}>{item.fullName}</Text>
          <Text style={{ flexShrink: 1 }} color={'textPrimary'}>{item.description}</Text>
          <Text color={'secondary'} style={styles.languageText}>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={ styles.statContainer }>
        <RepositoryStat stat={item.stargazersCount} title={'Stars'} />
        <RepositoryStat stat={item.forksCount} title={'Forks'} />
        <RepositoryStat stat={item.reviewCount} title={'Reviews'} />
        <RepositoryStat stat={item.ratingAverage} title={'Rating'} />
      </View>
      {linkButton
        ?
        <View>
          <Pressable style={styles.linkButton} onPress={() => handleLinkPress(item.url)}>
            <Text fontWeight={'bold'} color={'secondary'}>Open in GitHub</Text>
          </Pressable>
        </View>
        : null
      }
    </View>
  );
};

export default RepositoryItem;
