import React from 'react';
import { ImageBackground, SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useRouter } from 'expo-router';

export default function App() {
  const route = useRouter()
  return (
    <ImageBackground
      source={require("../assets/images/bgstart.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.view}>
          <Text style={styles.title}>i - Pen</Text>
          <Text style={styles.text}>Interactive Presentation for</Text>
          <Text style={styles.text}>Enhancing Numeracy</Text>
          <Image style={styles.image} source={require('../assets/images/books.png')}/>
        </View>
        <View style={styles.view}>
          <TouchableOpacity onPress={()=>route.push('/selection/selection')}>
          <Text style={styles.text}>Start Learning</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}