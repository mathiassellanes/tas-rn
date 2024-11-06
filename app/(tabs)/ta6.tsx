import { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Reanimated, { useAnimatedStyle } from 'react-native-reanimated';

function RightAction({ index, removeTask }) {
  const style = useAnimatedStyle(() => ({
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  }));

  return (
    <Reanimated.View style={[styles.rightAction, style]}>
      <Text style={styles.actionText}>Eliminar</Text>
    </Reanimated.View>
  );
}

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
          style={{ width: '100%' }}
          renderItem={({ item, index }) => (
            <Swipeable
              key={item}
              containerStyle={styles.taskContainer}
              friction={2}
              enableTrackpadTwoFingerGesture
              rightThreshold={40}
              renderRightActions={(progress, dragX) => (
                <RightAction index={index} removeTask={removeTask} />
              )}
              onSwipeableOpen={() => removeTask(index)}
            >
              <Text style={styles.taskText}>{item}</Text>
            </Swipeable>
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
});
