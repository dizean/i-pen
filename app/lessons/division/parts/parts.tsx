import React from 'react';
import {  Image, View } from 'react-native';
import * as Text from "@/context/FontContent";
import styles from '../styles';
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text.TextBold style={styles.subtitle}>Parts of Divison</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Divison Formula</Text.TextMedium>
      <Text.TextNormal style={styles.text}>The division formula is expressed as, </Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium style={styles.highlight}>Dividend</Text.TextMedium> 
          <Text.TextNormal> ÷ </Text.TextNormal>
          <Text.TextMedium style={styles.highlight}>Divisor</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium style={styles.highlight}>Quotient</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>where: </Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium style={styles.highlight}>8</Text.TextMedium> 
          <Text.TextNormal> ÷ </Text.TextNormal>
          <Text.TextMedium>4</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium>2</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Dividend:</Text.TextMedium> The dividend is the number that will be divided.</Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium >8</Text.TextMedium> 
          <Text.TextNormal> ÷ </Text.TextNormal>
          <Text.TextMedium style={styles.highlight}>4</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium>2</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Divisor:</Text.TextMedium> A number by which another number is to be divided.</Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium >8</Text.TextMedium> 
          <Text.TextNormal> ÷ </Text.TextNormal>
          <Text.TextMedium >4</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium style={styles.highlight}>2</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Quotient:</Text.TextMedium> A result obtained by dividing one quantity by another.</Text.TextNormal>
      <Text.TextNormal style={[styles.textcenter,styles.text]}>
          <Text.TextMedium >7</Text.TextMedium> 
          <Text.TextNormal style={styles.highlight}> ÷ </Text.TextNormal>
          <Text.TextMedium >5</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextMedium >35</Text.TextMedium>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}><Text.TextMedium>Divison symbol:</Text.TextMedium> '÷' (which connects the entire expression)</Text.TextNormal>
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
