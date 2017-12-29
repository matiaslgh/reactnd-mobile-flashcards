import React from 'react'
import { connect } from 'react-redux'
import { changeCard, updateScore } from '../actions/decksAction'
import PropTypes from 'prop-types'
import { View, Button } from 'react-native'
import Deck from './Deck'

const IndividualDeck = ({ navigation, title, cards, changeCard, resetScore }) => {
  const startQuiz = () => {
    if (cards.length) {
      resetScore()
      changeCard({
        ...cards[0],
        count: 1
      })
      navigation.navigate('Question')
    }
  }
  return (
    <View style={{flex:1,justifyContent:'space-around'}}>
      <Deck title={title} cardsCount={cards.length} />
      <View style={{flex:0.25, justifyContent:'space-around'}}>
        <Button
          onPress={ () => navigation.navigate('AddCard') }
          title="Add Card"
          color="#3f51b5"
        />
        <Button
          onPress={startQuiz}
          disabled={!cards.length}
          title="Start Quiz"
          color="#5ec639"
        />
      </View>
    </View>
  )
}

IndividualDeck.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  changeCard: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired
}

const mapStateToProps = ({ currentDeck }) => ({
  title: currentDeck.title,
  cards: currentDeck.cards
})

mapDispatchToProps = dispatch => ({
  changeCard: card => dispatch(changeCard(card)),
  resetScore: () => dispatch(updateScore({
    corrects: 0,
    incorrects: 0
  }))
})

export default connect(mapStateToProps, mapDispatchToProps)(IndividualDeck)