import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#324BA5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Poppins-Medium',
  },
});
