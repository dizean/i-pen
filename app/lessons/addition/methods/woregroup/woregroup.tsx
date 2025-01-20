import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import styles from "../../styles";

const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>Methods in Solving Addition Problem</Text>
      <Text style={styles.sectiontititle}>Addition Without Regrouping</Text>

      {/* Section 1 */}
      <Text style={styles.text}>
        The addition in which the sum of the digits is less than or equal to 9
        in each column is called addition without regrouping.
      </Text>
      <Text style={styles.text}>
        Let us understand how to add two or more numbers without regrouping with
        the help of an example.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Example:</Text>
      </Text>
      <Text style={styles.text}>
        Add
        <Text style={styles.textbold}> 11234</Text> and
        <Text style={styles.textbold}> 21123</Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Solution:</Text>
      </Text>
      {/* Section 2 */}
      <Text style={styles.text}>
        We will use the following given steps and try to relate them with the
        following figure.
      </Text>
      <Image
        source={require("../../../../../assets/images/woregroup1.png")}
        style={styles.image}
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
        (4 + 3 = 7)
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
        (3 + 2 = 5)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 3:</Text>
      </Text>
      <Text style={styles.text}>
        Now add the digits in the hundreds (H) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (2 + 1 = 3)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 4:</Text>
      </Text>
      <Text style={styles.text}>
        After this, add the digits in the thousands (Th) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (1 + 1 = 2)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 5:</Text>
      </Text>
      <Text style={styles.text}>
        Finally, add the digits in the ten thousands (T-th) column.
      </Text>
      <Text
        style={[
          styles.textbold,
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (1 + 2 = 3)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textbold}>Step 6:</Text>
      </Text>
      <Text style={styles.text}>Therefore, the sum of</Text>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        11234 + 21123 =
        <Text style={[styles.textbold, styles.highlight, { fontSize: 25 }]}>
          {" "}
          32357.
        </Text>
      </Text>
    </ScrollView>
  );
};

export default WoRegroup;
