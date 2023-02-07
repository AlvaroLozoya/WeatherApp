import { StyleSheet, Text, View, Image} from 'react-native';
import { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import City from '../components/City';


const SplasScreen = () => {

  const [time, isTime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      isTime(true);
    }, 5000);
    if (time) {
      return (true);
    }
  }, [])

  if (!time) {
    return (
      <>
        <Image source={require('../assets/fondo_SplashScreen1.jpg')} style={[styles.back]} />
        <View style={styles.lottie}>
          <LottieView source={require('../assets/mantisParedDerecha.json')} autoPlay loop />
          <LottieView source={require('../assets/mantisParedIzquierda.json')} autoPlay loop />
        </View>

      </>
    )
  }
}

export default SplasScreen

const styles = StyleSheet.create({
  lottie: {
    width: '100%',
    height: '100%',
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
  },
  back: {
    position: 'relative',
    opacity: 0.7,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
 
})