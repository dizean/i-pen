import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../../styles';

const LineAdd = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Methods in Solving Addition Problem</Text>
      <Text style={styles.subtitle}>Number Line Addition</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
      Another way to add numbers is with the help of number lines.
      </Text>
      <Text style={styles.text}>
      Let us understand the addition on a number line with the help of an example and the number line given below.
      </Text>
      <Text style={styles.text}>
        Example: Add 10 + 3 using a number line
      </Text>

      {/* Section 2 */}
      <Text style={styles.text}>
      Solution: We start by marking the number 10 on the number line. 
      When we add using a number line, we count by moving 
      </Text>
      <Text style={styles.text}>
      one number at a time to the right of the number. 
      Since we are adding 10 and 3, we will move 3 steps to the right. This 
      </Text>
      <Text style={styles.text}>
      brings us to 13. Hence, 10 + 3 = 13.
      </Text>
      <Image source={require('../../../../../assets/images/lineadd.png')} style={styles.image} />
    </ScrollView>
  );
};

export default LineAdd;
