import React, { useState } from 'react';
import {ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import * as Text from "@/context/FontContent";

const Introduction = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text.TextBold style={styles.subtitle}>
        Introduction
      </Text.TextBold>
      <Text.TextMedium style={styles.sectiontititle}>
        What is Addition?
      </Text.TextMedium>
      <Text.TextNormal style={styles.text}>
        Addition is the process of adding two or more items together.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        Addition in Math is the method of calculating the sum of two or more numbers.
      </Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>
        Addition symbol
      </Text.TextMedium>
      <Text.TextNormal style={styles.textcenter}>
        <Text.TextNormal style={styles.text}>
          1 <Text.TextNormal style={styles.highlight}> + </Text.TextNormal> 1 = ?
        </Text.TextNormal>
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        The addition symbol consists of one horizontal line and one vertical line.
      </Text.TextNormal>
      <Text.TextNormal style={styles.text}>
        It is also known as the addition sign or the plus sign
        <Text.TextBold > (+)</Text.TextBold>.
      </Text.TextNormal>
    </ScrollView>
  );
};

export default Introduction;
