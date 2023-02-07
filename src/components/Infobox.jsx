import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import Subtitle from './Subtitle';
import Title from './Title'
import Animation from './Animation';

import { useEffect } from 'react';

const Infobox = (props) => {
  
   
      return (
        <>
          <View style={[styles.container, styles.bgcolor]}>
            <Animation animation={props.animation}/>
            <View style={styles.container2}>
              <Title title={props.infotitle} />
              <Subtitle subtitle={props.infosubtitle} />
            </View>
          </View>
        </>
      )
    

}

export default Infobox;

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
  container2: {
    marginRight: '6%',
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