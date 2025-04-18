import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  BackHandler,
} from "react-native";
import { Text } from "@/context/FontContent";
import { useFocusEffect, useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { Audio } from "expo-av";
import { getUserByName } from "@/database/dbservice";
interface RouteParams {
  score: number;
}
export default function ContentPage() {
  const router = useRouter();
  const route = useRoute();
  const { score } = (route.params as RouteParams) || {};
  const {
    username,
    setUser,
    grade,
    preTestScore,
    setPreTestScore,
    postTestScore,
    setPostTestScore,
    selectedImage,
    setSelectedImage,
  } = useUser();
  const bgSoundRef = useRef<Audio.Sound | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = await getUserByName(String(username), Number(grade));
        setPreTestScore(query?.pretestscore ?? 0);
        setPostTestScore(query?.posttestscore ?? 0);
        setSelectedImage(query?.image);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [preTestScore, postTestScore]);
  useEffect(() => {
    if (!selectedImage) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]);
    }
  }, []);
  let scrollHeight = 0;
  const effectiveGrade = String(grade ?? "0");
  useEffect(() => {
    if (preTestScore === 0 || preTestScore === null) {
      setPreTestScore(score);
    }
  }, []);
  const bgMusic = require("../../assets/audio/bgmusic3.mp3");
  const playbgmusic = async () => {
    try {
      if (bgSoundRef.current) {
        return;
      }
      const { sound } = await Audio.Sound.createAsync(bgMusic, {
        shouldPlay: true,
        volume: 0.8,
        isLooping: true, // Ensures continuous play
      });

      bgSoundRef.current = sound;
      await sound.playAsync();
    } catch (error) {
      console.error("Error playing background music:", error);
    }
  };
  const stopBgMusic = async () => {
    if (bgSoundRef.current) {
      await bgSoundRef.current.stopAsync();
      await bgSoundRef.current.unloadAsync();
      bgSoundRef.current = null;
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      playbgmusic();
      return () => stopBgMusic(); // Stops music when navigating away
    }, [])
  );

  useEffect(() => {
    const handleBackPress = () => {
      stopBgMusic();
      return false; // Allow default back behavior
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
  const gridItems = [
    {
      topic: "Addition",
      title: "Lesson 1",
      route: "/lessons/addition/addition",
      requiredGrade: "2",
    },
    {
      topic: "Subtraction",
      title: "Lesson 2",
      route: "/lessons/subtraction/subtraction",
      requiredGrade: "2",
    },
    {
      topic: "Multiplication",
      title: "Lesson 3",
      route: "/lessons/multiplication/multiplication",
      requiredGrade: "3",
    },
    {
      topic: "Division",
      title: "Lesson 4",
      route: "/lessons/division/division",
      requiredGrade: "4",
    },
    {
      topic: ``,
      title: `Post Test`,
      route: "/test/test",
      requiredGrade: "2",
    },
    {
      topic: "",
      title: "Select Grade",
      route: "/selection/selection",
      requiredGrade: "2",
    },
  ];
  const images = [
    require("../../assets/images/lion.png"),
    require("../../assets/images/tiger.png"),
    require("../../assets/images/penguin.png"),
    require("../../assets/images/shiba.png"),
    require("../../assets/images/giraffe.png"),
    require("../../assets/images/antelope.png"),
    require("../../assets/images/kangaroo.png"),
    require("../../assets/images/panda.png"),
    require("../../assets/images/hen.png"),
    require("../../assets/images/sheep.png"),
  ];
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={require("../../assets/images/bgblue.jpg")}
        style={styles.view}
      >
        <View style={styles.headerSection}>
          <Image
            style={{
              width: "50%",
              height: 200,
            }}
            resizeMode="center"
            source={images[selectedImage]}
          />

          <View style={styles.namewrap}>
            <Text style={styles.headerText}>{username}</Text>
            <Text style={styles.headerTextName}>Grade {grade} Student</Text>
          </View>
        </View>
        <View style={styles.scoreSection}>
          <View style={styles.scoreCard}>
            <Text style={styles.scoreTitle}>Pre-test Score</Text>
            <Text style={styles.scoreValue}>{preTestScore || 0}</Text>
          </View>
          <View style={styles.scoreCard}>
            <Text style={styles.scoreTitle}>Post-test Score</Text>
            <Text style={styles.scoreValue}>{postTestScore || 0}</Text>
          </View>
        </View>
        <View style={styles.gridContainer}>
          {gridItems.map((item, index) => {
            const isAvailable = effectiveGrade >= item.requiredGrade;
            if (!isAvailable) return null;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.gridItem]}
                onPress={
                  isAvailable
                    ? () => {
                        stopBgMusic();
                        if (item.route === "Select Grade") {
                          setPostTestScore(0);
                          setPreTestScore(0);
                          setUser(null, null);
                        }
                        router.push({
                          pathname: item.route as any,
                          params: { topic: item.topic },
                        });
                      }
                    : undefined
                }
                disabled={!isAvailable}
              >
                <Text style={styles.buttonText}>
                  {item.title}
                  {"\n"}
                  {isAvailable && `${item.topic}`}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
