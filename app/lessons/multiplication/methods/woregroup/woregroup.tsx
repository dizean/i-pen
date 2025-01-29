import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import * as Text from "@/context/FontContent";
const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>
        Methods in Solving Multiplication Problem
      </Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>
        Multiplication Without Regrouping
      </Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        <Text.TextBold>Multiplication </Text.TextBold>
        of two numbers without regrouping involves smaller numbers where there
        is no need to take a carry-over to the next higher place value.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Multiply
        <Text.TextMedium> 3014</Text.TextMedium> by
        <Text.TextMedium> 2</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      {/* Section 2 */}
      <Text.TextNormal style={styles.text}>
        Let us multiply 3014 × 2 using the steps given below and try to relate
        them with the following figure.
      </Text.TextNormal>
      <Image
        source={require("../../../../../assets/images/woregmulti.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginVertical: 10,
        }}
      />
      <Text.TextMedium style={styles.text}>Step 1:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Start with the digits in the ones (O) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        (2 × 4 = 8)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 2:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Multiply 2 with the digit in tens (T) place.
      </Text.TextNormal>
      <Text.TextMedium
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        (2 × 1 = 2)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 3:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Now, multiply 2 with the digit in hundreds (H) place.
      </Text.TextNormal>
      <Text.TextMedium
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        (2 × 0 = 0)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 4:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Now multiply 2 with the digit in thousands (Th) place.
      </Text.TextNormal>
      <Text.TextMedium
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        (2 × 3 = 6)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 5:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Therefore, the product of
      </Text.TextNormal>
      <Text.TextNormal style={{ fontSize: 25, textAlign: "center" }}>
        3014 x 2 =
        <Text.TextMedium style={[styles.highlight, { fontSize: 25 }]}>
          {" "}
          6028.
        </Text.TextMedium>
      </Text.TextNormal>
    </ScrollView>
  );
};

export default WoRegroup;
