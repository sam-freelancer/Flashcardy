import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  deckListContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  vericallyCenteredContainer: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  text: {
    fontSize: 42
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  disabledButton: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "gray",
    marginTop: 25,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  deckCard: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "#ffffff",
    elevation: 2
  }, 
  deckTitleInput: {
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 25,
    paddingLeft:200
  },
  createDeckBtn: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 15,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  deckTitleText: {
    fontSize: 42,
    paddingTop: 50
  },
  button: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 5,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  deleteDeckButton: {
    paddingTop: 25
  },
  questionsLeftText: {
    marginTop: 50,
    fontSize: 20
  },
  questionText: {
    marginTop: 50
  },
  answerText: {
    marginTop: 10
  },
  button: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 25,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  quizResultsTitle: {
    fontSize: 42,
    paddingTop: 25
  },
  scoreText: {
    fontSize: 20,
    paddingTop: 10
  },
  deckTitleInput: {
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 25
  },

  createDeckBtnDisabled: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "gray",
    marginTop: 20,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  questionsLeftText: {
    marginTop: 50
  },
  questionText: {
    marginTop: 50
  },
  answerText: {
    marginTop: 10
  },
  button: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#0377fc",
    color:"white",
    marginTop: 25,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  quizResultsTitle: {
    fontSize: 42,
    paddingTop: 25
  },
  scoreText: {
    fontSize: 20,
    paddingTop: 10
  },
  createDeckBtnActive: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#0377fc",
    marginTop: 10,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
});
