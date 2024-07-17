import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const DropdownComponent = ({
  value,
  onValueChange,
  items,
  placeholder,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <RNPickerSelect
        value={value}
        onValueChange={onValueChange}
        items={items}
        style={pickerSelectStyles}
        placeholder={placeholder}
      />
    </View>
  );
};
export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    fontFamily: 'Poppins-Regular',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    fontFamily: 'Poppins-Regular',
  },
});
