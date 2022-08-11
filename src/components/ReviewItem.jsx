import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  reviewContainer: {
    paddingVertical: 15,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  ratingContainer: {
    marginLeft: 15,
    height: 44,
    width: 44,
    borderRadius: 44/2,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewInfoContainer: {
    marginHorizontal: 15,
    flexShrink: 1,
    justifyContent: 'space-evenly'
  },
  reviewInfo: {
    paddingVertical: 3
  }
});

const ReviewItem = ({ review, userView }) => {
  const date = format(Date.parse(review.createdAt), 'dd.MM.yyyy')
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text color='primary' fontWeight='bold'>{review.rating}</Text>
      </View>
      <View style={styles.reviewInfoContainer}>
        <Text style={styles.reviewInfo} fontWeight={'bold'}>
          {userView ? review.repository.fullName : review.user.username}
        </Text>
        <Text style={styles.reviewInfo}>{date}</Text>
        <Text style={styles.reviewInfo}>{review.text}</Text>
      </View>
    </View>
  )
};

export default ReviewItem;