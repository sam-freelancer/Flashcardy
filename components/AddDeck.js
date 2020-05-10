import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { saveDeckTitle, getDecks } from "../utils/api";
import styles from "../utils/Styles";
class AddDeck extends React.Component {
  state = {
    inputText: "",
    DecksList: {}
  };

  render() {
    return (
      <View style={styles.viewContainer}>

        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={styles.deckTitleInput}
          onChangeText={text => this.setState({ inputText: text })}
          value= {this.state.inputText}
          placeholder=" Deck title"
        />
        <TouchableOpacity
          style={styles.createDeckBtnActive}
          onPress={this.createDeckPressed}
        >
          <Text style={{ color:"#ffffff" }}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }

  createDeckPressed = e => {
    let deck = {
      deckTitle: this.state.inputText
    };
    this.setState({
        inputText: ""
      });
    saveDeckTitle(deck).then(deckId => {
      let newDeckId = deckId;
      getDecks().then(result => {
        this.props.navigation.navigate("DeckView", {
          deckId: newDeckId,
          deckTitle: JSON.parse(result)[newDeckId].deckTitle
        });
      });
    });
  };
}

export default AddDeck;
