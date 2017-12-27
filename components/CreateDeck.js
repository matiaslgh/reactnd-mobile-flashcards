import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDeck } from '../actions/decksAction'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { Button, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'

class CreateDeck extends Component {

  state = {
    deckName: '',
    empty: false
  }

  onChangeText = deckName => {
    const empty = deckName === ''
    this.setState({ deckName, empty })
  }

  submit = () => {
    const { deckName } = this.state
    if (deckName !== '') {
      this.props.createDeck({
        title: deckName,
        questions: []
      })
      Keyboard.dismiss()
      this.props.navigation.goBack()
    }
    return false
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <FormInput onChangeText={this.onChangeText}/>
        {this.state.empty && (
          <FormValidationMessage>
            {'This field is required'}
          </FormValidationMessage>
        )}
        <Button
          onPress={this.submit}
          title="Create"
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

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck))
})

export default connect(()=>({}), mapDispatchToProps)(CreateDeck)