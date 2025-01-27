import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import * as Text from "@/context/FontContent";
const WoRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>Methods in Solving Addition Problem</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Addition Without Regrouping</Text.TextMedium>

      {/* Section 1 */}
      <Text.TextNormal style={styles.text}>
        The addition in which the sum of the digits is less than or equal to 9
        in each column is called addition without regrouping.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        Let us understand how to add two or more numbers without regrouping with
        the help of an example.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Add
        <Text.TextMedium > 11234</Text.TextMedium> and
        <Text.TextMedium > 21123</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      {/* Section 2 */}
      <Text.TextNormal style={styles.text}>
        We will use the following given steps and try to relate them with the
        following figure.
      </Text.TextNormal>
      <Image
        source={require("../../../../../assets/images/woregroup1.png")}
        style={styles.image}
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
        (4 + 3 = 7)
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
        (3 + 2 = 5)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 3:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Now add the digits in the hundreds (H) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (2 + 1 = 3)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 4:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        After this, add the digits in the thousands (Th) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (1 + 1 = 2)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 5:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Finally, add the digits in the ten thousands (T-th) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[
          styles.text,
          styles.textcenter,
          { fontSize: 25 },
        ]}
      >
        (1 + 2 = 3)
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 6:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>Therefore, the sum of</Text.TextNormal>
      <Text.TextNormal style={{ fontSize: 25, textAlign: "center" }}>
        11234 + 21123 =
        <Text.TextMedium style={[ styles.highlight, { fontSize: 25 }]}>
          {" "}
          32357.
        </Text.TextMedium>
      </Text.TextNormal>
    </ScrollView>
  );
};

export default WoRegroup;
