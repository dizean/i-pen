import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import { Text } from '@/context/FontContent';
import { RFPercentage } from "react-native-responsive-fontsize";
const MakeEqual = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Way to Solve Division</Text>
      <Text style={styles.sectiontititle}>Make Equal Group</Text>

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
        8 ÷ 4
      </Text>  
      <Image resizeMode="contain" source={require('../../../../../assets/images/cats.png')} style={styles.image} /> 
      <Text style={styles.text}>
        Group the cats into 4
      </Text>
      <Image resizeMode="contain" source={require('../../../../../assets/images/catsequal.png')} style={styles.image} /> 
      <Text style={{ textAlign: "center", fontSize: RFPercentage(8), color: 'gray' }}>
      8 ÷ 4 =
        <Text style={[ styles.highlight, { fontSize: RFPercentage(8), }]}>
          {" "}
          2{" "}
        </Text>
      </Text>
    </ScrollView>
  );
};

export default MakeEqual;
