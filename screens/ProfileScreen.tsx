import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PSIcon from '../assets/psicon.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.main_container}>
        <View style={styles.profile_container}>
          <Image source={PSIcon} />
          <Text style={styles.profile_name}>Premananda Sahoo</Text>
        </View>
        {/* <View style={styles.options_container}>
        <View style={styles.settings_container}>
          <Ionicons name="settings-sharp" size={24} color="#1D3557BA" />
          <Text style={styles.settings_text}>Settings</Text>
        </View>
        <View style={styles.settings_container}>
          <Ionicons name="log-out" size={24} color="#EA2604" />
          <Text
            style={styles.settings_text}
            onPress={() => navigation.navigate('Login')}>
            Sign out
          </Text>
        </View>
      </View> */}
        <View style={styles.options_container}>
          <View style={{paddingBottom: 10, gap: 10}}>
            <Text style={styles.heading_text}>Account</Text>
            <View style={styles.account_container}>
              <View style={styles.each_option_view}>
                <AntDesign name="user" size={22} color="#363538" />
                <Text style={styles.options_text}>Edit Profile</Text>
              </View>
              <View style={styles.each_option_view}>
                <AntDesign name="lock" size={22} color="#363538" />
                <Text style={styles.options_text}>Change Password</Text>
              </View>
              <View style={styles.each_option_view}>
                <AntDesign name="home" size={22} color="#363538" />

                <Text style={styles.options_text}>Address</Text>
              </View>
            </View>
          </View>
          <View style={{paddingBottom: 10, gap: 10}}>
            <Text style={styles.heading_text}>Support & About</Text>
            <View style={styles.account_container}>
              <View style={styles.each_option_view}>
                <AntDesign name="customerservice" size={22} color="#363538" />
                <Text style={styles.options_text}>Contact Support</Text>
              </View>
              <View style={styles.each_option_view}>
                <AntDesign name="exception1" size={22} color="#363538" />
                <Text style={styles.options_text}>Terms & Policies</Text>
              </View>
            </View>
          </View>
          <View style={{paddingBottom: 10, gap: 10}}>
            <Text style={styles.heading_text}>Actions</Text>
            <View style={styles.account_container}>
              <View style={styles.each_option_view}>
                <AntDesign name="tagso" size={22} color="#363538" />
                <Text style={styles.options_text}>Report an issue</Text>
              </View>
              <View style={styles.each_option_view}>
                <AntDesign name="logout" size={22} color="#363538" />
                <Text
                  style={styles.options_text}
                  onPress={() => navigation.navigate('Login')}>
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.heading_text, {textAlign: 'center'}]}>
          Version: 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 30,
  },
  profile_container: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },
  profile_name: {
    color: '#111111',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 20,
  },
  options_container: {
    paddingVertical: 20,
    rowGap: 10,
  },
  // settings_container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   columnGap: 10,
  // },
  // settings_text: {
  //   fontFamily: 'Poppins-Regular',
  //   fontWeight: '400',
  //   fontSize: 16,
  //   color: '#1D3557BA',
  // },

  heading_text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },
  account_container: {
    backgroundColor: '#45A6FF33',
    padding: 10,
    borderRadius: 6,
    gap: 10,
  },
  options_text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },
  each_option_view: {
    flexDirection: 'row',
    gap: 10,
  },
});
