import React, { useState } from "react";
import { View} from "react-native";
import * as Text from "@/context/FontContent";
import styles from "../styles";
interface RouteParams {
  grade?: string; 
}
export default function Objectives() {
  return (
    <View style={styles.container}>
      <Text.TextBold style={styles.title}>Lesson 2 : Subtraction</Text.TextBold>
      <Text.TextMedium style={styles.subtitle}>Objectives</Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      At the end of this lesson, you should be able to:
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      Develop skills to perform subtraction of numbers
      using various methods and strategies with the
      aid of computer-assisted tools.
      </Text.TextNormal>
    </View>
  );
}
