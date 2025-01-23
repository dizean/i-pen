import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import Objectives from "./objectives/objectives";
import AntDesign from '@expo/vector-icons/AntDesign';
import SpeechComponent from "./speech/speech";
import VideoPlayer from "./video/video";
import Introduction from "./introduction/introduction";
import Parts from "./parts/parts";
import Practice from "./examples/examples";
import WoRegroup from "./methods/woregroup/woregroup";
import WRegroup from "./methods/wregroup/wregroup";
import Line from "./methods/line/line";
import WordProblem from "./wordproblems/wordproblems";
import Test from "./practice/practice";
export default function Subtraction() {
  const [currentSection, setCurrentSection] = useState(1);
    const [isPracticeComplete, setIsPracticeComplete] = useState(false);
    const router = useRouter();
    const speechRef = useRef<{ stopSpeech: () => void } | null>(null);
  
    const handleNext = () => {
      if (speechRef.current) {
        speechRef.current.stopSpeech();
      }
      if (currentSection < 10) {
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
      router.push('/content/content');
    };

  return (
    <>
     <ImageBackground source={require('../../../assets/images/greenbgcut.png')} style={{ flex: 1, backgroundColor: "#000" }}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {currentSection === 1 && <Objectives />} 
        {currentSection === 2 && (
          <>
            <Text style={styles.subtitle}>Watch and Sing the Subtraction Song</Text>
            <VideoPlayer />
          </>
        )}
      {currentSection === 3 && <Introduction />} 
      {currentSection === 4 && <Parts />} 
      {currentSection === 5 && (
          <>
            <Text style={styles.subtitle}>Practice</Text>
            <Practice onComplete={handlePracticeComplete} />
          </>
        )}

      {currentSection === 6 && <WoRegroup />} 
      {currentSection === 7 && <WRegroup />} 
      {currentSection === 8 && <Line />} 
      {currentSection === 9 && <WordProblem />} 
      {currentSection === 10 && (
          <>
            <Text style={styles.subtitle}>Practice What You Have Learned</Text>
            <Test />
          </>
        )}
      </ScrollView>
      
    </ImageBackground>
    <ImageBackground source={require('../../../assets/images/greenbgcutbt.png')} style={styles.fixedButtonContainer}>
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
        {currentSection !== 10 ? (
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
