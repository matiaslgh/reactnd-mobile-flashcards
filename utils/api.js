import { AsyncStorage } from 'react-native'

export const fetchAllDecks = () =>
  AsyncStorage.getAllKeys().then( keys =>
    AsyncStorage.multiGet(keys).then( stores =>
      stores.map( mapDeck => {
        const deck = JSON.parse(mapDeck[1])
        return {
          title: deck.title,
          cardsCount: deck.questions.length
        }
      })
    )
  )

export const addDeck = deck =>
  AsyncStorage.setItem(deck.title, JSON.stringify(deck))

export const fetchDeck = key =>
  AsyncStorage.getItem(key).then(deck => JSON.parse(deck))