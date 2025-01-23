import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../styles';

const WordProblem = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.subtitle}>Word Problems in Subtraction</Text>
        {/* Section 1 */}
        <Text style={styles.text}>
        The concept of subtraction is often used in our day-to-day activities. 
        </Text>
        {/* Section 2 */}
        <Text style={styles.text}>
        Let us understand how to solve real-life 
        subtraction word problems with the help of an interesting example.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Example :</Text>
        </Text>
        <Text style={styles.text}>
        A soccer match had a total of 4535 spectators. After the first 
        innings, 2332 spectators left the stadium. Find the number of remaining spectators.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Solution :</Text>
        </Text>
        <Text style={styles.text}>
        The total number of spectators present in the first innings is <Text style={styles.textbold}>4545</Text>.
        </Text>
        <Text style={styles.text}>
        The number of spectators who left the stadium
        after the first innings is <Text style={styles.textbold}>2332</Text>.
        </Text>
        <Text style={styles.text}>
        Here <Text style={styles.textbold}>4545</Text> is the minuend 
        and <Text style={styles.textbold}>2332</Text> is the subtrahend. 
        </Text>
        <Image
                source={require("../../../../assets/images/sword.png")}
                style={{
                  width: "100%",
                  height: 300,
                  resizeMode: "contain",
                  marginVertical: 10,
                }}
              />
        <Text style={styles.text}>
        <Text style={styles.textbold}>Therefore</Text>, 
        the number of remaining spectators is
        <Text style={styles.textbold}> 2203</Text>.
        </Text>
    </ScrollView>
  );
};

export default WordProblem;
