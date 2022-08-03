import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 70
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title={'Repositories'} url={'/'} />
        <AppBarTab title={'Sign in'} url={'/signin'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;