import React from "react";
import { View, Image } from "react-native";
import styles from "../styles";
import * as Text from "@/context/FontContent";
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text.TextBold style={styles.subtitle}>Parts of Subtraction</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Minuend</Text.TextMedium>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium style={styles.highlight}>1</Text.TextMedium>
          <Text.TextNormal> - </Text.TextNormal>
          <Text.TextNormal>1</Text.TextNormal>
          <Text.TextNormal> = </Text.TextNormal>
          <Text.TextNormal> 0 </Text.TextNormal>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        TThe number from which the other number is subtracted.
      </Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>Subtrahend</Text.TextMedium>
      <Text.TextNormal style={[styles.textcenter, styles.text]}>
          <Text.TextNormal>1</Text.TextNormal>
          <Text.TextNormal> -</Text.TextNormal>
          <Text.TextMedium style={styles.highlight}>1</Text.TextMedium>
          <Text.TextNormal> = </Text.TextNormal>
          <Text.TextNormal> 0 </Text.TextNormal>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        The number which is to be subtracted from the minuend.
      </Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>Difference</Text.TextMedium>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextNormal>1</Text.TextNormal>
          <Text.TextNormal> - </Text.TextNormal>
          <Text.TextNormal>1</Text.TextNormal>
          <Text.TextNormal> = </Text.TextNormal>
          <Text.TextMedium style={styles.highlight}> 0 </Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        The final result after subtracting the subtrahend from the minuend.
      </Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>Subtraction Formula</Text.TextMedium>
      <Text.TextMedium style={styles.text}>
       Minuend - Subtrahend = Difference
      </Text.TextMedium>
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
