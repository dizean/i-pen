import React, { useState } from 'react';
import {ScrollView, TouchableOpacity } from 'react-native';
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
        What is Multiplication?
      </Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      In math, <Text.TextBold>multiplication</Text.TextBold> is the method of finding the product of two or more numbers. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      It is a primary arithmetic operation that is used quite often in real life. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      Multiplication is used when we need to combine groups of equal sizes.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      <Text.TextBold>Multiplication </Text.TextBold>
      is an operation that represents the basic idea of repeated addition of the same number. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      <Text.TextBold>Multiplication </Text.TextBold>
      is used to simplify the task of repeated addition of the same number.
      </Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>
      Multiplication symbol
      </Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        The<Text.TextBold> multiplication symbol </Text.TextBold> 
        is one of the commonly used math symbols. 
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
      Apart from the cross symbol<Text.TextBold> (x) </Text.TextBold>, multiplication is also denoted 
      by the mid-line dot operator<Text.TextBold> (⋅) </Text.TextBold>, and by the asterisk sign 
      <Text.TextBold> (*) </Text.TextBold>.
      </Text.TextNormal>
      <Image
        contentFit='contain'
        source={require("../../../../assets/images/multiply.png")}
        style={[styles.image, {height:100}]}
      />
    </ScrollView>
  );
};

export default Introduction;
