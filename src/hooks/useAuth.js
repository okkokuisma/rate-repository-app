import { useMutation, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useAuth = () => {
  const [ mutate, result ] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signIn = async (credentials) => {
    const { data } = await mutate({ variables: { credentials } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    await apolloClient.resetStore();
  };

  const signOut = async () => {
    navigate('/', { replace: true });
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return [ signIn, signOut, result ];
};

export default useAuth;