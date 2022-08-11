import Text from './Text';
import ReviewList from './ReviewList';
import useCurrentUser from '../hooks/useCurrentUser';
import ReviewItem from './ReviewItem';

const User = () => {
  const { data, loading } = useCurrentUser(true);

  if (loading) return <Text>Loading ...</Text>

  const reviews = data
    ? data.me.reviews.edges.map(e => e.node)
    : []

  return (
    <ReviewList data={reviews} renderItem={({ item }) => <ReviewItem review={item} userView />} />
  )
};

export default User;