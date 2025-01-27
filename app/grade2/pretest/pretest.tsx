import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import { Image } from "expo-image";
import { TextNormal, TextBold, TextMedium } from "@/context/FontContent";
interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}

export default function PreTest() {
  const { username, setPreTestScore } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [timer, setTimer] = useState(15);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const beepSound = require("../../../assets/audio/beep.mp3");

  useEffect(() => {
    const generatedQuestions = generateQuestions(20);
    setQuestions(generatedQuestions);
  }, []);
  useEffect(() => {
    if (isTimerPaused || timer === 0) {
      if (timer === 0 && !isProcessing) {
        handleTimeout();
      }
      return;
    }

    const countdown = setTimeout(() => {
      setTimer((prev) => prev - 1);
      playBeepSound();
    }, 1000);

    return () => clearTimeout(countdown);
  }, [timer, isTimerPaused, isProcessing]);
  const generateQuestions = (count: number): Question[] => {
    const questions: Question[] = [];
    for (let i = 0; i < count; i++) {
      let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
        let num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
      const operations = ["+", "-"];
        const operation = operations[Math.floor(Math.random() * operations.length)];
      let correctAnswer: number;
      if (operation === "-") {
        if (num2 > num1) {
          [num1, num2] = [num2, num1];
        }
        correctAnswer = num1 - num2;
      } else {
        correctAnswer = num1 + num2;
      }
  
      const options = new Set<number>();
      options.add(correctAnswer);
      while (options.size < 4) {
        const randomOffset = Math.floor(Math.random() * 5) + 1;
        const randomSign = Math.random() < 0.5 ? -1 : 1;
        const randomOption = correctAnswer + randomOffset * randomSign;
  
        if (randomOption >= 0) {
          options.add(randomOption);
        }
      }
      questions.push({
        question: `What is ${num1} ${operation} ${num2}?`,
        correctAnswer,
        options: Array.from(options).sort(() => Math.random() - 0.5),
      });
    }
    return questions;
  };
  
  const playBeepSound = async () => {
    const { sound } = await Audio.Sound.createAsync(beepSound);
    await sound.playAsync();
  };

  const speak = (message: string) => {
    Speech.speak(message, { pitch: 1.8, rate: 0.7, volume: 0.9 });
  };

  const handleTimeout = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const currentQuestionData = questions[currentQuestion];
    setCorrectAnswer(currentQuestionData.correctAnswer);
    playWrongSound(String(currentQuestionData.correctAnswer), 0);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        setShowResultsModal(true);
      }
      setIsProcessing(false);
    }, 2600);
  };

  const handleAnswer = (selectedAnswer: number) => {
    if (answerSelected !== null || isProcessing) return;
    setIsProcessing(true);
    setAnswerSelected(selectedAnswer);
    setIsTimerPaused(true); 
    const currentQuestionData = questions[currentQuestion];
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;

    if (isCorrect) {
      setScore((prev) => {
        const newScore = prev + 1;
        if (currentQuestion === questions.length - 1) {
          cheer(newScore);
        }
        return newScore;
      });
      setCorrectAnswer(selectedAnswer);
      playCorrectSound();
    } else {
      setCorrectAnswer(currentQuestionData.correctAnswer);
      setWrongAnswer(selectedAnswer);
      playWrongSound(String(currentQuestionData.correctAnswer), selectedAnswer);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        setShowResultsModal(true);
      }
      setIsProcessing(false);
    }, 2600);
  };

  const resetStateForNextQuestion = () => {
    setAnswerSelected(null);
    setCorrectAnswer(null);
    setWrongAnswer(null);
    setTimer(15);
    setIsTimerPaused(false);
  };

  const playCorrectSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audio/correct.mp3")
    );
    await sound.playAsync();
    speak("Correct!");
  };

  const playWrongSound = async (answer: string, selected: any) => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audio/wrong.mp3")
    );
    await sound.playAsync();
    const message =
      selected === 0
        ? `Time's up! The correct answer is ${answer}.`
        : `Incorrect! The correct answer is ${answer}.`;
    speak(message);
  };

  const cheer = async (finalScore:number) => {
    setIsTimerPaused(true);
    setIsProcessing(true);
    setPreTestScore(finalScore);
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audio/cheer.mp3")
    );
    await sound.playAsync();
    speak(
      `Congratulations! Your final score is ${finalScore} out of ${questions.length}.`
    );
  };
  const handleCloseModal = () => {
    router.push("/content/content");
  };

  if (questions.length === 0) return null;

  const currentQuestionData = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextBold style={[styles.title, { fontSize: 50 }]}>
          Pre - Test
        </TextBold>
        <TextNormal style={[styles.title, { fontSize: 20 }]}>
          Let us test what you know.
        </TextNormal>
        <TextBold style={styles.question}>{currentQuestionData.question}</TextBold>
        <TextMedium style={styles.timer}>Time Remaining: {timer}s</TextMedium>
        <View style={styles.optionsContainer}>
          {currentQuestionData.options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                answerSelected === option && styles.selectedOption,
                correctAnswer === option && styles.correctOption,
                wrongAnswer === option && styles.wrongOption,
              ]}
              onPress={() => handleAnswer(option)}
              disabled={answerSelected !== null}
            >
              <TextNormal style={styles.optionText}>{option}</TextNormal>
            </TouchableOpacity>
          ))}
        </View>
        <TextNormal style={styles.score}>Current Score: {score}</TextNormal>
      </View>
      <Modal
        visible={showResultsModal}
        transparent={true}
        animationType='fade'
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextBold style={styles.modalTitle}>Congratulations!</TextBold>
            <TextNormal style={styles.modalText}>
              Your final score is {score}/{questions.length}.
            </TextNormal>
            <View style={styles.images}>
              <Image
                source={require("../../../assets/images/3fr.gif")}
                contentFit="fill"
                transition={1000}
                style={[styles.gif]}
              />
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <TextBold style={styles.modalButtonText}>Proceed</TextBold>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
