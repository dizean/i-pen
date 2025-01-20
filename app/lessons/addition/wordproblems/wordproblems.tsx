import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../styles';

const WordProblem = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.subtitle}>Word Problems in Addition</Text>
        {/* Section 1 */}
        <Text style={styles.text}>
        The concept of the addition operation is used in our day-to-day activities.
        We should carefully observe the situation and identify the solution 
        using the tips and tricks that follows addition
        </Text>
        {/* Section 2 */}
        <Text style={styles.text}>
        Let us understand how to solve addition word problems with the help of an interesting example.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Example :</Text>
        </Text>
        <Text style={styles.text}>
        A soccer match had 4535 spectators in the first row and 2332 spectators in the second row. 
        Using the concept of addition find the total number of spectators present in the match.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Solution :</Text>
        </Text>
        <Text style={styles.text}>
        The number of spectators in the first row is <Text style={styles.textbold}>4545</Text>.
        </Text>
        <Text style={styles.text}>
        The number of spectators in the 
        second row is <Text style={styles.textbold}>2332</Text>.
        </Text>
        <Text style={styles.text}>
        We can get the total number of spectators if we add the given 
        number of spectators in the two rows.
        </Text>
        <Text style={styles.text}>
        Here <Text style={styles.textbold}>4545</Text> and <Text style={styles.textbold}>2332</Text> are the addends. 
        </Text>
        <Text style={styles.text}>
        Let us find the 
        total number of spectators by adding these two numbers using the following steps.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Step 1:</Text>
        </Text>
        <Text style={styles.text}>
        Add the digits in the ones (O) place.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>(5 + 2 = 7)</Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Step 2:</Text>
        </Text>
        <Text style={styles.text}>
        Add the digits in the tens (T) place.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>(3 + 3 = 6)</Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Step 3:</Text>
        </Text>
        <Text style={styles.text}>
        Add the digits in the hundreds (H) place.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>(5 + 3 = 8)</Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Step 4:</Text>
        </Text>
        <Text style={styles.text}>
        Add the digits in the thousands (Th) place.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>(4 + 2 = 6)</Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Step 5:</Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>4535 + 2332 = 6867</Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Therefore</Text>, 
        the total number of spectators present in the match is
        <Text style={styles.textbold}> 6867</Text>.
        </Text>
    </ScrollView>
  );
};

export default WordProblem;
