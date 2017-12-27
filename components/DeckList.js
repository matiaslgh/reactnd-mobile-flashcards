import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllDecks, changeDeck } from '../actions/decksAction'
import PropTypes from 'prop-types'
import { FlatList, View, Text, Button, TouchableOpacity } from 'react-native'
import ActionButton from 'react-native-action-button'
import Deck from './Deck'
import EmptyDeckList from './EmptyDeckList'

class DeckList extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    allDecks: PropTypes.array.isRequired,
    getAllDecks: PropTypes.func.isRequired,
    changeDeck: PropTypes.func.isRequired
  }

  componentDidMount() {
    !this.props.allDecks.length && this.props.getAllDecks()
  }

  handleOnPress = title => {
    const { navigation, changeDeck } = this.props
    changeDeck(title)
    navigation.navigate('IndividualDeck')
  }

  render() {
    const { allDecks, navigation } = this.props
    if (!allDecks.length) {
      return ( <EmptyDeckList navigation={navigation} /> )
    }
    return (
      <View style={{flex:1}}>
        <FlatList
          data={allDecks}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.handleOnPress(item.title)}>
              <Deck title={item.title} cardsCount={item.cardsCount} />
            </TouchableOpacity>
          )}
        />
        <ActionButton
          buttonColor="#3f51b5"
          onPress={ () => navigation.navigate('CreateDeck') }
        />
      </View>
    )
  }
}

const mapStateToProps = ({ allDecks }) => ({
  allDecks
})

const mapDispatchToProps = dispatch => ({
  getAllDecks: () => dispatch(getAllDecks()),
  changeDeck: title => dispatch(changeDeck(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)