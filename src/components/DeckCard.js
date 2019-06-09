import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

function DeckCard(props) {
  const { title, cards, onPress } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.cards}>
        {cards}
        {' '}
cards
      </Text>
      <Button onPress={onPress} title="View cards" />
    </View>
  );
}

export default DeckCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderColor: '#cfd8dc',
    borderWidth: 1,
  },
  header: {
    alignSelf: 'center',
    fontSize: 30,
    paddingBottom: 10,
  },
  cards: {
    alignSelf: 'center',
    color: '#ccc',
    fontSize: 20,
    paddingBottom: 10,
  },
});
