import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import { Text } from '@/context/FontContent';
const WRegroup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>
        Methods in Solving Multiplication Problem
      </Text>
      <Text style={styles.sectiontititle}>Multiplication With Regrouping</Text>
      <Text style={styles.text}>
        <Text>Multiplication </Text>
        of more than two numbers with regrouping involves numbers with a 2-digit product.
      </Text>
      <Text style={styles.text}>Example:</Text>
      <Text style={styles.text}>
        Subtract
        <Text> 2468</Text> with
        <Text> 8</Text>
      </Text>
      <Text style={styles.text}>Solution:</Text>
      {/* Section 2 */}
      <Text style={styles.text}>
      Let us multiply 2468 × 8 using the steps given below and try to relate them with the following figure.
      </Text>
      <Image
        source={require("../../../../../assets/images/wregmulti.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginVertical: 10,
        }}
      />
      <Text style={styles.text}>Step 1:</Text>
      <Text style={styles.text}>
      Start with the digit in ones (O) place, that is, 8 × 8 = 64 ones 
      which means 6 tens 4 ones. Now, carry 6 tens to the tens (T) column.
      </Text>
        <Text
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
         8 × 8 = 64 
      </Text>
      <Text style={styles.text}>Step 2:</Text>
      <Text style={styles.text}>
      Multiply 8 with the digit in the tens (T) place, that is, 8 × 6 = 48 tens. 
      Now, we will add this to the carry-over. This means, 48 + 6 
      (carry-over from step 1) = 54. Carry 5 to the hundreds (H) column.
      </Text>
        <Text
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
         8 × 6 = 48 + 6 = 54.
        </Text>
      <Text style={styles.text}>Step 3:</Text>
      <Text style={styles.text}>
      Multiply 8 with the digit in the hundreds (H) place, that is, 8 × 4 = 32 
      hundreds. Now, let us add this to the carry-over from the previous step. 
      This means, 32 + 5 (carry-over from step 2) = 37. 
      We will again carry 3 to thousands (Th) column.
      </Text>
        <Text
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
          8 × 4 = 32 + 5 = 37
      </Text>
      <Text style={styles.text}>Step 4:</Text>
      <Text style={styles.text}>
      Multiply 8 with the digit in the thousands (Th) place, that is, 8 × 2 = 16 thousands. 
      So, let us again add this to the carry-over, that is, 16 + 3 (carry-over from step 3) = 19
      </Text>
        <Text
          style={[
            styles.text,
            styles.textcenter,
            { fontSize: 25 },
          ]}
        >
          8 × 2 = 16 + 3 = 19
        </Text>
      <Text style={styles.text}>Step 5:</Text>
      <Text style={styles.text}>
      Therefore, the product of
      </Text>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
      2468 × 8 = 
        <Text style={[styles.highlight, { fontSize: 25 }]}>
          {" "}
          19744.
        </Text>
      </Text>
    </ScrollView>
  );
};

export default WRegroup;
