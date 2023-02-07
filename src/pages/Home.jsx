//useState rerenderiza un componente
//useEffect si los corcheres estan vacios t elo ejecuta cuando entres en la app / vista, si le pasas algo salta ciando quieres
//por ejemplo ponerle tiempo

import { StyleSheet, Text, View, Image } from 'react-native'
import City from '../components/City';
import Info from '../components/Info';



const Home = (props) => {
  
  const data = props.data;
  return (
    <>
      
      <Image source={require('../assets/fondo5.jpg')} style={[styles.back, styles.positions]}/>
      
      <View style={styles.container}>
          <City data={data}/>
          <Info data={data}/>                   
      </View>
    </>
  )
}

export default Home;

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  margin: '7%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  
},
positions: {
 position: 'absolute',
},
back: {
  position: 'relative',
  width: '100%',
  height: '100%',
  
},

    
})

