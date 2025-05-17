import React, { useState, useRef } from "react";
import { ScrollView, TouchableOpacity, ImageBackground } from "react-native";
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
import AntDesign from "@expo/vector-icons/AntDesign";
import VideoPlayer from "../video/video";
import Objectives from "../objectives/objectives";
import Test from "@/app/practice/practice";
export default function Addition() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);
  const router = useRouter();
  const speechRef = useRef<{ stopSpeech: () => void } | null>(null);
  const sectionRef = useRef<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const handleSpeechToggle = () => {
    if (sectionRef.current) {
      sectionRef.current.toggleSpeech();
      setIsSpeaking((prev) => !prev);
    }
  };
  const stopCurrentSpeech = () => {
    if (sectionRef.current) {
      sectionRef.current.stopSpeech();
    }
    setIsSpeaking(false);
  };
  const handleNext = () => {
    stopCurrentSpeech();
    if (currentSection < 11) setCurrentSection((prev) => prev + 1);
  };

  const handlePrev = () => {
    stopCurrentSpeech();
    if (currentSection > 1) setCurrentSection((prev) => prev - 1);
  };
  const handlePracticeComplete = () => {
    setIsPracticeComplete(true);
    setCurrentSection(6);
  };

  const [stopAll, setStopAll] = useState(false);
  const handleReturnHome = () => {
    setStopAll(true);
    if (speechRef.current) {
      speechRef.current.stopSpeech();
    }
    router.push("/content/content");
  };
  return (
    <>
      <ImageBackground style={{ flex: 1, backgroundColor: "#fff" }} source={require('../../../assets/images/addbg.png')}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {currentSection === 1 && <Objectives />}
          {currentSection === 2 && <VideoPlayer />}
          {currentSection === 3 && <Introduction ref={sectionRef} />}

          {currentSection === 4 && <Parts />}
          {currentSection === 5 && (
            <Examples onComplete={handlePracticeComplete} />
          )}
          {currentSection === 6 && <WoRegroup />}
          {currentSection === 7 && <WRegroup />}
          {currentSection === 8 && <LineAdd />}
          {currentSection === 9 && <Properties />}
          {currentSection === 10 && <WordProblem />}
          {currentSection === 11 && <Test subject="addition" stop={stopAll} />}
        </ScrollView>
      </ImageBackground>
      <ImageBackground style={[styles.fixedButtonContainer, { backgroundColor: "#FDDA0D" }]}>
        {currentSection !== 1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handlePrev}
            disabled={currentSection === 1}
          >
            <AntDesign name="doubleleft" size={30} color="#FFF" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled style={styles.button} onPress={handleReturnHome}>
            {/* <AntDesign name="home" size={30} color="#38bfe7" /> */}
          </TouchableOpacity>
        )}
        {currentSection !== 11 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            disabled={currentSection === 5 && !isPracticeComplete}
          >
            <AntDesign name="doubleright" size={30} color="#fff" />
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
