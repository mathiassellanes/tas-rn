import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

export default function App() {
  const text = Platform.OS === 'ios' ? 'Este es un texto ajustado para gente del bien' : 'Este es un texto ajustado para gente del mal';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? 'lightblue' : 'lightgreen',
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 20 : 24,
    color: Platform.OS === 'ios' ? 'darkblue' : 'darkgreen',
  },
  box: {
    width: Platform.OS === 'ios' ? 150 : 200,
    height: Platform.OS === 'ios' ? 150 : 200,
    backgroundColor: Platform.OS === 'ios' ? 'blue' : 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
