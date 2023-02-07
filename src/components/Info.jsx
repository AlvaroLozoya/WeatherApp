import { StyleSheet, Text, View } from 'react-native'
import Infobox from './Infobox';
import Title from './Title'

const Info = (props) => {
  return (
    <>
        <View style={styles.container}>
            <Infobox style={styles.margin} infotitle='Viento' infosubtitle={props.data.wind.speed+'km/h'} animation='1'/>
            <Infobox style={styles.margin} infotitle='Humedad' infosubtitle={props.data.main.humidity+'%'} animation='2'/>
        </View>
        <View style={styles.container}>
            <Infobox style={styles.margin} infotitle='Temp.Max' infosubtitle={props.data.main.temp_max+'ºC'} animation='3'/>
            <Infobox style={styles.margin} infotitle='P.Atmos'infosubtitle={props.data.main.pressure+' bar'} animation='4'/>
        </View>
    </>
  )
}

export default Info;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    margin: {
        margin: '2%',

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
})