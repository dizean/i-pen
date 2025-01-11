import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Introduction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADDITION of Numbers</Text>
      <Text style={styles.subtitle}>What is Addition?</Text>
      <Text style={styles.text}>
        Addition is the process of adding two or more items together.
      </Text>
      <Text style={styles.text}>
        Addition in Math is the method of calculating the sum of two or more numbers.
      </Text>
      <Text style={styles.subtitle}>ADDITION symbol</Text>
      <Text style={styles.text}>1 + 1 = ?</Text>
      <Text style={styles.text}>
        The addition symbol consists of one horizontal line and one vertical line.
      </Text>
      <Text style={styles.text}>
        It is also known as the addition sign or the plus sign (+).
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  text: { fontSize: 16, marginTop: 5 },
});

export default Introduction;
