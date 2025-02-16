import React from 'react';
import { ScrollView } from 'react-native';
import styles from '../styles';
import { Text } from '@/context/FontContent';
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
        <Text style={styles.text}>Example :</Text>
        <Text style={styles.text}>
        A soccer match had 4535 spectators in the first row and 2332 spectators in the second row. 
        Using the concept of addition find the total number of spectators present in the match.
        </Text>
        <Text style={styles.text}>Solution :</Text>
        <Text style={styles.text}>
        The number of spectators in the first row is <Text>4545</Text>.
        </Text>
        <Text style={styles.text}>
        The number of spectators in the 
        second row is <Text>2332</Text>.
        </Text>
        <Text style={styles.text}>
        We can get the total number of spectators if we add the given 
        number of spectators in the two rows.
        </Text>
        <Text style={styles.text}>
        Here <Text>4545</Text> and <Text>2332</Text> are the addends. 
        </Text>
        <Text style={styles.text}>
        Let us find the 
        total number of spectators by adding these two numbers using the following steps.
        </Text>
        <Text style={styles.text}>Step 1:</Text>
        <Text style={styles.text}>
        Add the digits in the ones (O) place.
        </Text>
        <Text style={styles.text}>(5 + 2 = 7)</Text>
        <Text style={styles.text}>Step 2:</Text>
        <Text style={styles.text}>
        Add the digits in the tens (T) place.
        </Text>
        <Text style={styles.text}>(3 + 3 = 6)</Text>
        <Text style={styles.text}>Step 3:</Text>
        <Text style={styles.text}>
        Add the digits in the hundreds (H) place.
        </Text>
        <Text style={styles.text}>(5 + 3 = 8)</Text>
        <Text style={styles.text}>Step 4:</Text>
        <Text style={styles.text}>
        Add the digits in the thousands (Th) place.
        </Text>
        <Text style={styles.text}>(4 + 2 = 6)</Text>
        <Text style={styles.text}>Step 5:</Text>
        <Text style={styles.text}>4535 + 2332 = 6867</Text>
        <Text style={styles.text}>Therefore , 
        the total number of spectators present in the match is
        <Text> 6867</Text>.
        </Text>
    </ScrollView>
  );
};

export default WordProblem;
