import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';

import AppBarTab from './AppBarTab';
import AppBarButton from './AppBarButton';
import { GET_CURRENT_USER } from '../graphql/queries';
import useAuth from '../hooks/useAuth';

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
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network'
  });
  console.log(signOut.toString())

  if (loading) return null

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title={'Repositories'} url={'/'} />
        {data?.me
          ? <AppBarButton title='Sign out' handlePress={signOut} />
          : <AppBarTab title={'Sign in'} url={'/signin'} />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;