import React, { useState } from 'react';
import {ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Image } from 'expo-image';
import { Text } from '@/context/FontContent';

const Introduction = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>
        Introduction
      </Text>
      <Text style={styles.sectiontititle}>
        What is Addition?
      </Text>
      <Text style={styles.text}>
        Addition is the process of adding two or more items together.
      </Text>
      <Text style={styles.text}>
        Addition in Math is the method of calculating the sum of two or more numbers.
      </Text>
      <Text style={styles.sectiontititle}>
        Addition symbol
      </Text>
      <Text style={styles.textcenter}>
        <Text style={styles.text}>
          1 <Text style={styles.highlight}> + </Text> 1 = ?
        </Text>
      </Text>
      <Text style={styles.text}>
        The addition symbol consists of one horizontal line and one vertical line.
      </Text>
      <Text style={styles.text}>
        It is also known as the addition sign or the plus sign.
      </Text>
      <Image
        contentFit='contain'
        source={require("../../../../assets/images/plus.png")}
        style={[styles.image, {height:100}]}
      />
    </ScrollView>
  );
};

export default Introduction;
