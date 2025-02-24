import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import { Text } from '@/context/FontContent';
import { RFPercentage } from "react-native-responsive-fontsize";
const RepeatedSubtraction = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Way to Solve Division</Text>
      <Text style={styles.sectiontititle}>Repeated Subtraction</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
        Example
      </Text>
      <Text
        style={[
          styles.textcenter,
          {fontSize: RFPercentage(8), color: 'gray'}
        ]}
      >
        10 ÷ 5
      </Text>  
      <Text style={styles.text}>
        Subtract the Divisor to the Divedend until Answer is 0.
      </Text>
      <Text
        style={[
          styles.textcenter,
          {fontSize: RFPercentage(8), color: 'gray'}
        ]}
      >
        10 - 5 = 5
      </Text>  
      <Text
        style={[
          styles.textcenter,
          {fontSize: RFPercentage(8), color: 'gray'}
        ]}
      >
        5 - 5 = 0
      </Text>  
      <Text style={styles.text}>
        Count the number of the process made until the answer is 0.
      </Text>
      <Text style={{ textAlign: "center", fontSize: RFPercentage(8), color: 'gray' }}>
      10 ÷ 5 =
        <Text style={[ styles.highlight, { fontSize: RFPercentage(8), }]}>
          {" "}
         2{" "}
        </Text>
      </Text>
    </ScrollView>
  );
};

export default RepeatedSubtraction;
