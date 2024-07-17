import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CarLogo from '../assets/carlogo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HistoryScreen = ({navigation}) => {
  const data = [
    {
      vehicle_no: 'ORDB1234',
      driver_name: 'Devid',
      status: 'drop-off',
      department: 'Department 1',
    },
    {
      vehicle_no: 'ORDB7856',
      driver_name: 'Warner',
      status: 'drop-off',
      department: 'Department 8',
    },
    {
      vehicle_no: 'ORDB8901',
      driver_name: 'Lockie',
      status: 'drop-off',
      department: 'Department 5',
    },
    {
      vehicle_no: 'ORDB7001',
      driver_name: 'Fletcher',
      status: 'drop-off',
      department: 'Department 3',
    },
    {
      vehicle_no: 'ORDB9292',
      driver_name: 'Rasid',
      status: 'drop-off',
      department: 'Department 2',
    },
    {
      vehicle_no: 'ORDB1001',
      driver_name: 'Symonds',
      status: 'drop-off',
      department: 'Department 9',
    },
    {
      vehicle_no: 'ORDB8118',
      driver_name: 'Boult',
      status: 'drop-off',
      department: 'Department 3',
    },
  ];
  return (
    <View style={styles.main_container}>
      <View style={styles.header_container}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header_text}>History</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            // <>
            <View key={index} style={styles.vehicle_container}>
              <Text style={styles.vehicle_details}>
                {item.vehicle_no} | Driver: {item.driver_name}
              </Text>
              <View style={styles.vehicle_status_container}>
                <Image source={CarLogo} style={{height: 60, width: 60}} />
                <View>
                  <View style={{flexDirection: 'row', gap: 3}}>
                    <Ionicons name="location-sharp" size={10} color="green" />
                    <Text style={styles.status_text}>{item.status}</Text>
                  </View>
                  <Text style={styles.department_text}>{item.department}</Text>
                </View>
              </View>
            </View>
            // </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 30,
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
  vehicle_container: {
    borderBottomColor: '#DCE8E9',
    borderBottomWidth: 2,
    paddingTop: 30,
  },
  vehicle_details: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#352555',
  },
  vehicle_status_container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  status_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#545454',
    fontWeight: '300',
  },
  department_text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#352555',
    fontWeight: '400',
  },
});
