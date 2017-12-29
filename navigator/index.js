import { StackNavigator } from 'react-navigation'
import Expo from 'expo'
import DeckList from '../components/DeckList'
import CreateDeck from '../components/CreateDeck'
import IndividualDeck from '../components/IndividualDeck'
import AddCard from '../components/AddCard'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Score from '../components/Score'

const navigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#3f51b5",
    marginTop: Expo.Constants.statusBarHeight
  }
}

const RootNavigator =  StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      ...navigationOptions,
      title: "Cards"
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      ...navigationOptions,
      title: "Create a new Deck"
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      ...navigationOptions,
      title: "Individual Deck"
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions
  },
  Question: {
    screen: Question,
    navigationOptions: {
      ...navigationOptions,
      title: "Question"
    }
  },
  Answer: {
    screen: Answer,
    navigationOptions: {
      ...navigationOptions,
      title: "Answer"
    }
  },
  Score: {
    screen: Score,
    navigationOptions: {
      ...navigationOptions,
      title: "Score"
    }
  }
})

export default RootNavigator