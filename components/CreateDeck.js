import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDeck, changeDeck } from '../actions/decksAction'
import PropTypes from 'prop-types'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { Button, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import { NavigationActions } from 'react-navigation'

class CreateDeck extends Component {

  static propTypes = {
    createDeck: PropTypes.func.isRequired,
    changeDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  state = {
    deckName: '',
    empty: false
  }

  onChangeText = deckName => {
    const empty = deckName === ''
    this.setState({ deckName, empty })
  }

  resetNavStackAndGoToIndividualDeckView = () =>
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'DeckList' }),
        NavigationActions.navigate({ routeName: 'IndividualDeck' }),
      ]
    }))

  submit = () => {
    const { deckName } = this.state
    const { createDeck, changeDeck } = this.props
    if (deckName !== '') {
      createDeck({
        title: deckName,
        cards: []
      })
      Keyboard.dismiss()
      changeDeck(deckName)
      this.resetNavStackAndGoToIndividualDeckView()
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
  createDeck: deck => dispatch(createDeck(deck)),
  changeDeck: title => dispatch(changeDeck(title))
})

export default connect(()=>({}), mapDispatchToProps)(CreateDeck)