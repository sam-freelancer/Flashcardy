import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";
import { addCardToDeck } from "../utils/api";
import styles from "../utils/Styles";

class AddCard extends React.Component {
  state = {
    currentDeck: this.props.navigation.getParam("deckId", "deckId"),
    questionText: "",
    answerText: ""
  };

  addCardPressed = e => {
    let deckId = this.state.currentDeck;
    let card = {
      question: this.state.questionText,
      answer: this.state.answerText
    };
    addCardToDeck(deckId, card);
    this.setState({
      questionText: "",
      answerText: ""
    });
  };

  render() {
    let buttonDisabled =
      this.state.questionText === "" || this.state.answerText === "";

    return (
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.deckTitleInput}
          onChangeText={text => this.setState({ questionText: text })}
          value={this.state.questionText}
          placeholder=" Question"
        />
        <TextInput
          style={styles.deckTitleInput}
          onChangeText={text => this.setState({ answerText: text })}
          value={this.state.answerText}
          placeholder=" Answer"
        />
        <TouchableOpacity
          style={
            buttonDisabled
              ? styles.createDeckBtnDisabled
              : styles.createDeckBtnActive
          }
          onPress={this.addCardPressed}
          disabled={buttonDisabled}
        >
          <Text style={{ color:"#ffffff" }}>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddCard;
