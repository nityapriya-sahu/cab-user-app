import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginImage from '../../assets/LoginImage.jpeg';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={LoginImage}
          //   height={100}
          //   width={50}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.greet_msg}>
        <Text style={styles.greet_text}>Hey, Hello &#128075;</Text>
      </View>
      <View>
        <Text style={styles.email_text}>Email Address</Text>
        <InputComponent />
        <Text style={styles.email_text}>Password</Text>
        <InputComponent secureTextEntry />
      </View>
      <View style={styles.btn_container}>
        <ButtonComponent title="Login" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  image_container: {
    // width: '10%',
    // height: '100%',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 187,
    objectFit: 'fill',
  },
  greet_msg: {marginTop: 50},
  greet_text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: '#000000',
  },
  email_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
    letterSpacing: 2,
  },
  btn_container: {
    marginTop: 50,
  },
});
