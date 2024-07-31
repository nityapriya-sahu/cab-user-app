import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Confirm from '../assets/confirm.png';

const CancelConfirmedModal = ({visible}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modal_background}>
        <View style={styles.modal_container}>
          <Image source={Confirm} />
          <Text style={styles.confirm_text}>
            Your ride has been successfully canceled!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default CancelConfirmedModal;

const styles = StyleSheet.create({
  modal_background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_container: {
    backgroundColor: '#FFFFFF',
    height: '40%',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    rowGap: 20,
  },
  confirm_text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
  },
});
