import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Modal,
} from "react-native";
import styles from "./styles";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { TextBold, TextMedium, TextNormal } from "@/context/FontContent";
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
  const [currentPractice, setCurrentPractice] = useState<
    "subtraction" | "line"
  >("subtraction");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const generateQuestions = (count: number) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * (10 - num1)) + num1;
      const correctAnswer = num2 - num1;
      const options = new Set<number>();
      options.add(correctAnswer);
      while (options.size < 4) {
        const randomOption =
          Math.floor(Math.random() * (20 - correctAnswer)) + correctAnswer;
        options.add(randomOption);
      }
      questions.push({
        question: `What is ${num2} - ${num1}?`,
        correctAnswer,
        options: Array.from(options).sort(() => Math.random() - 0.5),
      });
    }
    return questions;
  };
  const generateProblems = () => {
    const problems = [];
    for (let i = 0; i < 3; i++) {
      let startNumber, steps;
      do {
        startNumber = Math.floor(Math.random() * 15) + 1;
        steps = Math.floor(Math.random() * (startNumber - 2)) + 1;
      } while (startNumber === 0 || steps === 0);
      problems.push({ startNumber, steps });
    }
    return problems;
  };

  const [problems] = useState(generateProblems());
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);
  const [currentSecondSelection, setCurrentSecondSelection] = useState<
    number | null
  >(null);
  const [feedback, setFeedback] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);
  const [secondSelectionCorrect, setSecondSelectionCorrect] = useState<
    boolean | null
  >(null);
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
  }, [timer, isTimerPaused, isProcessing, score]);
  const handleTimeout = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    if (currentPractice === "subtraction") {
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

  const playBeepSound = async () => {
    const { sound } = await Audio.Sound.createAsync(beepSound);
    await sound.playAsync();
  };

  const speak = (message: string) => {
    Speech.speak(message, { pitch: 1.8, rate: 0.7, volume: 0.9 });
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

  const cheer = async (finalScore: number) => {
    setIsTimerPaused(true);
    setIsProcessing(true);
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/audio/cheer.mp3")
    );
    await sound.playAsync();
    speak(`Congratulations! Your final score is ${finalScore} out of 10.`);
  };

  const handleCloseModal = () => {
    router.push("/content/content");
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
        setCurrentPractice("line");
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
      const expectedAnswer = startNumber - steps;
      setIsAnswering(true);
      setIsTimerPaused(false);
      setCurrentSecondSelection(number);
      setCorrectAnswer(expectedAnswer);
      setSecondSelectionCorrect(number === expectedAnswer);

      if (number === expectedAnswer) {
        setScore((prev) => {
          const newScore = prev + 1;
          console.log(newScore);
          if (currentProblemIndex === problems.length - 1) {
            cheer(newScore);
          }
          return newScore;
        });
        playCorrectSound();
        setIsTimerPaused(true);
      } else {
        setWrongAnswer(currentSecondSelection);
        playWrongSound(String(expectedAnswer), currentSecondSelection);
        setIsTimerPaused(true);
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
      setShowResultsModal(true);
    }
  };

  if (currentPractice === "subtraction") {
    const currentQuestionData = questionss[currentQuestion];
    if (!currentQuestionData) {
      return (
        <View style={styles.container}>
          <TextMedium>Loading questions...</TextMedium>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextBold style={[styles.title, { fontSize: 40 }]}>
          Let`s Practice!
        </TextBold>
        <TextNormal style={[styles.title, { fontSize: 20 }]}>
          Let us test what you have learned
        </TextNormal>
        <TextBold style={styles.question}>
          {currentQuestionData.question}
        </TextBold>
        <TextMedium style={styles.timer}>Time Remaining: {timer}s</TextMedium>
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
              disabled={answerSelected !== null}
            >
              <TextNormal style={styles.optionText}>{option}</TextNormal>
            </TouchableOpacity>
          ))}
        </View>
        <TextNormal style={styles.score}>Current Score: {score}</TextNormal>
      </View>
    );
  }

  const { startNumber, steps } = problems[currentProblemIndex];
  return (
    <View style={styles.container}>
      <TextBold style={[styles.title, { fontSize: 40 }]}>
        Let`s Practice!
      </TextBold>
      <TextNormal style={[styles.title, { fontSize: 20 }]}>
        Let us test what you have learned
      </TextNormal>
      <TextNormal style={styles.text}>
        Select the Minuend then count the steps for the correct answer.
      </TextNormal>
      <TextNormal style={styles.problem}>
        Solve: {startNumber} - {steps}
      </TextNormal>
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
            disabled={isAnswering}
          >
            <TextNormal style={styles.numberText}>{num}</TextNormal>
          </TouchableOpacity>
        ))}
      </View>
      <TextNormal style={styles.score}>Current Score: {score}</TextNormal>
      <Modal visible={showResultsModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextMedium style={styles.modalTitle}>
              Congratulations for completing Lesson 2
            </TextMedium>
            <TextNormal style={styles.modalText}>
              Your final score is {score}/10.
            </TextNormal>
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
              <TextMedium style={styles.modalButtonText}>Proceed</TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
