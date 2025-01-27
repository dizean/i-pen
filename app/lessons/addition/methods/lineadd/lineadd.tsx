import React from 'react';
import { Image, ScrollView } from 'react-native';
import styles from '../../styles';
import * as Text from "@/context/FontContent";
const LineAdd = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>Methods in Solving Addition Problem</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Number Line Addition</Text.TextMedium>

      {/* Section 1 */}
      <Text.TextNormal style={styles.text}>
      Another way to add numbers is with the help of number lines.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      Let us understand the addition on a number line with the help of an example and the number line given below.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Add
        <Text.TextMedium> 10</Text.TextMedium> and 
        <Text.TextMedium> 3</Text.TextMedium></Text.TextNormal>
        <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      We start by marking the number 10 on the number line. 
      When we add using a number line, we count by moving 
      one number at a time to the right of the number. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      Since we are adding 10 and 3, we will move 3 steps to the right. This 
      brings us to 13.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
       Hence, 
        <Text.TextMedium> 10</Text.TextMedium> + 
        <Text.TextMedium> 3</Text.TextMedium> = 
        <Text.TextMedium>13</Text.TextMedium>.
      </Text.TextNormal>
      <Image source={require('../../../../../assets/images/lineadd.png')} style={styles.image} />
    </ScrollView>
  );
};

export default LineAdd;
