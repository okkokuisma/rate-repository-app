import { Picker } from '@react-native-picker/picker';
import { View, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

import Text from './Text';

const styles = StyleSheet.create({
  submitButton: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const RepositorySortMenu = ({ selectedSort, setSelectedSort }) => {
  const [visible, setVisible] = useState(false);

  const showWhenVisible = { display: visible ? '' : 'none' };
  const buttonTitle = visible ? 'Close menu' : 'Sort';

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Pressable onPress={handleClick} style={styles.submitButton}>
        <Text fontWeight={'bold'} color={'primary'}>{buttonTitle}</Text>
      </Pressable>
      <View style={showWhenVisible}>
        <Picker
          selectedValue={selectedSort}
          onValueChange={(itemValue) =>
            setSelectedSort(itemValue)
          }>
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item label="Highest rated repositories" value="highest" />
          <Picker.Item label="Lowest rated repositories" value="lowest" />
        </Picker>
      </View>
    </View>
  )
};

export default RepositorySortMenu;