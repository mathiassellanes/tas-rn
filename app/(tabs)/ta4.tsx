import { useState } from 'react';
import { StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const [showOtherImage, setShowOtherImage] = useState(false);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={{ ...styles.container, width: '90%' }}>
        <Image source={{ uri: `https://robohash.org/${showOtherImage}` }} style={styles.image} />
        <Button title="Cambiar Imagen" onPress={() => setShowOtherImage(!showOtherImage)} />
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
  textInput: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    width: '100%',
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
});
