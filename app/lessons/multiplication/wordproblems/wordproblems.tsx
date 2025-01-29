import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../styles";
import * as Text from "@/context/FontContent";
const WordProblem = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>
        Word Problems in Multiplication
      </Text.TextBold>
      <Text.TextNormal></Text.TextNormal>
      {/* Section 1 */}
      <Text.TextNormal style={styles.text}>
        <Text.TextBold>Multiplication </Text.TextBold>
        word problems can be easily solved by carefully observing the situation
        and identifying the solution.
      </Text.TextNormal>
      <Text.TextNormal></Text.TextNormal>
      {/* Section 2 */}
      <Text.TextMedium style={styles.text}>Example :</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        A box contains 245 fruits. Find the number of fruits in 4 such boxes
        using the multiplication formula.
      </Text.TextNormal>
      <Text.TextNormal></Text.TextNormal>
      <Text.TextMedium style={styles.text}>Solution :</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        To solve such multiplication word problems the easiest way is to note
        down the given parameters and then solve.
      </Text.TextNormal>
      <Text.TextNormal></Text.TextNormal>
      <Text.TextMedium style={styles.text}>Given :</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        The total number of fruits in one box ={" "}
        <Text.TextMedium>245</Text.TextMedium>.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        The number of boxes = <Text.TextMedium>4</Text.TextMedium>.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        Total number of fruits in 4 such boxes ={" "}
        <Text.TextMedium>245 × 4.</Text.TextMedium>.
      </Text.TextNormal>
      <Text.TextNormal></Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        Let us multiply 245 × 4 using the steps given below and try to relate
        them with the following figure.
      </Text.TextNormal>
      <Text.TextNormal></Text.TextNormal>
      <Image
        source={require("../../../../assets/images/wordmulti.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginVertical: 10,
        }}
      />
      <Text.TextNormal></Text.TextNormal>
      <Text.TextMedium style={styles.text}>Step 1:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Start with the digit in ones (O) place. Multiply 4 × 5 = 20. Now carry 2
        to the tens (T) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        4 × 5 = 20
      </Text.TextMedium>
      <Text.TextNormal></Text.TextNormal>
      <Text.TextMedium style={styles.text}>Step 2:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Multiply 4 with the digit in tens (T) place, that is, 4 × 4 = 16. Now,
        add this to the carry-over from the previous step. 16 + 2 (carry-over
        from step 1) = 18. From this, carry 1 to the hundreds (H) column.
      </Text.TextNormal>
      <Text.TextMedium
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        4 × 4 = 16 + 2 = 18
      </Text.TextMedium>
      <Text.TextNormal></Text.TextNormal>
      <Text.TextMedium style={styles.text}>Step 3:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Multiply 4 with the digit in hundreds (H) place, 4 × 2 = 8 hundreds. 8 +
        1 (carry-over from step 2) = 9.
      </Text.TextNormal>
      <Text.TextMedium
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        4 × 2 = 8 + 1 = 9
      </Text.TextMedium>
      <Text.TextNormal></Text.TextNormal>
      <Text.TextMedium style={styles.text}>Step 4:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Therefore, the product of
      </Text.TextNormal>
      <Text.TextNormal style={{ fontSize: 25, textAlign: "center" }}>
        245 x 4 =
        <Text.TextMedium style={[styles.highlight, { fontSize: 25 }]}>
          {" "}
          980.
        </Text.TextMedium>
      </Text.TextNormal>
    </ScrollView>
  );
};

export default WordProblem;
