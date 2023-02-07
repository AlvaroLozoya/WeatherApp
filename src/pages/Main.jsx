import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import {useEffect, useState} from 'react';
import SplasScreen from './SplasScreen';
import Home from './Home';
import Geolocation from 'react-native-geolocation-service';





const Main = () => {
  const [data, setData] = useState();
  const [location, setLocation] = useState(false);
  const [viewLocation, isViewLocation] = useState([])
  const [latitud, setlatitud] = useState(null);
  const [longitud, setlongitud] = useState(null);
  const [daleya, dale] = useState(false);

  useEffect(() => {
    requestLocationPermission();
    getLocation();
    isViewLocation(location);
  }, [])
  

  useEffect(() => {  
    if (latitud === null){
      setlatitud(40.4165000);
      setlongitud(-3.7025600);
     }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=fbdef325d13d5c90afaecb96fe1b8b9a&units=metric`)
  .then(response => response.json())
  .then(response =>setData(response));
  }, [longitud]);

  
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

   
    
    const getLocation = () => {
      const result = requestLocationPermission();
      result.then(res => {
        console.log('location:', res);
        if (res) {
          Geolocation.getCurrentPosition(
            position => {
              console.log(position);
              setLocation(position);
              setlatitud(position.coords.latitude);
              setlongitud(position.coords.longitude);
              if (latitud === null){
                setlatitud(40.4165000);
                setlongitud(-3.7025600);
               }
            },
            error => {
              console.log(error.code, error.message);
              setLocation(false);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      });
      console.log(location);
    };
  
  
  const [time, isTime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      isTime(true);
  }, 5000);
  if(time){
    return(true);
  }
  }, [])
  return(
    !time ? <SplasScreen/> : <Home data={data}/>
  )
}

export default Main

const styles = StyleSheet.create({})