import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Confirm from '../assets/confirm.png';

const ConfirmScreen = ({visible}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modal_background}>
        <View style={styles.modal_container}>
          <Image source={Confirm} />
          <Text style={styles.loading_text}>Ride confirmed!</Text>
          <Text style={styles.loading_sub_text}>
            Driver on the way! Your cab will be with you shortly...{' '}
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              bottom: -50,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                fontWeight: '400',
                color: '#000000',
              }}>
              Redirecting to home...
            </Text>
            <ActivityIndicator size={'large'} color={'#0063BF'} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  modal_background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    gap: 10,
  },
  loading_text: {
    // marginTop: 10,
    fontSize: 24,
    color: '#2A2A2A',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    paddingTop: 20,
  },
  loading_sub_text: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    width: 250,
    textAlign: 'center',
  },
});
