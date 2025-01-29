import React, { useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated,
  Text,
} from "react-native";
import { TextBold } from "@/context/FontContent";
import styles from "./styles";
import { useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";
import { useRoute } from "@react-navigation/native";

interface RouteParams {
  username?: string;
}

export default function Selection() {
  const router = useRouter();
  const route = useRoute();
  const { setUser } = useUser();
  const { username } = (route.params as RouteParams) || {};
  const navigateToGrade = (grade: string) => {
    setUser(username ?? null, grade);
    router.push("/introduction/introduction");
  };

  const letterAnimValues = useRef(
    Array.from({ length: "Select Grade".length }, () => new Animated.Value(1))
  ).current;

  useEffect(() => {
    const animations = letterAnimValues.map((animValue) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: 1.3,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      )
    );
    Animated.stagger(100, animations).start();
  }, [letterAnimValues]);

  const imageScaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(imageScaleValue, {
          toValue: 1.3,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(imageScaleValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [imageScaleValue]);

  const grades = [
    require("../../assets/images/2.png"),
    require("../../assets/images/3.png"),
    require("../../assets/images/4.png"),
    require("../../assets/images/5.png"),
    require("../../assets/images/6.png"),
  ];

  return (
    <ImageBackground style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.optionsContainer}>
          <ImageBackground style={styles.titlebg}>
            <View style={styles.titleWrapper}>
              {"Select Grade".split("").map((letter, index) => (
                <Animated.Text
                  key={index}
                  style={[
                    styles.title,
                    {fontFamily: 'ComicSansBold'},
                    {
                      transform: [
                        {
                          scale: letterAnimValues[index], 
                        },
                      ],
                    },
                  ]}
                >
                  {letter}
                </Animated.Text>
              ))}
            </View>
          </ImageBackground>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require("../../assets/images/tutor.png")}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </TouchableOpacity>
          {grades.map((grade, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => navigateToGrade(`${index + 2}`)}
            >
              <Animated.Image
                source={grade}
                style={[styles.image, { transform: [{ scale: imageScaleValue }] }]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}
