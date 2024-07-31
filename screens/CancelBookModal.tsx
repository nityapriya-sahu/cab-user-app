import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonComponent from '../components/ButtonComponent';

const CancelBookModal = ({visible, onCancel, onConfirm}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modal_background}>
        <View style={styles.modal_container}>
          <View style={styles.cancel_ride}>
            <AntDesign name="exclamationcircle" size={30} color="#FB5E2C" />
            <Text style={styles.cancel_ride_text}>Cancel ride?</Text>
          </View>
          <Text style={styles.cancel_ride_msg}>
            Are you sure you want to cancel your ride?
          </Text>
          <View style={styles.button_container}>
            <ButtonComponent
              title="Cancel"
              onPress={onCancel}
              style={styles.cancel_btn}
              textStyle={{color: '#065299'}}
            />
            <ButtonComponent
              title="Confirm"
              onPress={onConfirm}
              style={styles.confirm_btn}
              // textStyle={{color: '#065299'}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelBookModal;

const styles = StyleSheet.create({
  modal_background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_container: {
    backgroundColor: '#FFFFFF',
    height: '30%',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  cancel_ride: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  cancel_ride_text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },
  cancel_ride_msg: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
  },
  button_container: {
    flexDirection: 'row',
    // columnGap: 10,
    justifyContent: 'space-between',
  },
  cancel_btn: {
    backgroundColor: '#F0F4F8',
    // borderWidth: 1,
    // borderColor: '#065299',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150, // fixed width
    height: 50,
    elevation: 10,
  },
  confirm_btn: {
    backgroundColor: '#5470F2',
    // borderWidth: 1,
    // borderColor: '#AA45FB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150, // fixed width
    height: 50,
    elevation: 10,
  },
});
