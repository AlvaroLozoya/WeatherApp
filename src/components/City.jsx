import { StyleSheet, Text, View, Image} from 'react-native'
import Subtitle from './Subtitle'
import Title from './Title'
import LottieView from 'lottie-react-native';
import Animation from './Animation';

const City = (props) => {
    console.log(JSON.stringify(props.data));
  return (
    <View style={[styles.container, styles.back]}>
        <>
            <View style={styles.img}>
                <Animation animation={props.data.weather[0].main}/>   
            </View>
            <View style={styles.subcontainer}>
                <Title title={props.data.name}/>
                <Subtitle subtitle={props.data.weather[0].main}/>
                <Subtitle subtitle={props.data.main.temp+'ºC'}/>
            </View>
        </>
    </View>
  )
}

export default City

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
        width: '100%',
        flexDirection: 'row',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        
        
    },
    back: {
        backgroundColor: '#666666CC', 
        
        
    },
    img: {
        width: 100,
        height: 100,
        opacity: 1,
        
        
    },
    subcontainer: {
        margin: '10%',
        
    }


})