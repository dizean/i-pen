import React from 'react';
import { Image, ScrollView } from 'react-native';
import styles from '../../styles';
import { Text } from '@/context/FontContent';
const LineAdd = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Methods in Solving Addition Problem</Text>
      <Text style={styles.sectiontititle}>Number Line Addition</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
      Another way to add numbers is with the help of number lines.
      </Text>
      <Text style={styles.text}>
      Let us understand the addition on a number line with the help of an example and the number line given below.
      </Text>
      <Text style={styles.text}>Example:</Text>
      <Text style={styles.text}>
        Add
        <Text> 10</Text> and 
        <Text> 3</Text></Text>
        <Text style={styles.text}>Solution:</Text>
      <Text style={styles.text}>
      We start by marking the number 10 on the number line. 
      When we add using a number line, we count by moving 
      one number at a time to the right of the number. 
      </Text>
      <Text style={styles.text}>
      Since we are adding 10 and 3, we will move 3 steps to the right. This 
      brings us to 13.
      </Text>
      <Text style={styles.text}>
       Hence, 
        <Text> 10</Text> + 
        <Text> 3</Text> = 
        <Text>13</Text>.
      </Text>
      <Image source={require('../../../../../assets/images/lineadd.png')} style={styles.image} />
    </ScrollView>
  );
};

export default LineAdd;
