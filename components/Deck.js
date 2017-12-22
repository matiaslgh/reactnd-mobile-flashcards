import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Card, Badge } from 'react-native-elements'

const Deck = props => {
  const { title, cardsCount } = props
  return (
    <TouchableOpacity
      onPress={()=>({})}>
        <Card
          title={title}>
            <Badge containerStyle={styles.badgeContainer}>
              <Text style={styles.badgeText}>
                {`${cardsCount} cards`}
              </Text>
            </Badge>
        </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#3f51b5',
    alignSelf: 'center'
  },
  badgeText: {
    color: 'white'
  }
})

Deck.propTypes = {
  title: PropTypes.string.isRequired,
  cardsCount: PropTypes.number.isRequired
}

export default Deck