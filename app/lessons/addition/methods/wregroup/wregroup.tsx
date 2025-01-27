import React from 'react';
import { Image, ScrollView } from 'react-native';
import styles from '../../styles';
import * as Text from "@/context/FontContent";
const WRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>Methods in Solving Addition Problem</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Addition With Regrouping</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        While adding numbers, if the sum of the addends is 
        greater than 9 in any of the columns,we regroup this 
        sum into tens and ones. Then we carry over the tens 
        digit of the sum to the preceding column and write 
        the ones digit of the sum in that particular column.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      Let us understand how to add two or more numbers by regrouping with the help of an example.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Add
        <Text.TextMedium> 3475</Text.TextMedium> and 
        <Text.TextMedium> 2865</Text.TextMedium></Text.TextNormal>
        <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      {/* Section 2 */}
      <Text.TextNormal style={styles.text}> 
      We will use the following given steps and try to relate them with the following figure.
      </Text.TextNormal>
      <Image source={require('../../../../../assets/images/wregroup.png')} style={styles.image} />
      <Text.TextMedium style={styles.text}>Step 1:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Start with the digits in the ones (O) place. 
      </Text.TextNormal>
      <Text.TextMedium style={[ styles.text, styles.textcenter, {fontSize: 25}]}>(5 + 5 = 10).</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Here the sum is 10. 
      The tens digit of the sum, that is, 1, will be carried to the preceding column.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Step 2:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Add the digits in the tens (T) column along with the carryover 1. 
      </Text.TextNormal>
      <Text.TextMedium style={[ styles.text, styles.textcenter, {fontSize: 25}]}>1 (carry-over) + 7 + 6 = 14.</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Here the sum is 14. 
      The tens digit of the sum, that is, 1, will be carried to the hundreds column.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Step 3:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Now, add the digits in the hundreds (H) place along with the carryover digit 1.
      </Text.TextNormal>
      <Text.TextMedium style={[ styles.text, styles.textcenter, {fontSize: 25}]}>1 (carry-over) + 4 + 8 = 13.</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Here the sum is 13. 
      The tens digit of the sum, that is, 1, will be carried to the thousands column.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Step 4:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Now, add the digits in the thousands place (Th) along with the carryover digit 1. 
      </Text.TextNormal>
      <Text.TextMedium style={[ styles.text, styles.textcenter, {fontSize: 25}]}>1 (carry-over) + 3 + 2 = 6.</Text.TextMedium>
    <Text.TextMedium style={styles.text}>Step 5:</Text.TextMedium>
    <Text.TextMedium style={styles.text}>
      Therefore, the sum of
    </Text.TextMedium>
    <Text.TextNormal style={{fontSize: 25, textAlign: 'center'}}>3475 - 2865 = 
        <Text.TextMedium style={[ styles.highlight,{fontSize: 25}]}> 6340.</Text.TextMedium>
      </Text.TextNormal>
    </ScrollView>
  );
};

export default WRegroup;
