import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import * as Text from "@/context/FontContent";
const Line = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text.TextBold style={styles.subtitle}>
        Methods in Solving Subtraction Problem
      </Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Number Line Subtraction</Text.TextMedium>

      {/* Section 1 */}
      <Text.TextNormal style={styles.text}>
      A <Text.TextMedium>number line</Text.TextMedium> is a visual aid that helps us understand 
      subtraction because it allows us to jump backward and forward on each number.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      To understand how this works, let us explore subtraction using a number line. 
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Example:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Subtract
        <Text.TextMedium> 4</Text.TextMedium> from
        <Text.TextMedium> 9</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextMedium style={styles.text}>Solution:</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      We will start by marking the number 9 on the number line.
      When we subtract using a number line, we count by moving one number 
      at a time towards the left-hand side. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      Since we are subtracting 4 from 9, 
      we will move 4 times to the left. The number on which you land after 4 
      backward jumps, is the answer. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        Hence,
        <Text.TextMedium> 9</Text.TextMedium> -
        <Text.TextMedium> 4</Text.TextMedium> =
        <Text.TextMedium> 5</Text.TextMedium>.
      </Text.TextNormal>
      <Image
        source={require("../../../../../assets/images/linesub.png")}
        style={styles.image}
      />
    </ScrollView>
  );
};

export default Line;
