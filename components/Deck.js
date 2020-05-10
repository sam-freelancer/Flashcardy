import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getDeck, removeDeck } from "../utils/api";
import styles from "../utils/Styles";
import { NavigationEvents } from "react-navigation";
class Deck extends React.Component {
  state = {
    currentDeck: {},
    deckId: this.props.navigation.getParam("deckId", "deckId")
  };
  addCardPressed = e => {
    this.props.navigation.navigate("AddCardView", {
      deckId: this.state.deckId
    });
  };
  deleteDeckPressed = e => {
    removeDeck(this.state.deckId)
      .then(result => {
        this.props.navigation.navigate("Decks");
      })
      .catch(error => {
        console.log(error);
      });
  };
  updateDeck() {
    getDeck(this.state.deckId)
      .then(result => {
        this.setState({
          currentDeck: result
        });
        this.props.navigation.setParams({ title: result.deckTitle });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.updateDeck();
  }
  quizViewPressed = e => {
    this.props.navigation.navigate("QuizView", {
      currentDeck: this.state.currentDeck,
      deckTitle: this.state.currentDeck.deckTitle
    });
  };
  render() {
    const NoCardsFound = this.state.currentDeck.cards === undefined;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <NavigationEvents
          onWillFocus={payload => this.updateDeck()}
          onDidFocus={payload => this.updateDeck()}
        />
        <Text style={styles.deckTitleText}>
          {this.state.currentDeck.deckTitle}
        </Text>
        <Text>
          {this.state.currentDeck.cards
            ? Object.keys(this.state.currentDeck.cards).length
            : 0}{" "}
          Cards
        </Text>
        <TouchableOpacity
          style={[styles.button, { marginTop: 150 }]}
          onPress={this.addCardPressed}
        >
          <Text style={{ color:"#ffffff" }}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            NoCardsFound
              ? styles.disabledButton
              : styles.button
          }
          onPress={this.quizViewPressed}
          disabled={NoCardsFound}
        >
          <Text style={{ color:"#ffffff" }}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteDeckButton}
          onPress={this.deleteDeckPressed}
        >
          <Text style={{ color: "red" }}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;
