import { StackNavigator } from 'react-navigation'
import Expo from 'expo'
import DeckList from '../components/DeckList'
import CreateDeck from '../components/CreateDeck'
import IndividualDeck from '../components/IndividualDeck'
import AddCard from '../components/AddCard'
import Question from '../components/Question'
import Answer from '../components/Answer'

const RootNavigator =  StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: "Cards",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#3f51b5",
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: "Create a new Deck",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#3f51b5",
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#3f51b5",
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#3f51b5",
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  },
  Question: {
    screen: Question,
    navigationOptions: {
      title: "Question",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#3f51b5",
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  },
  Answer: {
    screen: Answer,
    navigationOptions: {
      title: "Answer",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#3f51b5",
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  }
})

export default RootNavigator