import React from 'react';
import { ScrollView } from 'react-native';
import styles from '../styles';
import * as Text from "@/context/FontContent";
const WordProblem = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text.TextBold style={styles.subtitle}>Word Problems in Addition</Text.TextBold>
        {/* Section 1 */}
        <Text.TextNormal style={styles.text}>
        The concept of the addition operation is used in our day-to-day activities.
        We should carefully observe the situation and identify the solution 
        using the tips and tricks that follows addition
        </Text.TextNormal>
        {/* Section 2 */}
        <Text.TextNormal style={styles.text}>
        Let us understand how to solve addition word problems with the help of an interesting example.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>Example :</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        A soccer match had 4535 spectators in the first row and 2332 spectators in the second row. 
        Using the concept of addition find the total number of spectators present in the match.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>Solution :</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        The number of spectators in the first row is <Text.TextMedium>4545</Text.TextMedium>.
        </Text.TextNormal>
        <Text.TextNormal style={styles.text}>
        The number of spectators in the 
        second row is <Text.TextMedium>2332</Text.TextMedium>.
        </Text.TextNormal>
        <Text.TextNormal style={styles.text}>
        We can get the total number of spectators if we add the given 
        number of spectators in the two rows.
        </Text.TextNormal>
        <Text.TextNormal style={styles.text}>
        Here <Text.TextMedium>4545</Text.TextMedium> and <Text.TextMedium>2332</Text.TextMedium> are the addends. 
        </Text.TextNormal>
        <Text.TextNormal style={styles.text}>
        Let us find the 
        total number of spectators by adding these two numbers using the following steps.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>Step 1:</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        Add the digits in the ones (O) place.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>(5 + 2 = 7)</Text.TextMedium>
        <Text.TextMedium style={styles.text}>Step 2:</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        Add the digits in the tens (T) place.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>(3 + 3 = 6)</Text.TextMedium>
        <Text.TextMedium style={styles.text}>Step 3:</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        Add the digits in the hundreds (H) place.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>(5 + 3 = 8)</Text.TextMedium>
        <Text.TextMedium style={styles.text}>Step 4:</Text.TextMedium>
        <Text.TextNormal style={styles.text}>
        Add the digits in the thousands (Th) place.
        </Text.TextNormal>
        <Text.TextMedium style={styles.text}>(4 + 2 = 6)</Text.TextMedium>
        <Text.TextMedium style={styles.text}>Step 5:</Text.TextMedium>
        <Text.TextMedium style={styles.text}>4535 + 2332 = 6867</Text.TextMedium>
        <Text.TextNormal style={styles.text}>Therefore , 
        the total number of spectators present in the match is
        <Text.TextMedium> 6867</Text.TextMedium>.
        </Text.TextNormal>
    </ScrollView>
  );
};

export default WordProblem;
