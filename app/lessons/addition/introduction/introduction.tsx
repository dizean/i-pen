import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../styles';
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

export default Introduction;
