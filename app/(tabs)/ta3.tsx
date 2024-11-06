import { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={{ ...styles.container, width: '90%' }}>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          placeholder="Nueva tarea"
        />
        <Button title="Añadir Tarea" onPress={addTask} />
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity onPress={() => removeTask(index)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
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
