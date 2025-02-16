import React from 'react';
import {  Image, View } from 'react-native';
import { Text } from '@/context/FontContent';
import styles from '../styles';
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Parts of Multiplication</Text>
      <Text style={styles.sectiontititle}>Multiplication Formula</Text>
      <Text style={styles.text}>The multiplication formula is expressed as, </Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text style={styles.highlight}>Multiplicand</Text> 
          <Text> x </Text>
          <Text style={styles.highlight}>Multiplier</Text>
        <Text> = </Text>
        <Text style={styles.highlight}>Product</Text>
      </Text>
      <Text style={styles.text}>where: </Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text style={styles.highlight}>7</Text> 
          <Text> x </Text>
          <Text>5</Text>
        <Text> = </Text>
        <Text>35</Text>
      </Text>
      <Text style={styles.text}><Text>Multiplicand:</Text> The first number (factor).</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text >7</Text> 
          <Text> x </Text>
          <Text style={styles.highlight}>5</Text>
        <Text> = </Text>
        <Text>35</Text>
      </Text>
      <Text style={styles.text}><Text>Multiplier:</Text> The second number (factor).</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text >7</Text> 
          <Text> x </Text>
          <Text >5</Text>
        <Text> = </Text>
        <Text style={styles.highlight}>35</Text>
      </Text>
      <Text style={styles.text}><Text>Product:</Text> The final result after multiplying the multiplicand and multiplier.</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text >7</Text> 
          <Text style={styles.highlight}> x </Text>
          <Text >5</Text>
        <Text> = </Text>
        <Text >35</Text>
      </Text>
      <Text style={styles.text}><Text>Multiplication symbol:</Text> '×' (which connects the entire expression)</Text>
    <Image
            style={{
              width: "100%",
              resizeMode: "contain",
              height: 135,
              marginVertical: 10,
            }}
            source={require("../../../../assets/images/multipic.png")}
          />
    </View>
  );
};
export default Parts;
