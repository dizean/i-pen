import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import { Text } from '@/context/FontContent';
import { RFPercentage } from "react-native-responsive-fontsize";
const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>
        Methods in Solving Multiplication Problem
      </Text>
      <Text style={styles.sectiontititle}>
        Multiplication Without Regrouping
      </Text>
      <Text style={styles.text}>
        <Text>Multiplication </Text>
        of two numbers without regrouping involves smaller numbers where there
        is no need to take a carry-over to the next higher place value.
      </Text>
      <Text style={styles.text}>Example:</Text>
      <Text style={styles.text}>
        Multiply
        <Text> 3014</Text> by
        <Text> 2</Text>
      </Text>
      <Text style={styles.text}>Solution:</Text>
      {/* Section 2 */}
      <Text style={styles.text}>
        Let us multiply 3014 × 2 using the steps given below and try to relate
        them with the following figure.
      </Text>
      <Image
        source={require("../../../../../assets/images/woregmulti.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginVertical: 10,
        }}
      />
      <Text style={styles.text}>Step 1:</Text>
      <Text style={styles.text}>
        Start with the digits in the ones (O) column.
      </Text>
      <Text
        style={[styles.text, styles.textcenter, {fontSize: RFPercentage(5), color: 'gray'}]}
      >
        (2 × 4 = 8)
      </Text>
      <Text style={styles.text}>Step 2:</Text>
      <Text style={styles.text}>
        Multiply 2 with the digit in tens (T) place.
      </Text>
      <Text
        style={[styles.text, styles.textcenter, {fontSize: RFPercentage(5), color: 'gray'}]}
      >
        (2 × 1 = 2)
      </Text>
      <Text style={styles.text}>Step 3:</Text>
      <Text style={styles.text}>
        Now, multiply 2 with the digit in hundreds (H) place.
      </Text>
      <Text
        style={[styles.text, styles.textcenter, {fontSize: RFPercentage(5), color: 'gray'}]}
      >
        (2 × 0 = 0)
      </Text>
      <Text style={styles.text}>Step 4:</Text>
      <Text style={styles.text}>
        Now multiply 2 with the digit in thousands (Th) place.
      </Text>
      <Text
        style={[styles.text, styles.textcenter, {fontSize: RFPercentage(5), color: 'gray'}]}
      >
        (2 × 3 = 6)
      </Text>
      <Text style={styles.text}>Step 5:</Text>
      <Text style={styles.text}>
        Therefore, the product of
      </Text>
      <Text style={{ textAlign: "center", fontSize: RFPercentage(5), color: 'gray' }}>
        3014 x 2 =
        <Text style={[ styles.highlight, { fontSize: RFPercentage(5), }]}>
          {" "}
          6028.
        </Text>
      </Text>
    </ScrollView>
  );
};

export default WoRegroup;
