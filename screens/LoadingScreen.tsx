import {
  ActivityIndicator,
  Button,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import OrangeCar from '../assets/orange_car.png';

const LoadingScreen = ({visible}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modal_background}>
        <View style={styles.modal_container}>
          <Image source={OrangeCar} />
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          <Text style={styles.loading_text}>We're on it!</Text>
          <Text style={styles.loading_sub_text}>
            We're connecting you with a nearby driver...
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  modal_background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_container: {
    backgroundColor: '#FFFFFF',
    height: '60%',
    width: '80%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading_text: {
    // marginTop: 10,
    fontSize: 24,
    color: '#2A2A2A',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  loading_sub_text: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    width: 250,
    textAlign: 'center',
  },
});
