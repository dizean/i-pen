import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import styles from "../../styles";

const Line = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>
        Methods in Solving Subtraction Problem
      </Text>
      <Text style={styles.sectiontititle}>Number Line Subtraction</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
      A <Text style={styles.textbold}>number line</Text> is a visual aid that helps us understand 
      subtraction because it allows us to jump backward and forward on each number.
      </Text>
      <Text style={styles.text}>
      To understand how this works, let us explore subtraction using a number line. 
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Example:</Text>
      </Text>
      <Text style={styles.text}>
        Subtract
        <Text style={styles.textbold}> 4</Text> from
        <Text style={styles.textbold}> 9</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Solution:</Text>
      </Text>
      <Text style={styles.text}>
      We will start by marking the number 9 on the number line.
      When we subtract using a number line, we count by moving one number 
      at a time towards the left-hand side. 
      </Text>
      <Text style={styles.text}>
      Since we are subtracting 4 from 9, 
      we will move 4 times to the left. The number on which you land after 4 
      backward jumps, is the answer. 
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Hence</Text>,
        <Text style={styles.textbold}> 9</Text> -
        <Text style={styles.textbold}> 4</Text> =
        <Text style={styles.textbold}> 5</Text>.
      </Text>
      <Image
        source={require("../../../../../assets/images/linesub.png")}
        style={styles.image}
      />
    </ScrollView>
  );
};

export default Line;
