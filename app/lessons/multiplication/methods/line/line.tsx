import React from "react";
import { Image, ScrollView } from "react-native";
import styles from "../../styles";
import { Text } from '@/context/FontContent';
const Line = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.subtitle}>
        Methods in Solving Multiplication Problem
      </Text>
      <Text style={styles.sectiontititle}>
        Multiplication Using Number Line
      </Text>
      <Text style={styles.text}>Example:</Text>
      <Text style={styles.text}>
      Multiply
        <Text> 3</Text> x
        <Text> 5 </Text>
        using a number line.
      </Text>
      <Text style={styles.text}>Solution:</Text>
      <Text style={styles.text}>
      Observe the following number line to see the working of 3 × 5 = 15. 
      We will start from 0 and move towards the right of the number line, 
      we will form 3 groups of 5 equal intervals. This will take us to 15.
      </Text>
      <Image
        source={require("../../../../../assets/images/linemulti.png")}
        style={styles.image}
      />
      <Text style={styles.text}>
      The above number line shows 3 times 5 is 15. The representation 
      can also be written as 5 + 5 + 5 = 15. 
      </Text>
      <Text style={styles.text}>
      The multiplication statement 
      is expressed as, 
        <Text> 3</Text> x
        <Text> 4</Text> =
        <Text> 15</Text>.
      </Text>

    </ScrollView>
  );
};

export default Line;
