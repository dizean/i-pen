import React from 'react';
import {  Image, View } from 'react-native';
import { Text } from '@/context/FontContent';
import styles from '../styles';
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Parts of Divison</Text>
      <Text style={styles.sectiontititle}>Divison Formula</Text>
      <Text style={styles.text}>The division formula is expressed as, </Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text style={styles.highlight}>Dividend</Text> 
          <Text> ÷ </Text>
          <Text style={styles.highlight}>Divisor</Text>
        <Text> = </Text>
        <Text style={styles.highlight}>Quotient</Text>
      </Text>
      <Text style={styles.text}>where: </Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text style={styles.highlight}>8</Text> 
          <Text> ÷ </Text>
          <Text>4</Text>
        <Text> = </Text>
        <Text>2</Text>
      </Text>
      <Text style={styles.text}><Text>Dividend:</Text> The dividend is the number that will be divided.</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text >8</Text> 
          <Text> ÷ </Text>
          <Text style={styles.highlight}>4</Text>
        <Text> = </Text>
        <Text>2</Text>
      </Text>
      <Text style={styles.text}><Text>Divisor:</Text> A number by which another number is to be divided.</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text >8</Text> 
          <Text> ÷ </Text>
          <Text >4</Text>
        <Text> = </Text>
        <Text style={styles.highlight}>2</Text>
      </Text>
      <Text style={styles.text}><Text>Quotient:</Text> A result obtained by dividing one quantity by another.</Text>
      <Text style={[styles.textcenter,styles.text]}>
          <Text >7</Text> 
          <Text style={styles.highlight}> ÷ </Text>
          <Text >5</Text>
        <Text> = </Text>
        <Text >35</Text>
      </Text>
      <Text style={styles.text}><Text>Divison symbol:</Text> '÷' (which connects the entire expression)</Text>
    <Image
            style={{
              width: "100%",
              resizeMode: "contain",
              height: 135,
              marginVertical: 10,
            }}
            source={require("../../../../assets/images/divpic.png")}
          />
    </View>
  );
};
export default Parts;
