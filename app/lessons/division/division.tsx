import React, { useRef, useState } from "react";
import {ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Text from "@/context/FontContent";
import Objectives from "../objectives/objectives";
import SpeechComponent from "./speech/speech";
import Introduction from "./introduction/introduction";
import Test from "@/app/practice/practice";
import Parts from "./parts/parts";
import * as Speech from 'expo-speech'
export default function Subtraction() {
  const [currentSection, setCurrentSection] = useState(1);
    const [isPracticeComplete, setIsPracticeComplete] = useState(false);
    const router = useRouter();
    const speechRef = useRef<{ stopSpeech: () => void } | null>(null);
  
    const handleNext = () => {
      if (speechRef.current) {
        speechRef.current.stopSpeech();
      }
      if (currentSection < 4) {
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
    const [stopAll, setStopAll] = useState(false)
    const handleReturnHome = () => {
      setStopAll(true)
      if (speechRef.current) {
        speechRef.current.stopSpeech(); 
      }
      router.push('/content/content');
      
    };
  return (
    <>
     <ImageBackground source={require('../../../assets/images/bluebgcut.png')} style={{ flex: 1, backgroundColor: "#000" }}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {currentSection === 1 && <Objectives />} 
      {currentSection === 2 && <Introduction />} 
      {currentSection === 3 && <Parts />} 
      {currentSection === 4 && <Test subject="division" stop={stopAll}/>} 
      
      </ScrollView>
      
    </ImageBackground>
    <ImageBackground source={require('../../../assets/images/bluebgcut.png')} style={styles.fixedButtonContainer}>
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
        {currentSection !== 4 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            // disabled={currentSection === 5 && !isPracticeComplete}
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
