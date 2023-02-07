import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Viento from '../assets/Viento.json';
import Humedad from '../assets/Humedad.json';
import Altitud from '../assets/Altitud.json';
import walkNubladoTotal from '../assets/walk-nublado-total.json';
import walkSoleado from '../assets/walk-soleado.json';
import walkLluvia from '../assets/walk-lluvia.json';
import walkMedioNublado from '../assets/hollowWalk.json';
import walk from '../assets/walk.json';
import presionAtmos from '../assets/presionAtmos.json';

const Animation = (props) => {
   if (props.animation === '1'){
    return (
        <>
          <View style={styles.container}>
            <LottieView source={Viento} autoPlay loop style={styles.img} />
          </View>
        </>
      )
   }else if (props.animation === '2'){
    return (
        <>
          <View style={styles.container}>
            <LottieView source={Humedad} autoPlay loop style={styles.img2} />
          </View>
        </>
      )
   }else if (props.animation === '3'){
    return (
        <>
          <View style={styles.container}>
            <LottieView source={Altitud} autoPlay loop style={styles.img5} />
          </View>
        </>
      )
   }else if (props.animation === '4'){
    return (
        <>
          <View style={styles.container}>
            <LottieView source={presionAtmos} autoPlay loop style={styles.img3} />
          </View>
        </>
      )
   }else if (props.animation === 'Haze'){
    return (
      <>
        <View style={styles.container}>
          <LottieView source={walkNubladoTotal} autoPlay loop style={styles.img4} />
        </View>
      </>
    )
   }else if (props.animation === 'Clear'){
    return (
      <>
        <View style={styles.container}>
          <LottieView source={walkSoleado} autoPlay loop style={styles.img4} />
        </View>
      </>
    )
   }else if (props.animation === 'Drizzle'){
    return (
      <>
        <View style={styles.container}>
          <LottieView source={walkLluvia} autoPlay loop style={styles.img4} />
        </View>
      </>
    )
   }else if (props.animation === 'Partly cloudy'){
    return (
      <>
        <View style={styles.container}>
          <LottieView source={walkMedioNublado} autoPlay loop style={styles.img4} />
        </View>
      </>
    )
   }else {
    <>
        <View style={styles.container}>
          <LottieView source={walk} autoPlay loop style={styles.img4} />
        </View>
      </>
   }
   
}

export default Animation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    
      },
      img: {
        width: 100,
        height: 100,
      },
      img2: {
        width: 80,
        height: 80,
      },
      img3: {
        width: 65,
        height: 65,
        marginRight: '5%',
      },
      img4: {
        width: 125,
        height: 125,
        marginRight: '5%',
      },
      img5: {
        width: 85,
        height: 85,
      },
      container2: {
        marginLeft: '-2%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
      },
      bgcolor: {
        backgroundColor: '#666666AA',
    
      }
})