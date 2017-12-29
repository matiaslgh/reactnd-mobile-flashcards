import React from 'react'
import { connect } from 'react-redux'
import { changeCard, updateScore } from '../actions/decksAction'
import PropTypes from 'prop-types'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

const Answer = ({ question, answer, cards, count, score, changeCard, updateScore, navigation }) => {

  const incrementCorrects = () => {
    const correctsCount = score.corrects
    updateScore({
      ...score,
      corrects: correctsCount + 1
    })
  }

  const incrementIncorrects = () => {
    const incorrectsCount = score.incorrects
    updateScore({
      ...score,
      incorrects: incorrectsCount + 1
    })
  }

  const resetNavStackAndGoToScoreView = () =>
    navigation.dispatch(NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'DeckList' }),
        NavigationActions.navigate({ routeName: 'IndividualDeck' }),
        NavigationActions.navigate({ routeName: 'Score' })
      ]
    }))

  const nextCard = updateScoreCallback => {
    updateScoreCallback()
    if (count < cards.length) {
      changeCard(cards[count])
      navigation.goBack()
    } else {
      resetNavStackAndGoToScoreView()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.answerText}>{answer}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Correct"
          color="green"
          onPress={() => nextCard(incrementCorrects)} />
        <Button
          title="Incorrect"
          color="red"
          onPress={() => nextCard(incrementIncorrects)} />
      </View>
      <Text>{`${count}/${cards.length}`}</Text>
    </View>
  )
}

Answer.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  changeCard: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  score: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = ( { currentCard, currentDeck, score }) => ({
  question: currentCard.question,
  answer: currentCard.answer,
  cards: currentDeck.cards,
  count: score.incorrects + score.corrects + 1,
  score
})

const mapDispatchToProps = dispatch => ({
  changeCard: card => dispatch(changeCard(card)),
  updateScore: score => dispatch(updateScore(score))
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  answerText: {
    fontSize: 30
  },
  buttonsContainer: {
    flex: 0.2,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Answer)