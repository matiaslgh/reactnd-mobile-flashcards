import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    padding: 30
  }
})

const EmptyDeckList = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>There are not decks to show</Text>
    <Button
      onPress={ () => navigation.navigate('CreateDeck') }
      title="Create a new deck"
      color="#3f51b5"
    />
  </View>
)

export default EmptyDeckList