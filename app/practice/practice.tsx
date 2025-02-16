import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./styles";
import { Audio } from "expo-av";
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
  const [lineOperation, setLineOperation] = useState('')
  const generateQuestions = (count: number) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      let num1 = Math.floor(Math.random() * 10);
      let num2 = Math.floor(Math.random() * (10 - num1));
      if (grade !== null) {
        switch (+grade) {
          case 2:
            num1 = Math.floor(Math.random() * 8) + 1;
            num2 = Math.floor(Math.random() * 8) + 1;
            break;
          case 3:
            num1 = Math.floor(Math.random() * 11) + 5;
            num2 = Math.floor(Math.random() * 11) + 5;
            break;
          case 4:
            num1 = Math.floor(Math.random() * 21) + 10;
            num2 = Math.floor(Math.random() * 21) + 10;
            break;
          case 5:
            num1 = Math.floor(Math.random() * 31) + 20;
            num2 = Math.floor(Math.random() * 31) + 20;
            break;
          case 6:
            num1 = Math.floor(Math.random() * 51) + 30;
            num2 = Math.floor(Math.random() * 51) + 30;
            break;
          default:
            throw new Error("Invalid grade level");
        }
      } else {
        console.error("Grade is null");
        continue;
      }
      let correctAnswer: number;
      let operation = "";
      switch (subject) {
        case "addition":
          correctAnswer = num1 + num2;
          operation = "+"
          break;
        case "subtraction":
          if (num2 > num1) {
            [num1, num2] = [num2, num1];
          }
          correctAnswer = num1 - num2;
          operation = "-"
          break;
        case "multiplication":
          switch (+grade) {
            case 3:
              num1 = Math.floor(Math.random() * 5) + 1;
              num2 = Math.floor(Math.random() * 5) + 1;
              break;
            case 4:
              num1 = Math.floor(Math.random() * 6) + 5;
              num2 = Math.floor(Math.random() * 6) + 5;
              break;
            case 5:
              num1 = Math.floor(Math.random() * 11) + 10;
              num2 = Math.floor(Math.random() * 6) + 5;
              break;
            case 6:
              num1 = Math.floor(Math.random() * 16) + 15;
              num2 = Math.floor(Math.random() * 11) + 10;
              break;
          }
          num1 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
          num2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
          correctAnswer = num1 * num2;
          operation = "*"
          break;
        case "division":
          switch (+grade) {
            case 4:
              num2 = Math.floor(Math.random() * 10 + 1);
              num1 = num2 * Math.floor(Math.random() * 5 + 1);
              if (num1 > 40) {
                num1 = 40;
              }
              break;
            case 5:
              num2 = Math.floor(Math.random() * 10) + 5;
              num1 = num2 * (Math.floor(Math.random() * 10) + 1);
              if (num1 > 80) {
                num1 = 80;
              }
              break;
            case 6:
              num2 = Math.floor(Math.random() * (20 - 8 + 1)) + 8;
              num1 = num2 * Math.floor(Math.random() * 15 + 1);
              if (num1 > 100) {
                num1 = 100;
              }
              break;
          }
          correctAnswer = num1 / num2;
          operation = "/"
          break;
        default:
          correctAnswer = 0;
      }
      setLineOperation(operation)
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
  const generateProblems = () => {
    const problems = [];
    for (let i = 0; i < 3; i++) {
      let startNumber = Math.floor(Math.random() * 15) + 1;
      let steps = Math.floor(Math.random() * 5) + 1;
      while (startNumber % steps !== 0) {
        startNumber = Math.floor(Math.random() * 15) + 1;
        steps = Math.floor(Math.random() * 5) + 1;
      }
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
    const questions = generateQuestions(7);
    setQuestions(questions);
  }, []);
  // useEffect(() => {
  //   if (isTimerPaused || timer === 0) {
  //     if (timer === 0 && !isProcessing) {
  //       handleTimeout();
  //     }
  //     return;
  //   }

  //   const countdown = setTimeout(() => {
  //     setTimer((prev) => prev - 1);
  //     playBeepSound();
  //   }, 1000);

  //   return () => clearTimeout(countdown);
  // }, [timer, isTimerPaused, isProcessing, score]);
  const handleTimeout = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    if (currentPractice === subject) {
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
  const playCorrectSound = async (answer: string) => {
    const { sound } = await Audio.Sound.createAsync(correctSound);
    await sound.playAsync();
    speak(`Correct!${answer} is the answer.`);
  };
  const playWrongSound = async (answer: string, selected: any) => {
    const { sound } = await Audio.Sound.createAsync(wrongSound);
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
    const { sound } = await Audio.Sound.createAsync(cheerSound);
    await sound.playAsync();
    speak(`Congratulations! Your final score is ${finalScore} out of 10.`);
  };
  const handleCloseModal = () => {
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
  
  const handleNumberLineSelection = (number: number) => {
    if (isProcessing) return;
    let { startNumber, steps } = problems[currentProblemIndex];
  
    if (currentSelection === null) {
      if (number === startNumber) {
        setCurrentSelection(startNumber);
      }
    } else {
      let expectedAnswer: number;
      switch (subject) {
        case "addition":
          expectedAnswer = startNumber + steps;
          break;
        case "subtraction":
          if (steps > startNumber) {
            [startNumber, steps] = [steps, startNumber];
          }
          expectedAnswer = startNumber - steps;
          break;  
        case "multiplication":
          expectedAnswer = startNumber * steps;
          expectedAnswer = Math.min(Math.max(expectedAnswer, 1), 20);
          break;
        case "division":
          if (startNumber % steps === 0) { 
            expectedAnswer = startNumber / steps;
          } else {
            steps = Math.floor(startNumber / 2);
            expectedAnswer = startNumber / steps;
          }
          expectedAnswer = Math.min(Math.max(expectedAnswer, 1), 20);
          break;
        default:
          expectedAnswer = 0;
      }
      setIsAnswering(true);
      setIsTimerPaused(false);
      setCurrentSecondSelection(number);
      setCorrectAnswer(expectedAnswer);
      setSecondSelectionCorrect(number === expectedAnswer);
  
      if (number === expectedAnswer) {
        setScore((prev) => {
          const newScore = prev + 1;
          if (currentProblemIndex === problems.length - 1) {
            cheer(newScore);
          }
          return newScore;
        });
        playCorrectSound(String(number));
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
          {currentQuestionData.question}
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
      </View>
    );
  }

  let { startNumber, steps } = problems[currentProblemIndex];
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>
        Let`s Practice!
      </Text>
      <Text style={[styles.title, { fontSize: 50 }]}>
        Let us test what you have learneds
      </Text>
      <Text style={styles.text}>
        Select the first addend then count the steps for the correct answer.
      </Text>
      <Text style={styles.problem}>
        Solve: {startNumber} {lineOperation} {steps}
      </Text>
      <Text style={styles.timer}>Time Remaining: {timer}s</Text>
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
            <Text style={styles.numberText}>{num}</Text>
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
