import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import * as Text from "@/context/FontContent";
const WRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>
        Methods in Solving Subtraction Problem
      </Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Subtraction With Regrouping</Text.TextMedium>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Subtract
        <Text.TextMedium> 3678</Text.TextMedium> from
        <Text.TextMedium> 8162</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      {/* Section 2 */}
      <Text.TextNormal style={styles.text}>
        Follow the given steps and try to relate them with the following figure.
      </Text.TextNormal>
      <Image
        source={require("../../../../../assets/images/subwregrp.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginVertical: 10,
        }}
      />
      <Text.TextMedium style={styles.text}>Step 1:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Start subtracting the digits at ones (O) place. We can see that 8 is
        greater than 2. So, we will borrow 1 from the tens (T) column which will
        make it 12. Now,
      </Text.TextNormal>
        <Text.TextMedium
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
          (12 - 8 = 4 ).
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 2:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        After giving 1 to the ones column (O) in the previous step, 6 becomes 5.
        Now, let us subtract the digits at the tens place (T) (5 - 7). Here, 7
        is greater than 5, so we will borrow 1 from the hundreds column (H).
        This will make it 15. So,
      </Text.TextNormal>
        <Text.TextMedium
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
          (15 - 7 = 8 ).
        </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 3:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        In step 2 we had given 1 to the tens column (T), so we are left with 0
        at the hundreds place (H). To subtract the digits on the hundreds place
        (H), i.e., (0 - 6) we will borrow 1 from the thousands column (Th). This
        will make it 10.
      </Text.TextNormal>
        <Text.TextMedium
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
          (10 - 6 = 4 )
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 4:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Now, let us subtract the digits at the thousands place. After giving 1
        to the hundreds column, we have 7.
      </Text.TextNormal>
        <Text.TextMedium
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
          (7 - 3 = 4)
        </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Step 5:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Therefore, the difference between the two given numbers is
      </Text.TextNormal>
      <Text.TextNormal style={{ fontSize: 25, textAlign: "center" }}>
        8162 - 3678 =
        <Text.TextMedium style={[styles.highlight, { fontSize: 25 }]}>
          {" "}
          4484.
        </Text.TextMedium>
      </Text.TextNormal>
    </ScrollView>
  );
};

export default WRegroup;
