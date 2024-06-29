import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SuccessLogo from '../assets/SuccessLogo.jpeg';

const Success = () => {
  return (
    <>
      <View style={styles.main_container}>
        <Image
          source={SuccessLogo}
          resizeMode="cover"
          style={styles.success_image}
        />
        <Text style={styles.container}>Success !</Text>
        <Text style={styles.success_msg}>
          Sit back, relax, and let us take care of the journey for you. Enjoy
          the convenience and comfort of our service. Safe travels!
        </Text>
      </View>
    </>
  );
};
export default Success;
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    color: '#656565',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  success_image: {
    objectFit: 'fill',
    width: '100%',
    height: 187,
  },
  success_msg: {
    fontFamily: 'Poppins-Light',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 50,
  },
});
