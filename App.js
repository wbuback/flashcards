import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DeckList from './src/components/DeckList';
import DeckForm from './src/components/DeckForm';

import CardForm from './src/components/CardForm';
import DeckCards from './src/components/DeckCards';
import Quiz from './src/components/Quiz';

import reducers from './src/reducers';
import middleware from './src/middleware';

const store = createStore(reducers, middleware);

const StackNavigator = createStackNavigator({
  Home: DeckList,
  AddDeck: DeckForm,
  Deck: DeckCards,
  Quiz,
  AddCard: CardForm,
});
const Stack = createAppContainer(StackNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
}
