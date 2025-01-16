import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../styles';

const Properties = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Addition Properties</Text>
      <Text style={styles.sectiontititle}>Commutative Property</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
      According to this property, the sum of two or 
      more addends remains the same irrespective of the order of the addends.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.textbold}>Example :</Text>
      </Text>
      <Text style={styles.text}>
      8 + 7 = 7 + 8 = 15.
      </Text>

      {/* Section 2 */}
      <Text style={styles.sectiontititle}>Associative Property</Text>
      <Text style={styles.text}>
      According to this property, the sum of three 
      or more addends remains the same irrespective of the grouping of the addends. 
      </Text>
      <Text style={styles.text}>
      <Text style={styles.textbold}>Example :</Text>
      </Text>
      <Text style={styles.text}>
      5 + (7 + 3) = (5 + 7) + 3 = 15. 
        </Text>

      {/* Section 4 */}
      <Text style={styles.sectiontititle}>Additive Identity Property</Text>
      <Text style={styles.text}>
      According to this property of addition, if 
      we add 0 to any number, the resultant sum is always the actual number. 
      </Text>
      <Text style={styles.text}>
      <Text style={styles.textbold}>Example :</Text>
      </Text>
      <Text style={styles.text}>
      0 + 7 = 7.
    </Text>
    </ScrollView>
  );
};

export default Properties;
