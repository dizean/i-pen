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
        Methods in Solving Subtraction Problem
      </Text>
      <Text style={styles.sectiontititle}>Subtraction Without Regrouping</Text>
      <Text style={styles.text}>Example:</Text>
      <Text style={styles.text}>
        Subtract
        <Text> 25632</Text> from
        <Text> 48756</Text>
      </Text>
      <Text style={styles.text}>Solution:</Text>
      {/* Section 2 */}
      <Text style={styles.text}>
        Follow the given steps and try to relate them with the following figure.
      </Text>
      <Image
        source={require("../../../../../assets/images/subworegrp.png")}
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
        style={[
          styles.text,
          styles.textcenter,
          {fontSize: RFPercentage(5), color: 'gray'}
        ]}
      >
        (6 - 2 = 4)
      </Text>
      <Text style={styles.text}>Step 2:</Text>
      <Text style={styles.text}>
        Move to the digits in the tens (T) column.
      </Text>
      <Text
        style={[
          styles.text,
          styles.textcenter,
          {fontSize: RFPercentage(5), color: 'gray'}
        ]}
      >
        (5 - 3 = 2)
      </Text>
      <Text style={styles.text}>Step 3:</Text>
      <Text style={styles.text}>
        Now subtract the digits in the hundreds (H) column.
      </Text>
      <Text
        style={[
          styles.text,
          styles.textcenter,
          {fontSize: RFPercentage(5), color: 'gray'}
        ]}
      >
        (7 - 6 = 1)
      </Text>
      <Text style={styles.text}>Step 4:</Text>
      <Text style={styles.text}>
        After this, subtract the digits in the thousands (Th) column.
      </Text>
      <Text
        style={[
          styles.text,
          styles.textcenter,
          {fontSize: RFPercentage(5), color: 'gray'}
        ]}
      >
        (8 - 5 = 3)
      </Text>
      <Text style={styles.text}>Step 5:</Text>
      <Text style={styles.text}>
        Finally, subtract the digits in the ten thousands (T-th) column.
      </Text>
      <Text
        style={[
          styles.text,
          styles.textcenter,
          {fontSize: RFPercentage(5), color: 'gray'}
        ]}
      >
        (4 - 2 = 2)
      </Text>
      <Text style={styles.text}>Step 6:</Text>
      <Text style={styles.text}>
        Therefore, the difference between the two given numbers is
      </Text>
      <Text style={{ textAlign: "center", fontSize: RFPercentage(5), color: 'gray' }}>
        48756 - 25632 =
        <Text style={[ styles.highlight, { fontSize: RFPercentage(5), }]}>
          {" "}
          23124.
        </Text>
      </Text>
    </ScrollView>
  );
};

export default WoRegroup;
