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
        What is Division?
      </Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      Division is separating a group into equal parts. 
      Division is used to separate a class into equal groups for a 
      game or activity or even slicing a pizza into equal portions between a group of friends.
      </Text.TextNormal>
      <Text.TextMedium style={styles.sectiontititle}>
      Division symbol
      </Text.TextMedium>
      <Text.TextNormal style={styles.text}>
      The division sign is a mathematical symbol consisting of a 
      short horizontal line with a dot above and another dot below, 
      used in Anglophone countries to indicate the operation of division.
      </Text.TextNormal>
      <Image
        contentFit='contain'
        source={require("../../../../assets/images/divided.png")}
        style={styles.image}
      />
    </ScrollView>
  );
};

export default Introduction;
