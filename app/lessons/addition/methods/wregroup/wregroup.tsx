import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../../styles';

const WRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Methods in Solving Addition Problem</Text>
      <Text style={styles.sectiontititle}>Addition With Regrouping</Text>
      <Text style={styles.text}>
        While adding numbers, if the sum of the addends is 
        greater than 9 in any of the columns,we regroup this 
        sum into tens and ones. Then we carry over the tens 
        digit of the sum to the preceding column and write 
        the ones digit of the sum in that particular column.
      </Text>
      <Text style={styles.text}>
      Let us understand how to add two or more numbers by regrouping with the help of an example.
      </Text>
      <Text style={styles.text}><Text style={styles.textbold}>Example:</Text></Text>
      <Text style={styles.text}>
        Add
        <Text style={styles.textbold}> 3475</Text> and 
        <Text style={styles.textbold}> 2865</Text></Text>
        <Text style={styles.text}><Text style={styles.textbold}>Solution:</Text></Text>
      {/* Section 2 */}
      <Text style={styles.text}> 
      We will use the following given steps and try to relate them with the following figure.
      </Text>
      <Image source={require('../../../../../assets/images/wregroup.png')} style={styles.image} />
      <Text style={styles.text}>
      <Text style={styles.textbold}>Step 1:</Text>
      </Text>
      <Text style={styles.text}>
      Start with the digits in the ones (O) place. 
      </Text>
      <Text style={styles.text}>
      <Text style={[styles.textbold, styles.text, styles.textcenter, {fontSize: 25}]}>(5 + 5 = 10).</Text>
      </Text>
      <Text style={styles.text}>
      Here the sum is 10. 
      The tens digit of the sum, that is, 1, will be carried to the preceding column.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.textbold}>Step 2:</Text>
      </Text>
      <Text style={styles.text}>
      Add the digits in the tens (T) column along with the carryover 1. 
      </Text>
      <Text style={styles.text}>
      <Text style={[styles.textbold, styles.text, styles.textcenter, {fontSize: 25}]}>1 (carry-over) + 7 + 6 = 14.</Text>
      </Text>
      <Text style={styles.text}>
      Here the sum is 14. 
      The tens digit of the sum, that is, 1, will be carried to the hundreds column.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.textbold}>Step 3:</Text>
      </Text>
      <Text style={styles.text}>
      Now, add the digits in the hundreds (H) place along with the carryover digit 1.
      </Text>
      <Text style={styles.text}>
      <Text style={[styles.textbold, styles.text, styles.textcenter, {fontSize: 25}]}>1 (carry-over) + 4 + 8 = 13.</Text>
      </Text>
      <Text style={styles.text}>
      Here the sum is 13. 
      The tens digit of the sum, that is, 1, will be carried to the thousands column.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.textbold}>Step 4:</Text>
      </Text>
      <Text style={styles.text}>
      Now, add the digits in the thousands place (Th) along with the carryover digit 1. 
      </Text>
      <Text style={styles.text}>
      <Text style={[styles.textbold, styles.text, styles.textcenter, {fontSize: 25}]}>1 (carry-over) + 3 + 2 = 6.</Text>
      </Text>
    <Text style={styles.text}>
      <Text style={styles.textbold}>Step 5:</Text> 
    </Text>
    <Text style={styles.text}>
      Therefore, the sum of
    </Text>
    <Text style={{fontSize: 25, textAlign: 'center'}}>3475 - 2865 = 
        <Text style={[styles.textbold, styles.highlight,{fontSize: 25}]}> 6340.</Text>
      </Text>
    </ScrollView>
  );
};

export default WRegroup;
