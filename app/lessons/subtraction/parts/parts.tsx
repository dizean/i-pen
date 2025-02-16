import React from "react";
import { View, Image } from "react-native";
import styles from "../styles";
import { Text } from '@/context/FontContent';
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Parts of Subtraction</Text>
      <Text style={styles.sectiontititle}>Minuend</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text style={styles.highlight}>1</Text>
          <Text> - </Text>
          <Text>1</Text>
          <Text> = </Text>
          <Text> 0 </Text>
      </Text>
      <Text style={styles.text}>
        TThe number from which the other number is subtracted.
      </Text>
      <Text style={styles.sectiontititle}>Subtrahend</Text>
      <Text style={[styles.textcenter, styles.text]}>
          <Text>1</Text>
          <Text> -</Text>
          <Text style={styles.highlight}>1</Text>
          <Text> = </Text>
          <Text> 0 </Text>
      </Text>
      <Text style={styles.text}>
        The number which is to be subtracted from the minuend.
      </Text>
      <Text style={styles.sectiontititle}>Difference</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text>1</Text>
          <Text> - </Text>
          <Text>1</Text>
          <Text> = </Text>
          <Text style={styles.highlight}> 0 </Text>
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
          height: 100,
          marginVertical: 10,
        }}
        source={require("../../../../assets/images/sform.png")}
      />
    </View>
  );
};
export default Parts;
