import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import { Text } from '@/context/FontContent';
import { RFPercentage } from "react-native-responsive-fontsize";
const Array = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Way to Solve Division</Text>
      <Text style={styles.sectiontititle}>Make Arrays</Text>

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
        9 ÷ 3
      </Text>  
      <Image resizeMode="contain" source={require('../../../../../assets/images/pencils.png')} style={styles.image} /> 
      <Text style={styles.text}>
        Make an array based on the Divisor
      </Text>
      <Image resizeMode="contain" source={require('../../../../../assets/images/pencilsarray.png')} style={styles.image} /> 
      <Text style={{ textAlign: "center", fontSize: RFPercentage(8), color: 'gray' }}>
      9 ÷ 3 =
        <Text style={[ styles.highlight, { fontSize: RFPercentage(8), }]}>
          {" "}
          3{" "}
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Array;
