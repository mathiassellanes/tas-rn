import { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, Touchable } from 'react-native';
import { GestureHandlerRootView, NativeViewGestureHandler, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const [text, setText] = useState("");

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={{ ...styles.container, width: '90%' }}>
        <Text style={styles.textTitle}>{text}</Text>
        <TextInput style={styles.textInput} onChangeText={setText} value={text} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
