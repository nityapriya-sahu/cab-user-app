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
        inputStyles={styles.input_placeholder}
        dropdownTextStyles={styles.dropdown_text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input_placeholder: {
    color: '#000000',
  },
  dropdown_text: {
    color: '#000000',
  },
});

export default DropdownComponent;
