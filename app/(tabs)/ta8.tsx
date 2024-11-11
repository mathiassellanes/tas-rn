import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function App() {
  const [styles, setStyles] = useState(createStyles(Dimensions.get('window').width));

  useEffect(() => {
    const handleResize = () => {
      const { width } = Dimensions.get('window');
      setStyles(createStyles(width));
    };

    Dimensions.addEventListener('change', handleResize);

    return () => {
      Dimensions.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es un texto ajustado</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Caja</Text>
      </View>
    </View>
  );
}

const createStyles = (width) => {
  const isSmallDevice = width < 375;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isSmallDevice ? 'lightblue' : 'lightgreen',
    },
    text: {
      fontSize: isSmallDevice ? 14 : 24,
      color: isSmallDevice ? 'darkblue' : 'darkgreen',
    },
    box: {
      width: isSmallDevice ? 100 : 200,
      height: isSmallDevice ? 100 : 200,
      backgroundColor: isSmallDevice ? 'blue' : 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
