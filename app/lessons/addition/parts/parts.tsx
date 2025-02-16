import React from 'react';
import {  View } from 'react-native';
import styles from '../styles';
import { Text } from '@/context/FontContent';
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Parts of Addition</Text>
      <Text style={styles.sectiontititle}>Addends</Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
          <Text style={styles.highlight}>1</Text> 
          <Text> + </Text>
          <Text style={styles.highlight}>1</Text>
        <Text> = </Text>
        <Text> ? </Text>
        </Text>
      </Text>
      <Text style={styles.text}>The numbers that are added are known as the addends.</Text>
      <Text style={styles.sectiontititle}>Addition Symbol</Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
        <Text>1</Text>
        <Text style={styles.highlight}> + </Text>
        <Text>1</Text>
        <Text> = </Text>
        <Text> ? </Text>
        </Text>
      </Text>
      <Text style={styles.text}>
        There is the addition symbol (+) which is placed in between the addends.
      </Text>
      <Text style={styles.sectiontititle}>Sum</Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
        <Text>1</Text>
        <Text> + </Text>
        <Text>1</Text>
        <Text style={styles.highlight}> = </Text>
        <Text> ? </Text>
        </Text>
      </Text>
        
      <Text style={styles.text}>
        The final result obtained after adding the addends is known as the sum.
      </Text>
    </View>
  );
};
export default Parts;
