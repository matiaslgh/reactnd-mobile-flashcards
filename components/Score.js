import React from 'react'
import { connect } from 'react-redux'
import { updateScore } from '../actions/decksAction'
import PropTypes from 'prop-types'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

const Score = ({ corrects, incorrects, resetScore, navigation }) => {

  const resetNavStackAndGoToQuestionView = () =>
    navigation.dispatch(NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'DeckList' }),
        NavigationActions.navigate({ routeName: 'IndividualDeck' }),
        NavigationActions.navigate({ routeName: 'Question' })
      ]
    }))

  const resetQuiz = () => {
    resetScore()
    resetNavStackAndGoToQuestionView()
  }

  const total = corrects + incorrects
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`You have answered ${total} questions`}
      </Text>
      <Text style={[styles.text, styles.greenText]}>
        {`${corrects} correct answers (${Math.round(corrects * 100 / total)}%)`}
      </Text>
      <Text style={[styles.text, styles.redText]}>
        {`${incorrects} incorrect answers (${Math.round(incorrects * 100 / total)}%)`}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Try again"
          color="green"
          onPress={resetQuiz} />
        <Button
          title="Return to deck"
          color="#3f51b5"
          onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

Score.propTypes = {
  corrects: PropTypes.number.isRequired,
  incorrects: PropTypes.number.isRequired,
  resetScore: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = ({ score }) => score

const mapDispatchToProps = dispatch => ({
  resetScore: () => dispatch(updateScore({
    corrects: 0,
    incorrects: 0
  }))
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20
  },
  redText: {
    color: 'red'
  },
  greenText: {
    color: 'green'
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'space-between'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Score)