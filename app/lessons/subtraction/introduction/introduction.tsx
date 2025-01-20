import React, { useState } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import * as Speech from 'expo-speech';

const Introduction = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>
        Introduction
      </Text>
      <Text style={styles.sectiontititle}>
        What is Subtraction?
      </Text>
      <Text style={styles.text}>
      Subtraction is the process of taking away a number from another.
      </Text>
      <Text style={styles.text}>
      It is a primary arithmetic operation that is denoted by a subtraction symbol
      is the method of calculating the difference between two numbers.
      </Text>
      <Text style={styles.sectiontititle}>
      Subtraction symbol
      </Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
          3 <Text style={styles.highlight}> - </Text> 2 = ?
        </Text>
      </Text>
      <Text style={styles.text}>
      In mathematics, we have different symbols. 
      </Text>
      <Text style={styles.text}>
      The subtraction symbol is one of the important math symbol that we use while performing subtraction. 
      The subtraction symbol is called minus.
        <Text style={styles.textbold}> (-)</Text>.
      </Text>
    </ScrollView>
  );
};

export default Introduction;
