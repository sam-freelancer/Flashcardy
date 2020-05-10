import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../utils/Styles";
import { clearLocalNotifications, setLocalNotification } from "../utils/helpers";

class QuizResultsView extends React.Component {

  componentDidMount() {
    clearLocalNotifications().then(setLocalNotification);
  }

  state = {
    numberCorrect: this.props.numberCorrect,
    currentQuestion: this.props.currentQuestion
  };

  render() {
    return (
      <View style={styles.vericallyCenteredContainer}>
        <Text style={styles.quizResultsTitle}>Quiz Results</Text>
        <Text style={styles.scoreText}>
          Score: {this.state.numberCorrect} / {this.state.currentQuestion}
        </Text>
        <TouchableOpacity
          style={[styles.button, { marginTop: 150 }]}
          onPress={this.props.restartQuizPressed}
        >
          <Text style={{ color:"#ffffff" }}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.backToDeckPressed}
        >
          <Text>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizResultsView;
