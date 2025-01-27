import React, { useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated,
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
  const scaleValue = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.3,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleValue]);

  const grades = [
    "2","3","4","5","6",
  ];
  // const grades = [
  //   require("../../assets/images/2.png"),
  //   require("../../assets/images/3.png"),
  //   require("../../assets/images/4.png"),
  //   require("../../assets/images/5.png"),
  //   require("../../assets/images/6.png"),
  // ];
  return (
    <ImageBackground
      style={styles.container}
    >
      <View style={styles.wrapper}>
        <View style={styles.optionsContainer}>
          <ImageBackground style={styles.titlebg}>
            <TextBold style={styles.title}>Select Grade</TextBold>
          </ImageBackground>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require("../../assets/images/tutor.png")}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          {grades.map((grade, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => navigateToGrade(`${index + 2}`)}
            >
              <TextBold style={styles.optionText}>{grade}</TextBold>
              {/* <Animated.Image
                source={grade}
                style={[
                  styles.image,
                  {
                    transform: [{ scale: scaleValue }],
                  },
                ]}
              /> */}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}
