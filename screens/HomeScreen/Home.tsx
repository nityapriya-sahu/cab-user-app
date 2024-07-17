import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import {apiKey} from '../../utils/ApiKey';

const Home = () => {
  const mapRef = useRef();
  const [userLocation, setUserLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  // console.log(userLocation, 'MMMMMMMMM');
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 10000,
      })
        .then(async location => {
          setUserLocation({
            latitude: location.latitude,
            longitude: location.longitude,
          });
          if (mapRef) {
            mapRef.current.animateToRegion({
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            });
          }
          // console.log(location.latitude, location.longitude, '...Location');
          const {data} = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${apiKey}`,
          );
          setOrigin(data.results[0].formatted_address);
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    };
    getLocation();
  }, []);

  const handleFindDriver = () => {
    console.warn('DRIVER FIND');
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.navbar_container}>
        <View style={styles.home_navbar_text}>
          <Text style={styles.home_navbar_greet}>Welcome back</Text>
          <Text style={styles.home_navbar_name}>Premananda Sahoo</Text>
        </View>
        <View style={styles.home_navbar_icons}>
          <Ionicons name="notifications" size={30} color="black" />
          {/* <Ionicons name="notifications" size={30} color="black" /> */}
        </View>
      </View>
      <View style={styles.map_container}>
        <MapView
          ref={mapRef}
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE} //this line will show the map both android & ios
          showsUserLocation={false}
          showsMyLocationButton
          initialRegion={{
            latitude: userLocation ? userLocation?.latitude : 21.5465556,
            longitude: userLocation ? userLocation?.longitude : 84.8764722,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: userLocation?.latitude,
              longitude: userLocation?.longitude,
            }}
          />
        </MapView>
      </View>
      <View style={styles.input_container}>
        {/* <ScrollView> */}
        <View>
          <Text style={styles.input_text}>From Location</Text>
          <InputComponent value={origin} />
          <Text style={styles.input_text}>To Location</Text>
          <InputComponent />
        </View>
        <View style={styles.btn_container}>
          <ButtonComponent
            title="Find Driver"
            style={styles.button}
            onPress={handleFindDriver}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navbar_container: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  home_navbar_text: {},
  home_navbar_greet: {
    color: '#111111',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  home_navbar_name: {
    color: '#111111',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  home_navbar_icons: {
    flexDirection: 'row',
  },

  //===========
  map_container: {
    flex: 0.5,
  },
  //=========
  input_container: {
    flex: 0.4,
    // backgroundColor: '#e3e3e3',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // elevation: 10,
    // shadowColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input_text: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 15,
    color: '#77869E',
    letterSpacing: 2,
  },
  btn_container: {
    marginTop: 10,
  },
  button: {
    // backgroundColor: 'yellow',
  },
});
