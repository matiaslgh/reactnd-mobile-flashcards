import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Deck from './Deck'

class DeckList extends Component {

  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }

  render() {
    const decks = Object.keys(this.state.decks).map(key => ({
      key,
      title: this.state.decks[key].title,
      cardsCount: this.state.decks[key].questions.length
    }))
    return (
      <FlatList
        data={decks}
        renderItem={({item}) => <Deck title={item.title} cardsCount={item.cardsCount} />}
      />
    )
  }
}

export default DeckList