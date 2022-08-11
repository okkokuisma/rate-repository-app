import { FlatList, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = (props) => {
  return (
    <FlatList
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      {...props}
    />
  );
};

export default ReviewList;