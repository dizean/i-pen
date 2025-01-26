import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground, Modal,} from "react-native";
import styles from "./styles";
import { Image } from "expo-image";
interface Problem {
  startNumber: number;
  steps: number;
}
interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}
export default function Test() {
  const [currentPractice, setCurrentPractice] = useState<"addition" | "line">("addition");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const generateQuestions = (count: number) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * (10 - num1));
      const correctAnswer = num1 + num2;
      const options = new Set<number>();
      options.add(correctAnswer);
      while (options.size < 4) {
        options.add(Math.floor(Math.random() * 20));
      }
      questions.push({
        question: `What is ${num1} + ${num2}?`,
        correctAnswer,
        options: Array.from(options).sort(() => Math.random() - 0.5),
      });
    }
    return questions;
  };
  const generateProblems = () => {
    const problems = [];
    for (let i = 0; i < 3; i++) {
      const startNumber = Math.floor(Math.random() * 15) + 1;
      const steps = Math.floor(Math.random() * 5) + 1;
      problems.push({ startNumber, steps });
    }
    return problems;
  };

  const [problems] = useState(generateProblems());
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);
  const [currentSecondSelection, setCurrentSecondSelection] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);
  const [secondSelectionCorrect, setSecondSelectionCorrect] = useState<boolean | null>(null); 
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null); 
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);
  const numberLine = Array.from({ length: 20 }, (_, i) => i + 1);
  const [questionss, setQuestions] = useState<Question[]>([]);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [timer, setTimer] = useState(15);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const beepSound = require("../../../../assets/audio/beep.mp3");
  useEffect(() => {
    const questions = generateQuestions(7);
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
    }, [timer, isTimerPaused, isProcessing]);
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
      if (currentPractice === "addition") {
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
      } else if (currentPractice === "line") {
        moveToNextNumberLineQuestion();
        setIsProcessing(false);
      }
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
        require("../../../../assets/audio/correct.mp3")
      );
      await sound.playAsync();
      speak("Correct!");
    };
  
    const playWrongSound = async (answer: string, selected: any) => {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../../assets/audio/wrong.mp3")
      );
      await sound.playAsync();
      const message =
        selected === 0
          ? `Time's up! The correct answer is ${answer}.`
          : `Incorrect! The correct answer is ${answer}.`;
      speak(message);
    };
  
    const cheer = async () => {
      setIsTimerPaused(true);
      setIsProcessing(true);
      const { sound } = await Audio.Sound.createAsync(
        require("../../../../assets/audio/cheer.mp3")
      );
      await sound.playAsync();
      speak(
        `Congratulations! Your final score is ${score} out of 10.`
      );
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
        playCorrectSound();
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
          setCurrentPractice('line')
          resetStateForNextQuestion();
        }
        setIsProcessing(false);
      }, 2600);
    };

    const handleNumberLineSelection = (number: number) => {
      if (isProcessing) return; 
      const { startNumber, steps } = problems[currentProblemIndex];
      if (currentSelection === null) {
          if (number === startNumber) {
              setCurrentSelection(startNumber);
          } else {
          }
      } else {
          const expectedAnswer = startNumber + steps;
          setIsAnswering(true);
          setCurrentSecondSelection(number);
          setCorrectAnswer(expectedAnswer);
          setSecondSelectionCorrect(number === expectedAnswer);
          if (number === expectedAnswer) {
              setScore((prev) => prev + 1);
              setIsTimerPaused(false);
              playCorrectSound();
          } else {
              setWrongAnswer(currentSecondSelection);
              playWrongSound(String(expectedAnswer), currentSecondSelection);
          }
          setTimeout(() => {
              moveToNextNumberLineQuestion();
          }, 1500);
      }
  };

  const moveToNextNumberLineQuestion = () => {
    if (currentProblemIndex < problems.length - 1) {
        setCurrentProblemIndex((prev) => prev + 1);
        setCurrentSelection(null); 
        setCurrentSecondSelection(null);
        setCorrectAnswer(null); 
        setSecondSelectionCorrect(null);
        setFeedback(""); 
        setIsAnswering(false); 
        resetStateForNextQuestion(); 
    } else {
        setFeedback("You've completed all the questions!");
        setIsTimerPaused(true);
        cheer();
        setShowResultsModal(true);
    }
};
const handleCloseModal = () => {
  router.push("/content/content");
  Speech.stop()
};

  if (currentPractice === "addition") {
    const currentQuestionData = questionss[currentQuestion];
    if (!currentQuestionData) {
      return (
        <View style={styles.container}>
          <Text>Loading questions...</Text>
        </View>
      );
    }
    return (
      <ImageBackground style={styles.container}>
        <Text style={styles.question}>{currentQuestionData.question}</Text>
        <Text style={styles.timer}>Time Remaining: {timer}s</Text>
        <View style={styles.optionsContainer}>
          {currentQuestionData.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                answerSelected === option && styles.selectedOption,
                correctAnswer === option && styles.correctOption,
                wrongAnswer === option && styles.wrongOption,
              ]}
              onPress={() => handleAdditionAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.score}>Current Score: {score}</Text>
      </ImageBackground>
    );
  }

  const { startNumber, steps } = problems[currentProblemIndex];
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 20}]}>
        Select the first addend then count the steps for the correct answer.
      </Text>
      <Text style={styles.timer}>Time Remaining: {timer}s</Text>
      <Text style={styles.question}>
        Solve: {startNumber} + {steps}
      </Text>
      <View style={styles.numberLineContainer}>
        {numberLine.map((num) => (
          <TouchableOpacity
            key={num}
            style={[
              styles.number,
              num === currentSelection ? styles.selectedOption : null,
              num === currentSecondSelection
                ? secondSelectionCorrect
                  ? styles.correctOption 
                  : styles.wrongOption 
                : num === correctAnswer
                ? styles.correctOption 
                : null,
            ]}
            onPress={() => handleNumberLineSelection(num)}
            disabled={isAnswering || isProcessing}
          >
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.score}>Current Score: {score}</Text>
      <Modal
        visible={showResultsModal}
        transparent={true}
        animationType='fade'
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Congratulations!</Text>
            <Text style={styles.modalText}>
              Your final score is {score}/10.
            </Text>
            <View style={styles.images}>
              <Image
                source={require("../../../../assets/images/3fr.gif")}
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

