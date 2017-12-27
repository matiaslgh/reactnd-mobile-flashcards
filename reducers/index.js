import * as types from '../actions/types'

const initial = {
  currentDeck: {
    title: '',
    questions: []
  },
  allDecks: []
}

export default (state = initial, action) => {
  switch (action.type) {
    case types.GET_ALL_DECKS:
      return {
        ...state,
        allDecks: action.decks
      }
    case types.CREATE_DECK:
      return {
        ...state,
        allDecks: [...state.allDecks, {
          title: action.deck.title,
          cardsCount: 0
        }]
      }
    case types.CHANGE_DECK:
      return {
        ...state,
        currentDeck: action.deck
      }
    default:
      return state
  }
}