import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PSIcon from '../assets/psicon.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main_container}>
      <View style={styles.profile_container}>
        <Image source={PSIcon} />
        <Text style={styles.profile_name}>Premananda Sahoo</Text>
      </View>
      <View style={styles.options_container}>
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
      </View>
    </View>
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
  settings_container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  settings_text: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#1D3557BA',
  },
});
