import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text, Button, StyleSheet } from 'react-native'

const Question = ({ question, count, total, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.questionText}>{question}</Text>
    <Button
      title="Show Answer"
      color="#3f51b5"
      onPress={() => navigation.navigate('Answer')} />
    <Text>{`${count}/${total}`}</Text>
  </View>
)

Question.propTypes = {
  question: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = ({ currentCard, currentDeck, score }) => ({
  question: currentCard.question,
  count: score.incorrects + score.corrects + 1,
  total: currentDeck.cards.length
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  questionText: {
    fontSize: 30
  }
})

export default connect(mapStateToProps, ()=>({}))(Question)