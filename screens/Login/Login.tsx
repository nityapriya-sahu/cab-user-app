import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginImage from '../../assets/LoginImage.jpeg';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    // Validate inputs
    if (email === '') {
      setEmailError('Email Address is required');
    } else if (password === '') {
      setPasswordError('Password is required');
    }
    // use static credentials
    if (email === 'donald@gmail.com' && password === 'donald@123') {
      navigation.navigate('HomeTabs');
    } else if (email !== '' && password !== '') {
      Alert.alert(
        'Invalid credentials',
        'Please check your email and password',
      );
      setEmail('');
      setPassword('');
    }
  };
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
        <InputComponent value={email} onChangeText={setEmail} />
        {emailError ? (
          <Text style={styles.error_text}>{emailError}</Text>
        ) : null}
        <Text style={styles.email_text}>Password</Text>
        <InputComponent
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {passwordError ? (
          <Text style={styles.error_text}>{passwordError}</Text>
        ) : null}
      </View>
      <View style={styles.btn_container}>
        <ButtonComponent title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {padding: 20},
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
  error_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
});
