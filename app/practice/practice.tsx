import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./styles";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
import * as Speech from "expo-speech";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { Text } from "@/context/FontContent";
import { useUser } from "@/context/UserContext";
interface Problem {
  startNumber: number;
  steps: number;
}
interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}
interface SubjectProp {
  subject: string,
  stop: boolean
}
export default function Test({ subject, stop }: SubjectProp) {
  const [currentPractice, setCurrentPractice] = useState<string>(subject);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const {grade}= useUser();
  const generateQuestions = (count: number): Question[] => {
    const questionPool: Question[] = [];
    const questionSet = new Set<string>();
  
    if (grade === null) {
      console.error("Grade is null");
      return [];
    }
  
    let num1Min: number, num1Max: number, num2Min: number, num2Max: number;
    let operations: string[] = [];
  
    switch (subject) {
      case 'addition':
        num1Min = num2Min = 1;
        num1Max = num2Max = 8;
        operations = ["+"];
        break;
      case 'subtraction':
        num1Min = num2Min = 5;
        num1Max = num2Max = 15;
        operations = ["-"];
        break;
      case 'multiplication':
        num1Min = num2Min = 10;
        num1Max = num2Max = 30;
        operations = ["*"];
        break;
      case 'division':
        num1Min = num2Min = 20;
        num1Max = num2Max = 50;
        operations = ["÷"];
        break;
      default:
        throw new Error("Invalid grade level");
    }
    for (let num1 = num1Min; num1 <= num1Max; num1++) {
      for (let num2 = num2Min; num2 <= num2Max; num2++) {
        for (const operation of operations) {
          let correctAnswer: number | null = null;
  
          if (operation === "+") {
            correctAnswer = num1 + num2;
          } else if (operation === "-") {
            if (num2 > num1) continue; 
            correctAnswer = num1 - num2;
          } else if (operation === "*") {
            correctAnswer = num1 * num2;
          } else if (operation === "÷") {
            if (num2 === 0 || num1 % num2 !== 0) continue; 
            correctAnswer = num1 / num2;
          }
  
          if (correctAnswer !== null) {
            const questionText = `${num1} ${operation} ${num2}`;
            if (!questionSet.has(questionText)) {
              questionSet.add(questionText);
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
  
              questionPool.push({
                question: questionText,
                correctAnswer,
                options: Array.from(options).sort(() => Math.random() - 0.5),
              });
            }
          }
        }
      }
    }
  
    // **Shuffle questions to ensure randomness**
    questionPool.sort(() => Math.random() - 0.5);
  
    // **Return only the requested number of unique questions**
    return questionPool.slice(0, count);
  };

  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);
  const [questionss, setQuestions] = useState<Question[]>([]);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [timer, setTimer] = useState(15);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const beepSound = require("../../assets/audio/beep.mp3");
  const wrongSound = require("../../assets/audio/wrong.mp3");
  const correctSound = require("../../assets/audio/correct.mp3");
  const cheerSound = require("../../assets/audio/cheer.mp3");
  useEffect(() => {
    if (stop) {
      setIsTimerPaused(true);
      Speech.stop();
    }
  }, [stop]);
  
  useEffect(() => {
    const questions = generateQuestions(10);
    setQuestions(questions);
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
  }, [timer, isTimerPaused, isProcessing, score]);
  const handleTimeout = () => {
    if (isProcessing) return;
    setIsProcessing(true);{
      const currentQuestionData = questionss[currentQuestion];
      setCorrectAnswer(currentQuestionData.correctAnswer);
      playWrongSound(String(currentQuestionData.correctAnswer), 0);

      setTimeout(() => {
        if (currentQuestion < questionss.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
          resetStateForNextQuestion();
        } else {
          setCurrentPractice("line");
          resetStateForNextQuestion();
        }
        setIsProcessing(false);
      }, 2600);
    } 
  };

  const playBeepSound = async () => {
    try {
          const { sound } = await Audio.Sound.createAsync(beepSound, { shouldPlay: true });
          sound.setOnPlaybackStatusUpdate((status) => {
            if (
              status &&
              (status as AVPlaybackStatusSuccess).didJustFinish
            ) {
              sound.unloadAsync();
            }
          });
        } catch (error) {
          console.error("Error playing correct sound:", error);
        }
  };

  const speak = (message: string) => {
    if (grade === '2' || grade === '3'){
         Speech.speak(message, { voice: 'en-us-x-iol-local' });
       }else{
         Speech.speak(message, {voice: 'en-us-x-iol-local', rate: 0.8, volume: 1 });
       }
  };
  const resetStateForNextQuestion = () => {
    setAnswerSelected(null);
    setCorrectAnswer(null);
    setWrongAnswer(null);
    setTimer(15);
    setIsTimerPaused(false);
  };
  const playCorrectSound = async (answer: string) => {
    try {
          const { sound } = await Audio.Sound.createAsync(correctSound, { shouldPlay: true });
          sound.setOnPlaybackStatusUpdate((status) => {
            if (
              status &&
              (status as AVPlaybackStatusSuccess).didJustFinish
            ) {
              sound.unloadAsync();
            }
          });
          speak(`Correct!${answer} is the answer.`);
        } catch (error) {
          console.error("Error playing correct sound:", error);
        }
  };
  
  const playWrongSound = async (answer: string, selected: any) => {
     try {
          const { sound } = await Audio.Sound.createAsync(wrongSound, { shouldPlay: true });
          sound.setOnPlaybackStatusUpdate((status) => {
            if (
              status &&
              (status as AVPlaybackStatusSuccess).didJustFinish
            ) {
              sound.unloadAsync();
            }
          });
          
          const message =
          selected === 0
            ? `Time's up! The correct answer is ${answer}.`
            : `Incorrect! The correct answer is ${answer}.`;
        speak(message);
        } catch (error) {
          console.error("Error playing correct sound:", error);
        }
  };
  const cheer = async (finalScore: number) => {
    setIsTimerPaused(true);
    setIsProcessing(true);
    try {
      const { sound } = await Audio.Sound.createAsync(cheerSound, { shouldPlay: true });
      sound.setOnPlaybackStatusUpdate((status) => {
        if (
          status &&
          (status as AVPlaybackStatusSuccess).didJustFinish
        ) {
          sound.unloadAsync();
        }
      });
      speak(`Congratulations! Your final score is ${finalScore} out of 10.`);
    } catch (error) {
      console.error("Error playing correct sound:", error);
    }
  };
  const handleCloseModal = () => {
    setShowResultsModal(false)
    router.push("/content/content");
    Speech.stop()
  };
  const handleAdditionAnswer = (selectedAnswer: number) => {
    if (answerSelected !== null || isProcessing) return;
    setIsProcessing(true);
    setAnswerSelected(selectedAnswer);
    setIsTimerPaused(true);
    const currentQuestionData = questionss[currentQuestion];
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCorrectAnswer(selectedAnswer);
      playCorrectSound(String(selectedAnswer));
    } else {
      setCorrectAnswer(currentQuestionData.correctAnswer);
      setWrongAnswer(selectedAnswer);
      playWrongSound(String(currentQuestionData.correctAnswer), selectedAnswer);
    }

    setTimeout(() => {
      if (currentQuestion < questionss.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        setCurrentPractice("line");
        resetStateForNextQuestion();
      }
      setIsProcessing(false);
    }, 2600);
  };
  
  if (currentPractice === subject) {
    const currentQuestionData = questionss[currentQuestion];
    if (!currentQuestionData) {
      return (
        <View style={styles.container}>
          <Text>Loading questions...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={[styles.title]}>
          Let`s Practice!
        </Text>
        <Text style={[styles.text]}>
          Let us test what you have learned.
        </Text>
        <Text style={styles.question}>
        What is {"\n"}{currentQuestionData.question}?
        </Text>
        <Text style={styles.timer}>Time Remaining: {timer}s</Text>
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
              onPress={() => handleAdditionAnswer(option)}
              disabled={answerSelected !== null}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.score}>Current Score: {score}</Text>
        <Modal visible={showResultsModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Congratulations for completing Lesson 1
            </Text>
            <Text style={styles.modalText}>
              Your final score is {score}/10.
            </Text>
            <View style={styles.images}>
              <Image
                source={require("../../assets/images/3fr.gif")}
                contentFit="fill"
                transition={1000}
                style={[styles.gif]}
              />
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    );
  }
}
