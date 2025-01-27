import React from 'react';
import { Image, ScrollView } from 'react-native';
import styles from '../styles';
import * as Text from "@/context/FontContent";
const WordProblem = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text.TextBold style={styles.subtitle}>Word Problems in Subtraction</Text.TextBold>
        {/* Section 1 */}
        <Text.TextNormal style={styles.text}>
        The concept of subtraction is often used in our day-to-day activities. 
        </Text.TextNormal>
        {/* Section 2 */}
        <Text.TextNormal style={styles.text}>
        Let us understand how to solve real-life 
        subtraction word problems with the help of an interesting example.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>Example :</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        A soccer match had a total of 4535 spectators. After the first 
        innings, 2332 spectators left the stadium. Find the number of remaining spectators.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>Solution :</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        The total number of spectators present in the first innings is <Text.TextMedium>4545</Text.TextMedium>.
        </Text.TextNormal>
        <Text.TextNormal style={styles.text}>
        The number of spectators who left the stadium
        after the first innings is <Text.TextMedium>2332</Text.TextMedium>.
        </Text.TextNormal>
        <Text.TextNormal style={styles.text}>
        Here <Text.TextMedium>4545</Text.TextMedium> is the minuend 
        and <Text.TextMedium>2332</Text.TextMedium> is the subtrahend. 
        </Text.TextNormal>
        <Image
                source={require("../../../../assets/images/sword.png")}
                style={{
                  width: "100%",
                  height: 300,
                  resizeMode: "contain",
                  marginVertical: 10,
                }}
              />
        <Text.TextNormal style={styles.text}>
        Therefore, 
        the number of remaining spectators is
        <Text.TextMedium> 2203</Text.TextMedium>.
        </Text.TextNormal>
    </ScrollView>
  );
};

export default WordProblem;
