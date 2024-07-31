import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PSIcon from '../assets/psicon.png';
import OrangeCar from '../assets/orange_car.png';
import Destination from '../assets/destination.png';
import RightCar from '../assets/right_car.png';
import ButtonComponent from '../components/ButtonComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import CancelBookModal from './CancelBookModal';
import CancelConfirmedModal from './CancelConfirmedModal';

const BookedScreen = () => {
  const navigation = useNavigation();
  const [showSecondView, setShowSecondView] = useState(true);
  const [showCancelBookModal, setShowCancelBookModal] = useState(false);
  const [showConfirmedModal, setShowConfirmedModal] = useState(false);

  //this useEffect when book confirmed by driver
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSecondView(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    if (showConfirmedModal) {
      const timer = setTimeout(() => {
        setShowConfirmedModal(false);
        navigation.navigate('HomeMain');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmedModal, navigation]);

  const handleCancelRide = () => {
    setShowCancelBookModal(true);
  };
  const onPressCancel = () => {
    setShowCancelBookModal(false);
  };
  const onPressConfirm = () => {
    setShowCancelBookModal(false);
    setShowConfirmedModal(true);
  };
  return (
    <View style={styles.main_container}>
      <CancelBookModal
        visible={showCancelBookModal}
        onCancel={onPressCancel}
        onConfirm={onPressConfirm}
      />
      <CancelConfirmedModal visible={showConfirmedModal} />

      <View style={styles.header_container}>
        <Image source={PSIcon} style={{height: 35, width: 35}} />
        <Text style={styles.header_text}>Devid Pilot</Text>
        <View style={styles.green_dot}></View>
      </View>
      <View style={styles.vehicle_details_container}>
        <View style={styles.otp_container}>
          <Text style={styles.otp_text}>OTP</Text>
          <Text style={styles.otp_number}>453454</Text>
        </View>
        <View style={styles.otp_container}>
          <Text style={styles.otp_text}>Vehicle Number</Text>
          <Text style={styles.otp_number}>OD-74857</Text>
        </View>
      </View>
      <View style={styles.destination_container}>
        <Image source={Destination} />
        <View>
          <Text style={styles.from_to_text}>From Location</Text>
          <Text style={styles.department}>Department 1</Text>
          <Text style={[styles.from_to_text, styles.minor]}>To Location</Text>
          <Text style={styles.department}>Department 2</Text>
        </View>
      </View>
      {/* ===================================== */}
      {showSecondView ? (
        <>
          <View style={styles.timer_container}>
            <View>
              <Text style={styles.timer_text}>3 min to pickup</Text>
              <Text style={styles.timer_msg}>
                Your car will be at the pickup spot at 12:03pm
              </Text>
            </View>
            <View>
              <Image source={OrangeCar} />
            </View>
          </View>
          <View style={styles.button_container}>
            <ButtonComponent
              title="Cancel Ride"
              onPress={handleCancelRide}
              style={styles.cancel_btn}
              textStyle={{color: '#065299'}}
            />
            <ButtonComponent
              title={<MaterialIcons name="phone" size={30} color="white" />}
              onPress={() => console.warn('Confirm')}
              style={styles.confirm_btn}
              //   textStyle={{color: '#065299'}}
            />
          </View>
        </>
      ) : (
        <View
          style={{
            alignItems: 'center',
            rowGap: 40,
          }}>
          <Text style={styles.ongoing_msg}>
            Your driver has arrived and you're on your way to your destination.
          </Text>
          <View>
            <Image source={RightCar} />
          </View>
        </View>
      )}

      {/* 1st code */}

      {/* 2nd code */}
    </View>
  );
};

export default BookedScreen;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 20,
    rowGap: 20,
    backgroundColor: '#FFFFFF',
  },
  header_container: {
    borderWidth: 1,
    height: 50,
    borderRadius: 30,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  header_text: {
    color: '#352555',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
  },
  green_dot: {
    backgroundColor: '#06BF71',
    height: 9,
    width: 9,
    borderRadius: 5,
  },
  vehicle_details_container: {
    paddingTop: 20,
    rowGap: 10,
  },
  otp_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otp_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },
  otp_number: {
    backgroundColor: '#A237D7',
    height: 40,
    width: 120,
    borderRadius: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  destination_container: {
    // paddingTop: 20,
    height: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 10,
    padding: 20,
    marginBottom: 40,
    flexDirection: 'row',
    columnGap: 20,
  },
  timer_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timer_text: {
    fontWeight: '700',
    fontSize: 23,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  timer_msg: {
    color: '#8E8989',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    width: 160,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  cancel_btn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#065299',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 170, // fixed width
    height: 50,
  },
  confirm_btn: {
    backgroundColor: '#AA45FB',
    borderWidth: 1,
    borderColor: '#AA45FB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 170, // fixed width
    height: 50,
  },
  from_to_text: {
    color: '#77869E',
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  department: {
    color: '#111111',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  minor: {
    paddingTop: 5,
  },

  //----------------------------
  ongoing_msg: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
    color: '#424242',
  },
});
