import React, { useState } from 'react';
import {  ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import * as Text from "@/context/FontContent";
import { Image } from 'expo-image';
const Introduction = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text.TextBold style={styles.subtitle}>
        Introduction
      </Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>
        What is Subtraction?
      </Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Subtraction is the process of taking away a number from another.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      It is a primary arithmetic operation that is denoted by a subtraction symbol
      is the method of calculating the difference between two numbers.
      </Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>
      Subtraction symbol
      </Text.TextMedium>
      <Text.TextNormal style={styles.textcenter}>
        <Text.TextNormal style={styles.text}>
          3 <Text.TextMedium style={styles.highlight}> - </Text.TextMedium> 2 = ?
        </Text.TextNormal>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      In mathematics, we have different symbols. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      The subtraction symbol is one of the important math symbol that we use while performing subtraction. 
      The subtraction symbol is called minus.
      </Text.TextNormal>
      <Image
        source={require("../../../../assets/images/minus.png")}
        style={[styles.image, {height:100}]}
      />
    </ScrollView>
  );
};

export default Introduction;
