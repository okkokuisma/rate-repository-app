import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import AppBarButton from './AppBarButton';
import useAuth from '../hooks/useAuth';
import useCurrentUser from '../hooks/useCurrentUser';

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
  const [ , signOut ] = useAuth();
  const { data, loading } = useCurrentUser(false);

  if (loading) return null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title={'Repositories'} url={'/'} />
        {data?.me
          ?
          <>
            <AppBarTab title={'Create a review'} url={'/review'} />
            <AppBarTab title={'My reviews'} url={'/user'} />
            <AppBarButton title='Sign out' handlePress={signOut} />
          </>
          :
          <>
            <AppBarTab title={'Sign in'} url={'/signin'} />
            <AppBarTab title={'Sign up'} url={'/signup'} />
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;