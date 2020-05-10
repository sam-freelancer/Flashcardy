import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import AddDeck from "./components/AddDeck";
import DecksListView from "./components/DecksListView";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import QuizView from "./components/QuizView";
import { setLocalNotification } from "./utils/helpers";

const TabNavigator = createBottomTabNavigator(
  {
    Decks: {
      screen: DecksListView,
      navigationOptions: {
        title: `Decks`,
        header: null
      }
    },
    AddDeck: AddDeck
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Decks") {
          iconName = `ios-book`;
        } else if (routeName === "AddDeck") {
          iconName = `md-add-circle${focused ? "" : "-outline"}`;
        }

        
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#b5b5b5",
      style: {
        backgroundColor: "#0390fc"
      }
    }
  }
);

const NewStack = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      title: `Decks`,
      headerStyle: {
        backgroundColor: "#0390fc"
      }
    }
  },
  DeckView: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deckTitle}`,
      headerStyle: {
        backgroundColor: "#F1FFFA"
      }
    })
  },
  AddCardView: {
    screen: AddCard,
    navigationOptions: {
      title: `Add Card`,
      headerStyle: {
        backgroundColor: "#F1FFFA"
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deckTitle}`,
      headerStyle: {
        backgroundColor: "#F1FFFA"
      }
    })
  }
});

const AppContainer =  createAppContainer(NewStack);

export default class App extends React.Component {

componentDidMount() {
  setLocalNotification();
}

  render() {
    return(
      <AppContainer />
    )
  }
}
