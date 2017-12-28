import { AsyncStorage } from 'react-native'

const fetchAllDecks = () =>
  AsyncStorage.getAllKeys().then( keys =>
    AsyncStorage.multiGet(keys).then( stores =>
      stores.map( mapDeck => {
        const deck = JSON.parse(mapDeck[1])
        return {
          title: deck.title,
          cardsCount: deck.cards.length
        }
      })
    )
  )

const addDeck = deck =>
  AsyncStorage.setItem(deck.title, JSON.stringify(deck))

const fetchDeck = key =>
  AsyncStorage.getItem(key).then(deck => JSON.parse(deck))

const addCard = (title, card) =>
  AsyncStorage.getItem(title).then(result => {
    const deck = JSON.parse(result)
    deck.cards.push(card)
    AsyncStorage.mergeItem(title, JSON.stringify({
      cards: deck.cards
    }))
  })

export default {
  fetchAllDecks,
  addDeck,
  fetchDeck,
  addCard
}