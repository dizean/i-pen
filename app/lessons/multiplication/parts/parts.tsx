import React from 'react';
import {  Image, View } from 'react-native';
import * as Text from "@/context/FontContent";
import styles from '../styles';
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text.TextBold style={styles.subtitle}>Parts of Multiplication</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Multiplication Formula</Text.TextMedium>
      <Text.TextNormal style={styles.text}>The multiplication formula is expressed as, </Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium style={styles.highlight}>Multiplicand</Text.TextMedium> 
          <Text.TextNormal> x </Text.TextNormal>
          <Text.TextMedium style={styles.highlight}>Multiplier</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium style={styles.highlight}>Product</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>where: </Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium style={styles.highlight}>7</Text.TextMedium> 
          <Text.TextNormal> x </Text.TextNormal>
          <Text.TextMedium>5</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium>35</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Multiplicand:</Text.TextMedium> The first number (factor).</Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium >7</Text.TextMedium> 
          <Text.TextNormal> x </Text.TextNormal>
          <Text.TextMedium style={styles.highlight}>5</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium>35</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Multiplier:</Text.TextMedium> The second number (factor).</Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium >7</Text.TextMedium> 
          <Text.TextNormal> x </Text.TextNormal>
          <Text.TextMedium >5</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium style={styles.highlight}>35</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Product:</Text.TextMedium> The final result after multiplying the multiplicand and multiplier.</Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium >7</Text.TextMedium> 
          <Text.TextNormal style={styles.highlight}> x </Text.TextNormal>
          <Text.TextMedium >5</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium >35</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Multiplication symbol:</Text.TextMedium> '×' (which connects the entire expression)</Text.TextNormal>
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
