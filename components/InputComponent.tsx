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

const InputComponent: React.FC<InputProps> = (
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
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
  },
  icon: {
    marginLeft: 10,
  },
});
