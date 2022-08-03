import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    marginLeft: 15
  }
});

const AppBarTab = ({ title, url }) => {
  return (
    <View>
      <Pressable style={styles.tab}>
        <Link to={url}>
          <Text fontWeight={'bold'} color={'secondary'} fontSize={'subheading'}>{ title }</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;