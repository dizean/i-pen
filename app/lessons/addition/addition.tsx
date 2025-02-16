import React, { useState, useRef } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import Examples from "../examples/examples";
import Introduction from "./introduction/introduction";
import Parts from "./parts/parts";
import WoRegroup from "./methods/woregroup/woregroup";
import WRegroup from "./methods/wregroup/wregroup";
import LineAdd from "./methods/lineadd/lineadd";
import Properties from "./properties/properties";
import WordProblem from "./wordproblems/wordproblems";
import SpeechComponent from "./speech/speech";
import AntDesign from '@expo/vector-icons/AntDesign';
import VideoPlayer from "../video/video";
// import Test from "./practice/practice";
import Objectives from "../objectives/objectives";
import * as Speech from 'expo-speech'
import Test from "@/app/practice/practice";
import { Text } from "@/context/FontContent";
import { RFPercentage } from "react-native-responsive-fontsize";
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
    <ImageBackground source={require('../../../assets/images/bgyellowcut.png')} style={{ flex: 1, backgroundColor: "#FDDA0D" }}>
    <ImageBackground source={require('../../../assets/images/bgyellowcut.png')}>
      <TouchableOpacity 
        style={{
          width: '100%',
          paddingHorizontal: '5%', paddingVertical: '5%',
          borderBottomWidth: 1, borderColor: "#38bfe7", 
        }}
        onPress={()=> router.push('/content/content')}
      >
        <Text style={{fontSize: RFPercentage(5), color: '#38bfe7'}}>Back to home</Text>
      </TouchableOpacity>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {currentSection === 1 && <Objectives />} 
        {currentSection === 2 && <VideoPlayer />}
        {currentSection === 3 && <Introduction />}
        {currentSection === 4 && <Parts />}
        {currentSection === 5 && <Examples onComplete={handlePracticeComplete} />}
        {currentSection === 6 && <WoRegroup />}
        {currentSection === 7 && <WRegroup />}
        {currentSection === 8 && <LineAdd />}
        {currentSection === 9 && <Properties />}
        {currentSection === 10 && <WordProblem />}
        {currentSection === 11 &&<Test subject="addition" stop={stopAll}/>}
     
      </ScrollView>
    </ImageBackground>
    <ImageBackground source={require('../../../assets/images/bgyellowcut.png')} style={styles.fixedButtonContainer}>
        {currentSection !== 1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handlePrev}
            disabled={currentSection === 1}
          >
            <AntDesign name="doubleleft" size={30} color="#38bfe7" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleReturnHome}>
            <AntDesign name="home" size={30} color="#38bfe7" />
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
            <AntDesign name="doubleright" size={30} color="#38bfe7" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleReturnHome}>
            <AntDesign name="home" size={30} color="#38bfe7" />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </>
    
  );
}
