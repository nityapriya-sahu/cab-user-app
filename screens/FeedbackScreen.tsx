import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Confirm from '../assets/confirm.png';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import {AirbnbRating} from 'react-native-ratings';

const FeedbackScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main_container}>
      <View style={styles.header_container}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.navigate('HomeMain')}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header_text}>Feedback</Text>
        <View></View>
      </View>
      <View style={styles.rating_container}>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Image source={Confirm} />
        </View>
        <View style={{rowGap: 20}}>
          <View style={styles.text_container}>
            <Text style={styles.ride_completed}>Ride is completed!</Text>
            <Text style={styles.rate_service}>Rate the service</Text>
          </View>
          <AirbnbRating
            count={5}
            defaultRating={0}
            size={30}
            showRating={false}
            selectedColor="#FBBF24"
            unSelectedColor="#D1D5DB"
            starContainerStyle={{columnGap: 30}}
          />
        </View>
        <View style={{}}>
          <Text style={styles.give_feedback}>Give Your feedback</Text>
          {/* <InputComponent style={styles.inputbox} multiline /> */}
          <View style={styles.inputbox}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={400}
              // onChangeText={text => onChangeText(text)}
              // value={value}
              //   style={{padding: 10}}
            />
          </View>
        </View>
        <ButtonComponent
          title="Submit"
          onPress={() => console.warn('submit')}
        />
      </View>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 20,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButtonContainer: {
    backgroundColor: '#0768cf',
    borderRadius: 20,
    padding: 5,
  },
  header_text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    fontFamily: 'Poppins_medium',
    fontSize: 20,
    color: '#352555',
  },
  rating_container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  text_container: {alignItems: 'center'},
  ride_completed: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    fontSize: 20,
    color: '#324BA5',
  },
  rate_service: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    fontSize: 25,
    color: '#352555',
  },
  give_feedback: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    fontSize: 13,
    color: '#352555',
  },
  inputbox: {
    height: 160,
    borderColor: '#EEEEEE',
    borderWidth: 5,
    borderRadius: 10,
  },
});
