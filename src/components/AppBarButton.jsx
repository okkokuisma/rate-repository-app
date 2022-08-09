import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    marginLeft: 15
  }
});

const AppBarButton = ({ title, handlePress }) => {
  return (
    <View>
      <Pressable style={styles.tab} onPress={handlePress}>
        <Text fontWeight={'bold'} color={'secondary'} fontSize={'subheading'}>{ title }</Text>
      </Pressable>
    </View>
  );
};

export default AppBarButton;