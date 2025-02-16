import React, { useState } from "react";
import { View} from "react-native";
import {Text}from "@/context/FontContent";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
interface RouteParams {
  topic?: string;
}
export default function Objectives() {
  const route = useRoute()
  const { topic } = route.params as RouteParams || {};
  const [useTopic] = useState(() => ({
    lesson: (() => {
      switch (topic) {
        case 'Addition': return '1';
        case 'Subtraction': return '2';
        case 'Multiplication': return '3';
        case 'Division': return '4';
        default: return null;
      }
    })(),
    title: topic,
    text: topic?.toLowerCase(),
  }));
  
  return (
    <View>
      <Text style={styles.title}>Lesson {useTopic.lesson} : {useTopic.title}</Text>
      <Text style={styles.subtitle}>Objectives</Text>
      <Text style={styles.text}>
      At the end of this lesson, you should be able to:
      </Text>
      <Text style={styles.text}>
      Develop skills to perform {useTopic.text} of numbers
      using various methods and strategies with the
      aid of computer-assisted tools.
      </Text>
    </View>
  );
}
