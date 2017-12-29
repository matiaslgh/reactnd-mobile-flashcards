import * as types from '../actions/types'

const initial = {
  score: {
    incorrects: 0,
    corrects: 0
  },
  currentCard: {
    question: '',
    answer: ''
  },
  currentDeck: {
    title: '',
    cards: []
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
    case types.ADD_CARD:
      return {
        ...state,
        currentDeck: {
          ...state.currentDeck,
          cards: [...state.currentDeck.cards, action.card]
        },
        allDecks: state.allDecks.map(deck =>
          deck.title !== action.title ?
            deck :
            {title: deck.title, cardsCount: deck.cardsCount + 1}
        )
      }
    case types.CHANGE_CARD:
      return {
        ...state,
        currentCard: action.card
      }
    case types.UPDATE_SCORE:
      return {
        ...state,
        score: action.score
      }
    default:
      return state
  }
}