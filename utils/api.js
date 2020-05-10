import { AsyncStorage } from "react-native";

export const FLASHCARD_STORAGE_KEY = "UdaciCards:flashcards";

export async function saveDeckTitle(deck) {
  let uuid = guidGenerator();

  let decks = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);

  if (decks !== null) {
    await AsyncStorage.mergeItem(
      FLASHCARD_STORAGE_KEY,
      JSON.stringify({
        [uuid]: deck
      })
    );
  } else {
    await AsyncStorage.setItem(
      FLASHCARD_STORAGE_KEY,
      JSON.stringify({
        [uuid]: deck
      })
    );
  }
  return uuid;
}

export function removeDeck(key) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
}

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY, (err, result) => {
    return result;
  });
}

export async function getDeck(key) {
  let result = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
  return JSON.parse(result)[key];
}

export async function addCardToDeck(key, card) {
  let uuid = guidGenerator();

  let result = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
  let deck = JSON.parse(result)[key];

  let newDeck = {
    cards: {
      [uuid]: card
    }
  };

  let updatedDeck = { ...deck, ...newDeck };
  let fullResult = JSON.parse(result);
  fullResult[key] = updatedDeck;
  await AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify(fullResult)
  );
}
// This function was taken from: http://guid.us/GUID/JavaScript
function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
