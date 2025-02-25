import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Text,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
interface RouteParams {
  username?: string;
}

export default function Selection() {
  const router = useRouter();
  const route = useRoute();
  const { setUser, username} = useUser();
  const bgSoundRef = useRef<Audio.Sound | null>(null);
  // const { username } = (route.params as RouteParams) || {};
  const bgMusic = require("../../assets/audio/bgmusic.mp3");
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
  const navigateToGrade = (grade: string) => {
    setUser(username, grade);
    router.push("/introduction/introduction");
  };
  const rotationAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);
  const imageScaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(imageScaleValue, {
          toValue: 1.2,
          duration: 1500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(imageScaleValue, {
          toValue: 1,
          duration: 1500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const grades = [
    { image: require("../../assets/images/3.png"), grade: 3 },
    { image: require("../../assets/images/5.png"), grade: 5 },
    { image: require("../../assets/images/2.png"), grade: 2 },
    { image: require("../../assets/images/4.png"), grade: 4 },
    { image: require("../../assets/images/6.png"), grade: 6 },
  ];
  const  backgroundcolors = [
    '#01c59f',
    '#f77c57',
    '#1bbbeb',
    '#d69749',
    '#e4848c',
  ]
  const subcolors = [
    '#70ddbb',
    '#fbc4a5',
    '#53dbfb',
    '#fbbe62',
    '#fb8b9b'
  ]
  const letterAnimValues = useRef(
    "Please Choose Your Grade".split("").map(() => new Animated.Value(1))
  ).current;

  useEffect(() => {
    const animations = letterAnimValues.map((animValue) =>
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1.3,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.loop(Animated.stagger(200, animations)).start();
  }, []);
  
  return (
    <ImageBackground style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}  
          onPress={()=>{
            stopBgMusic();
            router.push('/library/library')
            }}>
          <ImageBackground
                source={require('../../assets/images/cloud.jpg')}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
            <Animated.View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: 'center'
              }}
            >
              {"Please Choose Your Grade".split(" ").map((word, index) => (
                <Animated.Text
                  key={index}
                  style={[
                    styles.title,
                    { fontFamily: "Font",  color: 'white' },
                    {
                      transform: [
                        {
                          scale:
                            letterAnimValues[index] || new Animated.Value(1),
                        },
                      ],
                    },
                  ]}
                >
                  {word}{" "}
                </Animated.Text>
              ))}
            </Animated.View>
            </ImageBackground>
          </TouchableOpacity>
          {grades.map((grade, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                {backgroundColor: backgroundcolors[index]}
              ]}
              onPress={() => {
                stopBgMusic();
                navigateToGrade(`${grade.grade}`);
              }}
              
            >
              <View style={[styles.circle, {backgroundColor: subcolors[index]}]}></View>
                <Animated.Image
                  source={grade.image}
                  style={[
                    styles.image,
                    { transform: [{ scale: imageScaleValue }] },
                  ]}
                />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}
