import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Success from '../screens/Success';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <View>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
