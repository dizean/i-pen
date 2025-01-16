import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../styles';

const WordProblem = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Addition Word Problem</Text>
        {/* Section 1 */}
        <Text style={styles.text}>
        The concept of the addition operation is used in our day-to-day activities.
        We should carefully observe the situation and identify the solution 
        using the tips and tricks that follows addition
        </Text>
        {/* Section 2 */}
        <Text style={styles.text}>
        Let us understand how to solve addition word problems with the help of an interesting example.
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
        The number of spectators in the first row = 4535
        </Text>
        <Text style={styles.text}>
        The number of spectators in the 
        second row = 2332.
        </Text>
        <Text style={styles.text}>
        We can get the total number of spectators if we add the given 
        number of spectators in the two rows.
        </Text>
        <Text style={styles.text}>
        Here 4535 and 2332 are the addends. 
        </Text>
        <Text style={styles.text}>
        Let us find the 
        total number of spectators by adding these two numbers using the following steps.
        </Text>
        <Text style={styles.textbold}>Step 1:</Text>
        <Text style={styles.text}>
        Add the digits in the ones place. (5 + 2 = 7)
        </Text>
        <Text style={styles.textbold}>Step 2:</Text>
        <Text style={styles.text}>
        Add the digits in the tens place. (3 + 3 = 6)
        </Text>
        <Text style={styles.textbold}>Step 3:</Text>
        <Text style={styles.text}>
        Add the digits in the hundreds place. (5 + 3 = 8)
        </Text>
        <Text style={styles.textbold}>Step 4:</Text>
        <Text style={styles.text}>
        Now add digits in the thousands place. (4 + 2 = 6)
        </Text>
        <Text style={styles.textbold}>Step 5:</Text>
        <Text style={styles.text}>
        4535 + 2332 = 6867
        </Text>
        <Text style={styles.text}>
        <Text style={styles.textbold}>Therefore</Text>, 
        the total number of spectators present in the match =  
        <Text style={styles.textbold}> 6867</Text>.
        </Text>
    </ScrollView>
  );
};

export default WordProblem;
