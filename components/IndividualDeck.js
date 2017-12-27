import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Button } from 'react-native'
import Deck from './Deck'

const IndividualDeck = ({ navigation, title, cardsCount }) => (
  <View style={{flex:1,justifyContent:'space-around'}}>
    <Deck title={title} cardsCount={cardsCount} />
    <View style={{flex:0.25, justifyContent:'space-around'}}>
      <Button
        onPress={ () => navigation.navigate('AddCard') }
        title="Add Card"
        color="#3f51b5"
      />
      <Button
        onPress={ () => navigation.navigate('StartQuiz') }
        title="Start Quiz"
        color="#5ec639"
      />
    </View>
  </View>
)

IndividualDeck.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cardsCount: PropTypes.number.isRequired
}

const mapStateToProps = ({ currentDeck }) => ({
  title: currentDeck.title,
  cardsCount: currentDeck.questions.length
})

export default connect(mapStateToProps, ()=>({}))(IndividualDeck)