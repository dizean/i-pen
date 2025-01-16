import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../../styles';

const WRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Methods in Solving Addition Problem</Text>
      <Text style={styles.subtitle}>Addition With Regrouping</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
         While adding numbers, if the sum of the addends is greater than 9 in any of the columns, 
      </Text>
      <Text style={styles.text}>
      we regroup this sum into tens and ones. Then we carry over the tens digit of the sum to the 
      </Text>
      <Text style={styles.text}>
      preceding column and write the ones digit of the sum in that particular column.
      </Text>
      <Text style={styles.text}>
      Let us understand how to add two or more numbers by regrouping with the help of an example.
      </Text>
      <Text style={styles.text}>
        Example: Add 3475 and 2865.
      </Text>

      {/* Section 2 */}
      <Text style={styles.text}>
        Solution: We will use the following given steps and try to relate them with the following figure.
      </Text>
      <Image source={require('../../../../../assets/images/woregroup1.png')} style={styles.image} />
      <Text style={styles.text}>
        Step 1: Start with the digits in ones place. (5 + 5 = 10). 
        Here the sum is 10. The tens digit of the sum, that is, 1, will be carried to the preceding column.
      </Text>
      <Text style={styles.text}>
      Step 2: Add the digits in the tens column along with the carryover 1. 
      This means, 1 (carry-over) + 7 + 6 = 14. Here the sum is 14. The tens digit of the sum,
       that is, 1, will be carried to the hundreds column.
      </Text>
      <Text style={styles.text}>
      Step 3: Now, add the digits in the hundreds place along with the carryover 
      digit 1. This means, 1 (carry-over) + 4 + 8 = 13. Here the sum is 13. The tens digit of 
      the sum, that is, 1, will be carried to the thousands column.
      </Text>

      {/* Section 3 */}
      <Text style={styles.text}>
      Step 4: Now, add the digits in the thousands place along with the carryover digit 1,
       that is, 1 (carry-over) + 3 + 2 = 6
      </Text>
      <Text style={styles.text}>
        Step 5: Therefore, the sum of 3475 + 2865 = 6340
      </Text>
    </ScrollView>
  );
};

export default WRegroup;
