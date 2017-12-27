import { AsyncStorage } from 'react-native'

export const fetchAllDecks = () =>
  AsyncStorage.getAllKeys()
    .then(decks => {
      const allDecks = JSON.parse(decks)
      return !allDecks ?
        [] :
        Object.keys(allDecks).map(key => ({
          title: allDecks[key].title,
          cardsCount: allDecks[key].questions.length
        }))
    })

export const addDeck = deck =>
  AsyncStorage.setItem(deck.title, JSON.stringify(deck))