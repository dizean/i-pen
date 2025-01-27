import React from 'react';
import {ScrollView } from 'react-native';
import styles from '../styles';
import * as Text from "@/context/FontContent";
const Properties = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>Properties of Addition</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Commutative Property</Text.TextMedium>

      {/* Section 1 */}
      <Text.TextNormal style={styles.text}>
      According to this property, the sum of two or 
      more addends remains the same irrespective of the order of the addends.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example :</Text.TextMedium>
      <Text.TextMedium style={styles.text}>
      8 + 7 = 7 + 8 = 15.
      </Text.TextMedium>

      {/* Section 2 */}
      <Text.TextMedium style={styles.sectiontititle}>Associative Property</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      According to this property, the sum of three 
      or more addends remains the same irrespective of the grouping of the addends. 
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example :</Text.TextMedium>
      <Text.TextMedium style={styles.text}>
      5 + (7 + 3) = (5 + 7) + 3 = 15. 
        </Text.TextMedium>

      {/* Section 4 */}
      <Text.TextMedium style={styles.sectiontititle}>Additive Identity Property</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      According to this property of addition, if 
      we add 0 to any number, the resultant sum is always the actual number. 
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example :</Text.TextMedium>
      <Text.TextMedium style={styles.text}>
      0 + 7 = 7.
    </Text.TextMedium>
    </ScrollView>
  );
};

export default Properties;
