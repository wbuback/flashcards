import {AsyncStorage} from 'react-native';
const FLASHCARDS_STORAGE_KEY = '@FLASHCARDS_APP';

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    return JSON.parse(results);
  });
}

export function getDeck(key) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data[key];
  });
}

export function saveDeckTitle({title, key}) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [key]: {
        title: title,
        questions: [],
      },
    }),
  );
}

export function submitQuestion(deck, key) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [key]: deck,
    }),
  );
}