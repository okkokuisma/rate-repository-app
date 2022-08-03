import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  stat: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});

const RepositoryStat = ({ stat, title }) => {
  return (
    <View style={ styles.stat }>
      <Text fontWeight={'bold'}>{stat}</Text>
      <Text>{ title }</Text>
    </View>
  );
};

export default RepositoryStat;