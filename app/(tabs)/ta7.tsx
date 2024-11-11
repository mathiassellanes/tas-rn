import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput, FlatList, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function TabTwoScreen() {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState<{}>({});
  const [error, setError] = useState<string | null>(null);

  const getMovies = async () => {
    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: 'cd23cd7a',
          t: text,
          plot: 'short',
        },
      });

      setError(null);

      setMovie(response.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getMovies();
  }, [text]);

  console.log(movie);
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={{ ...styles.container, width: '90%' }}>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          placeholder="Buscar película"
        />
        {
          movie.Error
            ? <Text>
              No se encontró la película
            </Text>
            : (
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{movie.Title}</Text>
                <Image source={{ uri: movie.Poster }} style={styles.image} />
                <Text style={styles.taskText}>{movie.Plot}</Text>
              </View>
            )
        }

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
    flexDirection: 'column',
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
  rightAction: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    borderRadius: 8,
    aspectRatio: 1,
  }
});
