import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
interface InputProps extends TextInputProps {
  style?: ViewStyle;
}

const InputComponent: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          secureTextEntry ? styles.inputWithIcon : null,
          style,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isPasswordVisible}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.icon}>
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    // height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    // paddingHorizontal: 10,
    // padding: 10,
    marginVertical: 10,
    color: '#000000',
  },
  inputWithIcon: {
    // paddingRight: 40, // Adjust padding to make space for the icon
  },
  icon: {
    // marginLeft: 10,
    position: 'absolute',
    right: 15,
    top: 25,
  },

  // container: {
  //   position: 'relative',
  // },
  // input: {
  //   borderColor: '#CCC',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   padding: 10,
  //   marginVertical: 10,
  // },
  // inputWithIcon: {
  //   paddingRight: 40, // Adjust padding to make space for the icon
  // },
  // icon: {
  //   position: 'absolute',
  //   right: 15,
  //   top: 15,
  // },
});
