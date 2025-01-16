import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../../styles';

const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Methods in Solving Addition Problem</Text>
      <Text style={styles.subtitle}>Addition Without Regrouping</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
        The addition in which the sum of the digits is less than or equal 
        to 9 in each column is called addition without regrouping.
      </Text>
      <Text style={styles.text}>
        Let us understand how to add two or more numbers without regrouping with the help of an example.
      </Text>
      <Text style={styles.text}>Example: Add 11234 and 21123</Text>

      {/* Section 2 */}
      <Text style={styles.text}>
        Solution: We will use the following given steps and try to relate them with the following figure.
      </Text>
      <Image source={require('../../../../../assets/images/woregroup1.png')} style={styles.image} />
      <Text style={styles.text}>Step 1: Start with the digits in ones column. (4 + 3 = 7)</Text>
      <Text style={styles.text}>Step 2: Move to the digits in tens column. (3 + 2 = 5)</Text>
      <Text style={styles.text}>Step 3: Now add the digits in hundreds column. (2 + 1 = 3)</Text>

      {/* Section 3 */}
      <Text style={styles.text}>Step 4: After this, add the digits in thousands column. (1 + 1 = 2)</Text>
      <Text style={styles.text}>Step 5: Finally, add the digits in ten thousands column. (1 + 2 = 3)</Text>
      <Text style={styles.text}>Step 6: 11234 + 21123 = 32357</Text>

      {/* Section 4 */}
      <Text style={styles.text}>
        While adding numbers, if the sum of the addends is greater than 9 in any of the columns,
      </Text>
      <Image source={require('../../../../../assets/images/woregroup1.png')} style={styles.image} />
      <Text style={styles.text}>
        we regroup this sum into tens and ones. Then we carry over the tens digit of the sum to the
        preceding column and write the ones digit of the sum in that particular column.
      </Text>
    </ScrollView>
  );
};

export default WoRegroup;
