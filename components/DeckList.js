import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions/decksAction'
import { FlatList, View, Text, Button } from 'react-native'
import ActionButton from 'react-native-action-button'
import Deck from './Deck'
import EmptyDeckList from './EmptyDeckList'

class DeckList extends Component {

  componentDidMount() {
    !this.props.allDecks.length && this.props.getAllDecks()
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
          renderItem={({item}) => <Deck title={item.title} cardsCount={item.cardsCount} />}
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
  getAllDecks: () => dispatch(getAllDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)