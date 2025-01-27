import React from 'react';
import {  View } from 'react-native';
import * as Text from "@/context/FontContent";
import styles from '../styles';
const Parts = () => {
  return (
    <View style={styles.container}>
      <Text.TextBold style={styles.subtitle}>Parts of Addition</Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>Addends</Text.TextMedium>
      <Text.TextNormal style={styles.textcenter}>
        <Text.TextNormal style={styles.text}>
          <Text.TextMedium style={styles.highlight}>1</Text.TextMedium> 
          <Text.TextNormal> + </Text.TextNormal>
          <Text.TextMedium style={styles.highlight}>1</Text.TextMedium>
        <Text.TextMedium> = </Text.TextMedium>
        <Text.TextNormal> ? </Text.TextNormal>
        </Text.TextNormal>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>The numbers that are added are known as the addends.</Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>Addition Symbol</Text.TextMedium>
      <Text.TextNormal style={styles.textcenter}>
        <Text.TextNormal style={styles.text}>
        <Text.TextNormal>1</Text.TextNormal>
        <Text.TextMedium style={styles.highlight}> + </Text.TextMedium>
        <Text.TextNormal>1</Text.TextNormal>
        <Text.TextNormal> = </Text.TextNormal>
        <Text.TextNormal> ? </Text.TextNormal>
        </Text.TextNormal>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        There is the addition symbol (+) which is placed in between the addends.
      </Text.TextNormal>
      <Text.TextBold style={styles.sectiontititle}>Sum</Text.TextBold>
      <Text.TextNormal style={styles.textcenter}>
        <Text.TextNormal style={styles.text}>
        <Text.TextNormal>1</Text.TextNormal>
        <Text.TextNormal> + </Text.TextNormal>
        <Text.TextNormal>1</Text.TextNormal>
        <Text.TextMedium style={styles.highlight}> = </Text.TextMedium>
        <Text.TextNormal> ? </Text.TextNormal>
        </Text.TextNormal>
      </Text.TextNormal>
        
      <Text.TextNormal style={styles.text}>
        The final result obtained after adding the addends is known as the sum.
      </Text.TextNormal>
    </View>
  );
};
export default Parts;
