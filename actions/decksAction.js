import * as types from './types'
import api from '../utils/api'

export const getAllDecks = () => dispatch =>
  api.fetchAllDecks().then(decks => dispatch({
    type: types.GET_ALL_DECKS,
    decks
  }))

export const createDeck = deck => {
  api.addDeck(deck)
  return {
    type: types.CREATE_DECK,
    deck
  }
}

export const changeDeck = key => dispatch =>
  api.fetchDeck(key).then(deck => dispatch({
    type: types.CHANGE_DECK,
    deck
  }))

export const addCard = (title, card) => {
  api.addCard(title, card)
  return {
    type: types.ADD_CARD,
    title,
    card
  }
}