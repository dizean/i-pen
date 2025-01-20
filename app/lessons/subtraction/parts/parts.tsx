import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import styles from "../styles";
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Parts of Subtraction</Text>
      <Text style={styles.sectiontititle}>Minuend</Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
          <Text style={styles.highlight}>1</Text>
          <Text> - </Text>
          <Text>1</Text>
          <Text> = </Text>
          <Text> 0 </Text>
        </Text>
      </Text>
      <Text style={styles.text}>
        TThe number from which the other number is subtracted.
      </Text>
      <Text style={styles.sectiontititle}>Subtrahend</Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
          <Text>1</Text>
          <Text> -</Text>
          <Text style={styles.highlight}>1</Text>
          <Text> = </Text>
          <Text> 0 </Text>
        </Text>
      </Text>
      <Text style={styles.text}>
        The number which is to be subtracted from the minuend.
      </Text>
      <Text style={styles.sectiontititle}>Difference</Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
          <Text>1</Text>
          <Text> - </Text>
          <Text>1</Text>
          <Text> = </Text>
          <Text style={styles.highlight}> 0 </Text>
        </Text>
      </Text>
      <Text style={styles.text}>
        The final result after subtracting the subtrahend from the minuend.
      </Text>
      <Text style={styles.sectiontititle}>Subtraction Formula</Text>
      <Text style={styles.text}>
       Minuend - Subtrahend = Difference
      </Text>
      <Image
        style={{
          width: "100%",
          resizeMode: "contain",
          height: 100,
          marginVertical: 10,
        }}
        source={require("../../../../assets/images/sform.png")}
      />
    </View>
  );
};
export default Parts;
