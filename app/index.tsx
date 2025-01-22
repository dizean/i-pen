import React from 'react';
import { ImageBackground, SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import styles from './styles';
export default function App() {
  const route = useRouter();
  return (
    <ImageBackground
      source={require("../assets/images/bgyellowbt.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.view}>
          <Text style={styles.title}>
            <Text style={styles.titleHighlight}>i</Text>-Pen
          </Text>
          <Text style={styles.text}>Interactive Presentation for</Text>
          <Text style={styles.text}>Enhancing Numeracy</Text>
          <Image style={styles.image} source={require('../assets/images/books.png')} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => route.push('/selection/selection')}
        >
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}