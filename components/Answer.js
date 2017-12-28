import React from 'react'
import { connect } from 'react-redux'
import { changeCard } from '../actions/decksAction'
import PropTypes from 'prop-types'
import { View, Text, Button, StyleSheet } from 'react-native'

const Answer = ({ question, answer, count, cards, changeCard, navigation }) => {

  const nextCard = callback => {
    callback()
    if (count < cards.length) {
      changeCard({
        ...cards[count],
        count: count + 1
      })
      navigation.goBack()
    } else {
      // show results
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.answerText}>{answer}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Correct"
          color="green"
          onPress={() => nextCard(()=>({}))} />
        <Button
          title="Incorrect"
          color="red"
          onPress={() => nextCard(()=>({}))} />
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
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = ( { currentCard, currentDeck }) => ({
  question: currentCard.question,
  answer: currentCard.answer,
  count: currentCard.count,
  cards: currentDeck.cards
})

const mapDispatchToProps = dispatch => ({
  changeCard: card => dispatch(changeCard(card))
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