import { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image, FlatList, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const images = [
    { image: "https://robohash.org/usuario123", caption: "Robot para 'usuario123'" },
    { image: "https://robohash.org/correo@example.com", caption: "Monstruo para 'correo@example.com'" },
    { image: "https://robohash.org/192.168.0.1", caption: "Extraterrestre para '192.168.0.1'" },
    { image: "https://robohash.org/documento.pdf", caption: "Personaje para 'documento.pdf'" },
    { image: "https://robohash.org/987654", caption: "Avatar para 'ID de usuario 987654'" }
  ]

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={{ ...styles.container, width: '90%' }}>
        <FlatList
          data={images}
          renderItem={({ item, index }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text>{item.caption}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
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
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});
