import React, { useState } from "react";
import {
  View, Text, Image, TouchableOpacity,
  StyleSheet, Alert
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera
                 roll permission to upload images.`
      );
    } else {
      const result =
        await ImagePicker.launchCameraAsync();

      if (!result.cancelled) {
        setFile(result.assets[0].uri);
        setError(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Add Image:
      </Text>

      <TouchableOpacity style={styles.button}
        onPress={pickImage}>
        <Text style={styles.buttonText}>
          Choose Image
        </Text>
      </TouchableOpacity>

      {file ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }}
            style={styles.image} />
        </View>
      ) : (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
