import React, { useRef, useState } from "react";
import { ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Objectives from "../objectives/objectives";
import SpeechComponent from "./speech/speech";
import Introduction from "./introduction/introduction";
import Test from "@/app/practice/practice";
import Parts from "./parts/parts";
import * as Speech from "expo-speech";
import { Text } from "@/context/FontContent";
import { RFPercentage } from "react-native-responsive-fontsize";
import MakeEqual from "./methods/makeequal/makeequal";
import Array from "./methods/array/array";
import RepeatedSubtraction from "./methods/repeatedsubtraction/repeatedsubtraction";
export default function Subtraction() {
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
      <ImageBackground style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {currentSection === 1 && <Objectives />}
          {currentSection === 2 && <Introduction />}
          {currentSection === 3 && <Parts />}
          {currentSection === 4 && <MakeEqual />}
          {currentSection === 5 && <Array />}
          {currentSection === 6 && <RepeatedSubtraction />}
          {currentSection === 7 && <Test subject="division" stop={stopAll} />}
        </ScrollView>
      </ImageBackground>
      <ImageBackground
        style={[styles.fixedButtonContainer, { backgroundColor: "white" }]}
      >
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
        <SpeechComponent currentSection={currentSection} ref={speechRef} />
        {currentSection !== 7 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            // disabled={currentSection === 5 && !isPracticeComplete}
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
