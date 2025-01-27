import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { TextBold, TextLight, TextMedium, TextNormal } from "@/context/FontContent";
import { useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
export default function ContentPage() {
  const router = useRouter();
  const {
    username,
    grade,
    preTestScore,
    postTestScore,
  } = useUser();

  const takePostTest = () => {
    switch (grade) {
      case "2":
        router.push("/grade2/posttest/posttest");
        break;
      case "3":
        router.push("/grade3/posttest/posttest");
        break;
      case "4":
        router.push("/grade4/posttest/posttest");
        break;
      case "5":
        router.push("/grade5/posttest/posttest");
        break;
      case "6":
        router.push("/grade6/posttest/posttest");
        break;
      default:
        Alert.alert("Error", "Grade not set.");
        break;
    }
  };

  const effectiveGrade = grade ?? "0";

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
      topic: "",
      title: "Post Test",
      onPress: takePostTest,
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
  const [currentImage, setCurrentImage] = useState(images[0]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);
  return (
    <View style={styles.view}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.headerSection}>
          <Image
            style={{
              width: "100%",
              height: "70%",
              resizeMode: "center",
            }}
            source={currentImage}
          />

          <View style={styles.namewrap}>
            <TextBold style={styles.headerText}>{username}</TextBold>
            <TextMedium style={styles.headerTextName}>Grade {grade} Student</TextMedium>
          </View>
        </View>
        <View style={styles.scoreSection}>
          <View style={styles.scoreCard}>
            <TextNormal style={styles.scoreTitle}>Pre-test Score</TextNormal>
            <TextMedium style={styles.scoreValue}>{preTestScore || 0}</TextMedium>
          </View>
          <View style={styles.scoreCard}>
            <TextNormal style={styles.scoreTitle}>Post-test Score</TextNormal>
            <TextMedium style={styles.scoreValue}>{postTestScore || 0}</TextMedium>
          </View>
        </View>
        <View style={styles.gridContainer}>
          {gridItems.map((item, index) => {
            const isLastInUnevenRow =
              index === gridItems.length - 1 && gridItems.length % 2 !== 0;

            const isAvailable = effectiveGrade >= item.requiredGrade;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.gridItem,
                  isLastInUnevenRow && styles.fullWidthGridItem,
                  !isAvailable && styles.disabledGridItem,
                ]}
                onPress={
                  isAvailable
                    ? item.onPress || (() => router.push(item.route as any))
                    : undefined
                }
                disabled={!isAvailable}
              >
                <TextMedium style={styles.buttonText}>
                  {!isAvailable ? "(Unavailable)" : `${item.title}`}
                </TextMedium>
                {isAvailable && item.topic !== "" && (
                  <TextMedium style={styles.buttonText}>{item.topic}</TextMedium>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
