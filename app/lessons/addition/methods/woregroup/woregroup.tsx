import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../../styles';

const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Methods in Solving Addition Problem</Text>
      <Text style={styles.sectiontititle}>Addition Without Regrouping</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
        The addition in which the sum of the digits is less than or equal 
        to 9 in each column is called addition without regrouping.
      </Text>
      <Text style={styles.text}>
        Let us understand how to add two or more numbers without regrouping with the help of an example.
      </Text>
      <Text style={styles.text}><Text style={styles.textbold}>Example:</Text></Text>
      <Text style={styles.text}>
        Add
        <Text style={styles.textbold}> 11234</Text> and 
        <Text style={styles.textbold}> 21123</Text></Text>
        <Text style={styles.text}><Text style={styles.textbold}>Solution:</Text></Text>
      {/* Section 2 */}
      <Text style={styles.text}>
       We will use the following given steps and try to relate them with the following figure.
      </Text>
      <Image source={require('../../../../../assets/images/woregroup1.png')} style={styles.image} />
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 1:</Text> Start with the digits in the ones (O) column. 
        <Text style={styles.textbold}>(4 + 3 = 7)</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 2:</Text> Move to the digits in the tens (T) column. 
        <Text style={styles.textbold}>(3 + 2 = 5)</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 3:</Text> Now add the digits in the hundreds (H) column. 
        <Text style={styles.textbold}>(2 + 1 = 3)</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 4:</Text> After this, add the digits in the thousands (Th) column. 
        <Text style={styles.textbold}>(1 + 1 = 2)</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 5:</Text> Finally, add the digits in the ten thousands (T-th) column. 
        <Text style={styles.textbold}>(1 + 2 = 3)</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 6:</Text> 11234 + 21123 = 32357
      </Text>
      {/* Section 4 */}
      <Text style={styles.text}>
        While adding numbers, if the sum of the addends is 
        greater than 9 in any of the columns,we regroup this 
        sum into tens and ones. Then we carry over the tens 
        digit of the sum to the preceding column and write 
        the ones digit of the sum in that particular column.
      </Text>
    </ScrollView>
  );
};

export default WoRegroup;
