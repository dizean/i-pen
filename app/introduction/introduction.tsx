import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Animated,
  Easing,
  TextInput,
} from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
import { getUserByName, initDatabase, insertUser } from "@/database/dbservice";
import { Text } from "@/context/FontContent";

export default function Introduction() {
  const router = useRouter();
  const { setUser, grade, username, setPostTestScore, setPreTestScore } = useUser();
  const [nameInput, setNameInput] = useState("");
  const bgSoundRef = useRef<Audio.Sound | null>(null);
  const bgMusic = require("../../assets/audio/bgmusic2.mp3");
  useEffect(() => {
      playbgmusic();
    
      return () => {
        stopBgMusic(); // Cleanup when unmounting
      };
    }, []);
  const playbgmusic=async()=>{
    try {
      if (bgSoundRef.current) {
        return;
      }
      const { sound } = await Audio.Sound.createAsync(bgMusic, { shouldPlay: true, volume: .8 });
      bgSoundRef.current = sound;
      sound.setOnPlaybackStatusUpdate((status) => {
        if (
          status &&
          (status as AVPlaybackStatusSuccess).didJustFinish
        ) {
          sound.unloadAsync();
          bgSoundRef.current = null;
        }
      });
      await sound.playAsync(); 
    } catch (error) {
      console.error("Error playing correct sound:", error);
    }
  }
  const stopBgMusic = async () => {
    if (bgSoundRef.current) {
      await bgSoundRef.current.stopAsync();
      await bgSoundRef.current.unloadAsync();
      bgSoundRef.current = null;
    }
  };
  const handleSetUsername = async() => {
    if (nameInput.trim() === "") {
      Alert.alert("Error", "Please enter your name.");
      return;
    }
    
    setUser(nameInput, grade)
    try {
      const existingUser = await getUserByName(nameInput, Number(grade));
      console.log(existingUser);
      if (existingUser) {
        stopBgMusic();
        if(existingUser.pretestDone === "false"){
          router.push("/test/test");
        }
        else{
          setPreTestScore(existingUser.pretestscore);
          setPostTestScore(existingUser.posttestscore)
          router.push('/content/content');
        }
      } else {
        await insertUser(nameInput.trim(), Number(grade));
        stopBgMusic();
        router.push("/test/test");
      }
    } catch (error) {
      console.error("Database error:", error);
    }
  };
  const rotateValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    initDatabase();
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 7000, 
        easing: Easing.linear, 
        useNativeDriver: true,
      })
    ).start();
  }, []);
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ImageBackground
      style={styles.container}
      // source={require("../../assets/images/bgyellowcut.png")}
    >
      <View style={styles.wrapper}>
        <Animated.Image
          style={[styles.image, { transform: [{ rotate }] }]} // Using Animated.Image
          source={require("../../assets/images/calculator.png")}
        />
        <Text style={styles.subtitle}>Enter your name</Text>
        <TextInput
          style={[styles.input, {fontFamily: 'Font'}]}
          placeholder="Type your name"
          value={nameInput}
          onChangeText={setNameInput}
        />
        <TouchableOpacity
          style={[styles.button, !nameInput && styles.disabledButton]}
          onPress={()=>{
            handleSetUsername();
          }}
          disabled={!nameInput}
        >
          <Text
            style={[styles.buttonText, !nameInput && styles.disabledButtonText]}
          >
            Proceed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#38bfe7',marginTop: '2%'}]}
          onPress={()=>{
            stopBgMusic();
            router.push('/selection/selection');
          }}
        >
          <Text
            style={[styles.buttonText]}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
