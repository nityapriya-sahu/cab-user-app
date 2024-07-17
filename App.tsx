import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import Login from './screens/Login/Login';
import Success from './screens/Success';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './routes/AppNavigator';
import Home from './screens/HomeScreen/Home';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar hidden />
        <AppNavigator />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    // padding: 20,
  },
});

{
  /* <SafeAreaView style={styles.container}> */
}
{
  /* <Login /> */
}
// <Home />
{
  /* <Success /> */
}
{
  /* <ButtonComponent
          title="Login"
          onPress={handleLogin}
          style={styles.button}
          textStyle={styles.buttonText}
        /> */
}
{
  /* <InputComponent
          value="Nitya"
          onChangeText={onChangeText}
          placeholder="Email"
          style={styles.input}
        /> */
}
// </SafeAreaView>
