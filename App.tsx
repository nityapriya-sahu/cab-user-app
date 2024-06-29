import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import Login from './screens/Login/Login';
import Success from './screens/Success';

const App = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Login />
        {/* <Success /> */}
        {/* <ButtonComponent
          title="Login"
          onPress={handleLogin}
          style={styles.button}
          textStyle={styles.buttonText}
        /> */}
        {/* <InputComponent
          value="Nitya"
          onChangeText={onChangeText}
          placeholder="Email"
          style={styles.input}
        /> */}
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
});
