import { StackNavigator } from 'react-navigation'
import Expo from 'expo'
import DeckList from '../components/DeckList'
import CreateDeck from '../components/CreateDeck'

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
  }
})

export default RootNavigator