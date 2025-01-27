import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import * as Text from "@/context/FontContent";
const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>
        Methods in Solving Subtraction Problem
      </Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Subtraction Without Regrouping</Text.TextMedium>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Subtract
        <Text.TextMedium> 25632</Text.TextMedium> from
        <Text.TextMedium> 48756</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      {/* Section 2 */}
      <Text.TextNormal style={styles.text}>
        Follow the given steps and try to relate them with the following figure.
      </Text.TextNormal>
      <Image
        source={require("../../../../../assets/images/subworegrp.png")}
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
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (6 - 2 = 4)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 2:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Move to the digits in the tens (T) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (5 - 3 = 2)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 3:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Now subtract the digits in the hundreds (H) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (7 - 6 = 1)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 4:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        After this, subtract the digits in the thousands (Th) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (8 - 5 = 3)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 5:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Finally, subtract the digits in the ten thousands (T-th) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (4 - 2 = 2)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 6:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Therefore, the difference between the two given numbers is
      </Text.TextNormal>
      <Text.TextNormal style={{ fontSize: 25, textAlign: "center" }}>
        48756 - 25632 =
        <Text.TextMedium style={[ styles.highlight, { fontSize: 25 }]}>
          {" "}
          23124.
        </Text.TextMedium>
      </Text.TextNormal>
    </ScrollView>
  );
};

export default WoRegroup;
