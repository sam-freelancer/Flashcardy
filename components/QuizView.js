import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QuizResultsView from "./QuizResultsView";
import styles from "../utils/Styles";

class QuizView extends React.Component {
  state = {
    currentDeck: this.props.navigation.getParam("currentDeck", {}),
    showAnswer: false,
    numberCorrect: 0,
    questions: Object.keys(
      this.props.navigation.getParam("currentDeck", {}).cards
    ),
    currentQuestion: 0
  };

  showAnswerPressed = e => {
    this.setState({
      showAnswer: true
    });
  };

  correctPressed = e => {
    this.setState({
      numberCorrect: this.state.numberCorrect + 1,
      currentQuestion: this.state.currentQuestion + 1,
      showAnswer: false
    });
  };

  incorrectPressed = e => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      showAnswer: false
    });
  };

  restartQuizPressed = e => {
    this.setState({
      numberCorrect: 0,
      currentQuestion: 0,
      showAnswer: false
    });
  };

  backToDeckPressed = e => {
    const { goBack } = this.props.navigation;
    goBack(null);
  };

  render() {
    const questionsLeft =
      Object.keys(this.state.currentDeck.cards).length -
      this.state.currentQuestion;

    return (
      <View style={styles.vericallyCenteredContainer}>
        {questionsLeft === 0 ? (
          <QuizResultsView
            currentQuestion={this.state.currentQuestion}
            numberCorrect={this.state.numberCorrect}
            backToDeckPressed={this.backToDeckPressed}
            restartQuizPressed={this.restartQuizPressed}
          />
        ) : (
          <View style={styles.vericallyCenteredContainer}>
            <Text style={styles.questionsLeftText}>
              {Object.keys(this.state.currentDeck.cards).length -
                this.state.currentQuestion}{" "}
              Questions Left
            </Text>
            <Text style={styles.questionText}>
              Question:{" "}
              {
                this.state.currentDeck.cards[
                  this.state.questions[this.state.currentQuestion]
                ].question
              }
            </Text>
            {this.state.showAnswer ? (
              <Text style={styles.answerText}>
                Answer:{" "}
                {
                  this.state.currentDeck.cards[
                    this.state.questions[this.state.currentQuestion]
                  ].answer
                }
              </Text>
            ) : (
              <Text style={styles.answerText} />
            )}
            {this.state.showAnswer ? (
              <View>
                <TouchableOpacity
                  style={[styles.button, { marginTop: 150 }]}
                  onPress={this.correctPressed}
                >
                  <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: "#EC9192"}]}
                  onPress={this.incorrectPressed}
                  disabled={this.state.currentDeck.cards === undefined}
                >
                  <Text>Incorrect</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  style={[styles.button, { marginTop: 150 }]}
                  onPress={this.showAnswerPressed}
                >
                  <Text>Show Answer</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

export default QuizView;
