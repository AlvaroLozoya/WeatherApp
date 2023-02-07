import { StyleSheet, Text, View } from 'react-native'


const Subtitle = (props) => {
  return (
    <>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        color: 'white',
    }
})