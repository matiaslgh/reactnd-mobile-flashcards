import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/decksAction'
import PropTypes from 'prop-types'
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements'
import { Button, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'

const RequiredField = () => (
  <FormValidationMessage>
    {'This field is required'}
  </FormValidationMessage>
)

class AddCard extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    addCard: PropTypes.func.isRequired
  }

  state = {
    question: '',
    questionEmpty: false,
    answer: '',
    answerEmpty: false
  }

  validate = (input, element) => {
    const empty = input === ''
    console.log(`Input: ${input} - ${empty}`)
    this.setState({
      [element]: input,
      [element + 'Empty']: empty
    })
  }

  submit = () => {
    const { addCard, title } = this.props
    const { question, answer } = this.state
    if (question && answer) {
      addCard(title, { answer, question })
      Keyboard.dismiss()
      this.props.navigation.goBack()
      return true
    }
    this.validate(question, 'question')
    this.validate(answer, 'answer')
    return false
  }

  render() {
    const { questionEmpty, answerEmpty } = this.state
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={(input) => this.validate(input, 'question')}/>
        {questionEmpty && (<RequiredField />)}
        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={(input) => this.validate(input, 'answer')}/>
        {answerEmpty && (<RequiredField />)}
        <Button
          onPress={this.submit}
          title="Add Card"
          color="#3f51b5"
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

const mapStateToPtops = ({ currentDeck }) => ({
  title: currentDeck.title
})

const mapDispatchToProps = dispatch => ({
  addCard: (title, card) => dispatch(addCard(title, card))
})

export default connect(mapStateToPtops, mapDispatchToProps)(AddCard)