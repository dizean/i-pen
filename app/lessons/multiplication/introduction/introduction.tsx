import React, { useState } from 'react';
import {ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Text } from '@/context/FontContent';
import { Image } from 'expo-image';

const Introduction = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>
        Introduction
      </Text>
      <Text style={styles.sectiontititle}>
        What is Multiplication?
      </Text>
      <Text style={styles.text}>
      In math, <Text>multiplication</Text> is the method of finding the product of two or more numbers. 
      </Text>
      <Text style={styles.text}>
      It is a primary arithmetic operation that is used quite often in real life. 
      </Text>
      <Text style={styles.text}>
      Multiplication is used when we need to combine groups of equal sizes.
      </Text>
      <Text style={styles.text}>
      <Text>Multiplication </Text>
      is an operation that represents the basic idea of repeated addition of the same number. 
      </Text>
      <Text style={styles.text}>
      <Text>Multiplication </Text>
      is used to simplify the task of repeated addition of the same number.
      </Text>
      <Text style={styles.sectiontititle}>
      Multiplication symbol
      </Text>
      <Text style={styles.text}>
        The<Text> multiplication symbol </Text> 
        is one of the commonly used math symbols. 
      </Text>
      <Text style={styles.text}>
      Apart from the cross symbol<Text> (x) </Text>, multiplication is also denoted 
      by the mid-line dot operator<Text> (⋅) </Text>, and by the asterisk sign 
      <Text> (*) </Text>.
      </Text>
      <Image
        contentFit='contain'
        source={require("../../../../assets/images/multiply.png")}
        style={[styles.image, {height:100}]}
      />
    </ScrollView>
  );
};

export default Introduction;
