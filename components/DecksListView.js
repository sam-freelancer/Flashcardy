import React from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  Animated
} from "react-native";
import { getDecks } from "../utils/api";
import { NavigationEvents } from "react-navigation";
import styles from "../utils/Styles";

class DecksListView extends React.Component {
  state = {
    DecksList: {},
    bounceValue: new Animated.Value(1),
    deckSelected: ""
  };

  componentDidMount() {
    this.getDecksToDisplay();
  }

  getDecksToDisplay() {
    getDecks().then(result => {
      this.setState({
        DecksList: JSON.parse(result)
      });
    });
  }

  openDeck = e => {
    this.setState({
      deckSelected: e
    });

    Animated.sequence([
      Animated.timing(this.state.bounceValue, { duration: 100, toValue: 4 }),
      Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4 })
    ]).start(() => {
      this.props.navigation.navigate("DeckView", {
        deckId: e,
        deckTitle: this.state.DecksList[e].deckTitle
      });
    });
  };

  render() {
    const { DecksList, bounceValue } = this.state;

    return (
      <SafeAreaView style={styles.deckListContainer}>
        <NavigationEvents
          onWillFocus={payload => this.getDecksToDisplay()}
          onDidFocus={payload => this.getDecksToDisplay()}
        />
        {DecksList ? (
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            data={Object.keys(DecksList)}
            extraData={DecksList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.deckCard}
                onPress={this.openDeck.bind(this, item)}
              >
                <Animated.Text
                  style={
                    this.state.deckSelected === item
                      ? [styles.item, { transform: [{ scale: bounceValue }] }]
                      : styles.item
                  }
                  key={item}
                >
                  {DecksList[item].deckTitle}
                </Animated.Text>
                <Text style={styles.item} key={DecksList[item].deckTitle}>
                  {DecksList[item].cards
                    ? Object.keys(DecksList[item].cards).length
                    : 0}{" "}
                  Cards
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={{ fontSize: 20,textAlign: 'center' }}>No Decks found</Text>
        )}
      </SafeAreaView>
    );
  }
}

export default DecksListView;
