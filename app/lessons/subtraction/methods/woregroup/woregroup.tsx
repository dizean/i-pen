import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import styles from "../../styles";

const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>
        Methods in Solving Subtraction Problem
      </Text>
      <Text style={styles.sectiontititle}>Subtraction Without Regrouping</Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Example:</Text>
      </Text>
      <Text style={styles.text}>
        Subtract
        <Text style={styles.textbold}> 25632</Text> from
        <Text style={styles.textbold}> 48756</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Solution:</Text>
      </Text>
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
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 1:</Text>
      </Text>
      <Text style={styles.text}>
        Start with the digits in the ones (O) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (6 - 2 = 4)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 2:</Text>
      </Text>
      <Text style={styles.text}>
        Move to the digits in the tens (T) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (5 - 3 = 2)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 3:</Text>
      </Text>
      <Text style={styles.text}>
        Now subtract the digits in the hundreds (H) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (7 - 6 = 1)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 4:</Text>
      </Text>
      <Text style={styles.text}>
        After this, subtract the digits in the thousands (Th) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (8 - 5 = 3)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 5:</Text>
      </Text>
      <Text style={styles.text}>
        Finally, subtract the digits in the ten thousands (T-th) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (4 - 2 = 2)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 6:</Text>
      </Text>
      <Text style={styles.text}>
        Therefore, the difference between the two given numbers is
      </Text>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        48756 - 25632 =
        <Text style={[styles.textbold, styles.highlight, { fontSize: 25 }]}>
          {" "}
          23124.
        </Text>
      </Text>
    </ScrollView>
  );
};

export default WoRegroup;
