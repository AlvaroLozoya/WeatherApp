import { StyleSheet, Text, View } from 'react-native'

const Title = (props) => {
  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
    </>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})