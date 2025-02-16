import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../styles";
import { Text } from '@/context/FontContent';
const WordProblem = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>
        Word Problems in Multiplication
      </Text>
      <Text></Text>
      {/* Section 1 */}
      <Text style={styles.text}>
        <Text>Multiplication </Text>
        word problems can be easily solved by carefully observing the situation
        and identifying the solution.
      </Text>
      <Text></Text>
      {/* Section 2 */}
      <Text style={styles.text}>Example :</Text>
      <Text style={styles.text}>
        A box contains 245 fruits. Find the number of fruits in 4 such boxes
        using the multiplication formula.
      </Text>
      <Text></Text>
      <Text style={styles.text}>Solution :</Text>
      <Text style={styles.text}>
        To solve such multiplication word problems the easiest way is to note
        down the given parameters and then solve.
      </Text>
      <Text></Text>
      <Text style={styles.text}>Given :</Text>
      <Text style={styles.text}>
        The total number of fruits in one box ={" "}
        <Text>245</Text>.
      </Text>
      <Text style={styles.text}>
        The number of boxes = <Text>4</Text>.
      </Text>
      <Text style={styles.text}>
        Total number of fruits in 4 such boxes ={" "}
        <Text>245 × 4.</Text>.
      </Text>
      <Text></Text>
      <Text style={styles.text}>
        Let us multiply 245 × 4 using the steps given below and try to relate
        them with the following figure.
      </Text>
      <Text></Text>
      <Image
        source={require("../../../../assets/images/wordmulti.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginVertical: 10,
        }}
      />
      <Text></Text>
      <Text style={styles.text}>Step 1:</Text>
      <Text style={styles.text}>
        Start with the digit in ones (O) place. Multiply 4 × 5 = 20. Now carry 2
        to the tens (T) column.
      </Text>
      <Text
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        4 × 5 = 20
      </Text>
      <Text></Text>
      <Text style={styles.text}>Step 2:</Text>
      <Text style={styles.text}>
        Multiply 4 with the digit in tens (T) place, that is, 4 × 4 = 16. Now,
        add this to the carry-over from the previous step. 16 + 2 (carry-over
        from step 1) = 18. From this, carry 1 to the hundreds (H) column.
      </Text>
      <Text
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        4 × 4 = 16 + 2 = 18
      </Text>
      <Text></Text>
      <Text style={styles.text}>Step 3:</Text>
      <Text style={styles.text}>
        Multiply 4 with the digit in hundreds (H) place, 4 × 2 = 8 hundreds. 8 +
        1 (carry-over from step 2) = 9.
      </Text>
      <Text
        style={[styles.text, styles.textcenter, { fontSize: 25 }]}
      >
        4 × 2 = 8 + 1 = 9
      </Text>
      <Text></Text>
      <Text style={styles.text}>Step 4:</Text>
      <Text style={styles.text}>
        Therefore, the product of
      </Text>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        245 x 4 =
        <Text style={[styles.highlight, { fontSize: 25 }]}>
          {" "}
          980.
        </Text>
      </Text>
    </ScrollView>
  );
};

export default WordProblem;
