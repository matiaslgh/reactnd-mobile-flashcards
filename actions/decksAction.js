import * as types from './types'
import { fetchAllDecks, addDeck, fetchDeck } from '../utils/api'

export const getAllDecks = () => dispatch =>
  fetchAllDecks().then(decks => dispatch({
    type: types.GET_ALL_DECKS,
    decks
  }))

export const createDeck = deck => {
  addDeck(deck)
  return {
    type: types.CREATE_DECK,
    deck
  }
}

export const changeDeck = key => dispatch =>
  fetchDeck(key).then(deck => dispatch({
    type: types.CHANGE_DECK,
    deck
  }))