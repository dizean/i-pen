import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import * as Text from "@/context/FontContent";
const Line = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>
        Methods in Solving Multiplication Problem
      </Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>
        Multiplication Using Number Line
      </Text.TextMedium>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Multiply
        <Text.TextMedium> 3</Text.TextMedium> x
        <Text.TextMedium> 5 </Text.TextMedium>
        using a number line.
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Observe the following number line to see the working of 3 × 5 = 15. 
      We will start from 0 and move towards the right of the number line, 
      we will form 3 groups of 5 equal intervals. This will take us to 15.
      </Text.TextNormal>
      <Image
        source={require("../../../../../assets/images/linemulti.png")}
        style={styles.image}
      />
      <Text.TextNormal style={styles.text}>
      The above number line shows 3 times 5 is 15. The representation 
      can also be written as 5 + 5 + 5 = 15. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      The multiplication statement 
      is expressed as, 
        <Text.TextMedium> 3</Text.TextMedium> x
        <Text.TextMedium> 4</Text.TextMedium> =
        <Text.TextMedium> 15</Text.TextMedium>.
      </Text.TextNormal>

    </ScrollView>
  );
};

export default Line;
