import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../../components/ButtonComponent';
import DropdownComponent from '../../components/DropdownComponent';
import GetLocation from 'react-native-get-location';
import LoadingScreen from '../LoadingScreen';
import ConfirmScreen from '../ConfirmScreen';

const locations = [
  {key: '1', value: 'Location A', latitude: 21.5465556, longitude: 84.8764722},
  {key: '2', value: 'Location B', latitude: 21.55, longitude: 84.88},
  {key: '3', value: 'Location C', latitude: 21.56, longitude: 84.89},
];

const Home = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const [loading, setLoading] = useState(false); // State to manage modal visibility
  const [confirmVisible, setConfirmVisible] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      GetLocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
        },
        error => console.log(error),
        {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
      );
    };
    getLocation();
  }, []);

  const handleFindDriver = () => {
    // console.warn('DDDDDDD');
    setLoading(true);

    const originLocation = locations.find(loc => loc.value === origin);
    const destinationLocation = locations.find(
      loc => loc.value === destination,
    );

    if (originLocation && destinationLocation) {
      mapRef.current.fitToCoordinates([originLocation, destinationLocation], {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        animated: true,
      });
    }
    setTimeout(() => {
      setLoading(false);
      setConfirmVisible(true);

      setTimeout(() => {
        setConfirmVisible(false);
      }, 2000);
    }, 2000);
  };

  return (
    <View style={styles.main_container}>
      <LoadingScreen visible={loading} />
      <ConfirmScreen visible={confirmVisible} />
      <View style={styles.navbar_container}>
        <View style={styles.home_navbar_text}>
          <Text style={styles.home_navbar_greet}>Welcome back</Text>
          <Text style={styles.home_navbar_name}>Premananda Sahoo</Text>
        </View>
        <View style={styles.home_navbar_icons}>
          <Ionicons name="notifications" size={30} color="black" />
        </View>
      </View>
      <View style={styles.map_container}>
        <MapView
          ref={mapRef}
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={false}
          showsMyLocationButton
          initialRegion={{
            latitude: userLocation ? userLocation.latitude : 21.5465556,
            longitude: userLocation ? userLocation.longitude : 84.8764722,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {userLocation && (
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
            />
          )}
        </MapView>
      </View>
      <View style={styles.input_container}>
        <ScrollView>
          <View>
            <Text style={styles.input_text}>From Location</Text>
            <DropdownComponent
              data={locations}
              placeholder="Select From Location"
              onSelect={setOrigin}
            />
            <Text style={styles.input_text}>To Location</Text>
            <DropdownComponent
              data={locations}
              placeholder="Select To Location"
              onSelect={setDestination}
            />
          </View>
          <View style={styles.btn_container}>
            <ButtonComponent
              title="Find Driver"
              style={styles.button}
              onPress={handleFindDriver}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

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
  map_container: {
    flex: 0.5,
  },
  input_container: {
    flex: 0.4,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
  button: {},
});

export default Home;
