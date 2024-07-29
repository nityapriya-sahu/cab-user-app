import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

const DropdownComponent = ({data, placeholder, onSelect}) => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <SelectList
        data={data}
        setSelected={setSelected}
        placeholder={placeholder}
        onSelect={() => onSelect(selected)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default DropdownComponent;
