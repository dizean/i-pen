import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import AdditionPractice from "./examples/examples";
import Introduction from "./introduction/introduction";
import Parts from "./parts/parts";
import Objectives from "./objectives/objectives";
import WoRegroup from "./methods/woregroup/woregroup";
import WRegroup from "./methods/wregroup/wregroup";
import LineAdd from "./methods/lineadd/lineadd";
import Properties from "./properties/properties";
import WordProblem from "./wordproblems/wordproblems";
import SpeechComponent from "./speech/speech";
import AntDesign from '@expo/vector-icons/AntDesign';
import AdditionPractie from "./practice/additionpractice";
import VideoPlayer from "./video/video";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Addition() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);
  const router = useRouter();
  const speechRef = useRef<{ stopSpeech: () => void } | null>(null);

  const handleNext = () => {
    if (speechRef.current) {
      speechRef.current.stopSpeech();
    }
    if (currentSection < 11) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (speechRef.current) {
      speechRef.current.stopSpeech();
    }
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handlePracticeComplete = () => {
    setIsPracticeComplete(true);
    setCurrentSection(6);
  };

  const handleReturnHome = () => {
    if (speechRef.current) {
      speechRef.current.stopSpeech(); 
    }
    router.push('/grade2/content/content');
  };
  return (
    <>
    <ImageBackground source={require('../../../assets/images/bgyellowcut.png')} style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {currentSection === 1 && <Objectives />} 
        {currentSection === 2 && (
          <>
            <Text style={styles.subtitle}>Watch and Sing the Addition Song</Text>
            <VideoPlayer />
          </>
        )}
        {currentSection === 3 && <Introduction />}
        {currentSection === 4 && <Parts />}
        {currentSection === 5 && (
          <>
            <Text style={styles.subtitle}>Practice</Text>
            <AdditionPractice onComplete={handlePracticeComplete} />
          </>
        )}
        {currentSection === 6 && <WoRegroup />}
        {currentSection === 7 && <WRegroup />}
        {currentSection === 8 && <LineAdd />}
        {currentSection === 9 && <Properties />}
        {currentSection === 10 && <WordProblem />}
        {currentSection === 11 && (
          <>
            <Text style={styles.subtitle}>Practice What You Have Learned</Text>
            <AdditionPractie />
          </>
        )}
      </ScrollView>
    </ImageBackground>
    <ImageBackground source={require('../../../assets/images/bgyellowbt.png')} style={styles.fixedButtonContainer}>
        {currentSection !== 1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handlePrev}
            disabled={currentSection === 1}
          >
            <AntDesign name="doubleleft" size={30} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleReturnHome}>
            <AntDesign name="home" size={30} color="black" />
          </TouchableOpacity>
        )}
        <SpeechComponent
          currentSection={currentSection}
          ref={speechRef} 
        />
        {currentSection !== 11 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            disabled={currentSection === 5 && !isPracticeComplete}
          >
            <AntDesign name="doubleright" size={30} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleReturnHome}>
            <AntDesign name="home" size={30} color="black" />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </>
    
  );
}
