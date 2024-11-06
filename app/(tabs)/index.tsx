import { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, Touchable } from 'react-native';
import { GestureHandlerRootView, NativeViewGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textTitle}>{counter}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => setCounter((prev) => prev - 1)}>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setCounter((prev) => prev + 1)}>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    width: 100,
    color: 'white',
    borderRadius: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
