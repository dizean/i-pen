import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Modal, ImageBackground, Animated } from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
import * as Speech from "expo-speech";
import { Image } from "expo-image";
import { TextNormal, TextBold, TextMedium } from "@/context/FontContent";
interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}

export default function Test() {
  const { username, grade, preTestScore, setPreTestScore, setPostTestScore } =
    useUser();
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
  const beepSound = require("../../assets/audio/beep.mp3");
  const wrongSound = require("../../assets/audio/wrong.mp3");
  const correctSound = require("../../assets/audio/correct.mp3");
  const cheerSound = require("../../assets/audio/cheer.mp3");
  useEffect(() => {
    const generatedQuestions = generateQuestions(15);
    setQuestions(generatedQuestions);
  }, []);
  useEffect(() => {
    if (isTimerPaused || timer <= 0) {
      if (timer === 0 && !isProcessing && currentQuestion < questions.length) {
        handleTimeout();
      }
      return;
    }
    const countdown = setTimeout(() => {
      setTimer((prev) => prev - 1);
      playBeepSound();
    }, 1000);

    return () => clearTimeout(countdown);
  }, [timer, isTimerPaused, isProcessing, currentQuestion]);

  const generateQuestions = (count: number): Question[] => {
    const questions: Question[] = [];
    const questionSet = new Set<string>();
    while (questions.length < count) {
      let num1: number = 0;
      let num2: number = 0;
      let operations: string[] = [];
      if (grade !== null) {
        switch (+grade) {
          case 2:
            num1 = Math.floor(Math.random() * 8) + 1;
            num2 = Math.floor(Math.random() * 8) + 1;
            operations = ["+", "-"];
            break;
          case 3:
            num1 = Math.floor(Math.random() * 11) + 5;
            num2 = Math.floor(Math.random() * 11) + 5;
            operations = ["+", "-", "*"];
            break;
          case 4:
            num1 = Math.floor(Math.random() * 21) + 10;
            num2 = Math.floor(Math.random() * 21) + 10;
            operations = ["+", "-", "*", "/"];
            break;
          case 5:
            num1 = Math.floor(Math.random() * 31) + 20;
            num2 = Math.floor(Math.random() * 31) + 20;
            operations = [ "/"];
            break;
          case 6:
            num1 = Math.floor(Math.random() * 51) + 30;
            num2 = Math.floor(Math.random() * 51) + 30;
            operations = [ "/"];
            break;
          default:
            throw new Error("Invalid grade level");
        }
      } else {
        console.error("Grade is null");
        continue;
      }
      const operation =
        operations[Math.floor(Math.random() * operations.length)];
      let correctAnswer: number;
      if (operation === "+") {
        correctAnswer = num1 + num2;
      } else if (operation === "-") {
        if (num2 > num1) {
          [num1, num2] = [num2, num1];
        }
        correctAnswer = num1 - num2;
      } else if (operation === "*") {
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
      } else {
        switch (+grade) {
          case 4:
            while (num1 % num2 !== 0) {
              num1 = Math.floor(Math.random() * 15) + 1;
              num2 = Math.floor(Math.random() * 5) + 2;
            }
            if (num1 > 40) {
              num1 = 40;
            }
            break;
          case 5:
            while (num1 % num2 !== 0) {
              num1 = Math.floor(Math.random() * 30) + 10;
              num2 = Math.floor(Math.random() * 10) + 5;
            }
            if (num1 > 80) {
              num1 = 80;
            }
            break;
          case 6:
            while (num1 % num2 !== 0) {
              num1 = Math.floor(Math.random() * 50) + 20;
              num2 = Math.floor(Math.random() * 15) + 5;
            }
            if (num1 > 100) {
              num1 = 100;
            }
            break;
        }
        correctAnswer = num1 / num2;
      }
      const questionText = `${num1} ${operation} ${num2}`;

    if (questionSet.has(questionText)) {
      continue; // Skip duplicate question
    }
    
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
      questions.push({
        question: `What is ${num1} ${operation} ${num2}?`,
        correctAnswer,
        options: Array.from(options).sort(() => Math.random() - 0.5),
      });
    }
    return questions;
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
      Speech.speak(message, { pitch: 1.8, rate: 0.6, volume: 1 });
    }else{
      Speech.speak(message, { pitch: 1.8, rate: 0.8, volume: 1 });
    }
    
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
        cheer(score);
        setTimer(-1);
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
          setTimeout(() => {
            cheer(newScore);
          }, 2000);
        }
        return newScore;
      });
      setCorrectAnswer(selectedAnswer);
      playCorrectSound(String(selectedAnswer));
    } else {
      setCorrectAnswer(currentQuestionData.correctAnswer);
      setWrongAnswer(selectedAnswer);
      playWrongSound(String(currentQuestionData.correctAnswer), selectedAnswer);
      if (currentQuestion === questions.length - 1) {
        setTimeout(() => {
          cheer(score);
        }, 2000);
      }
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        // setShowResultsModal(true);
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
    } catch (error) {
      console.error("Error playing correct sound:", error);
    }
    // const message =
    //   selected === 0
    //     ? `Time's up! The correct answer is ${answer}.`
    //     : `Incorrect! The correct answer is ${answer}.`;
    // speak(message);
  };

  const [speekDone, setSpeekDone] = useState(false);
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
      setShowResultsModal(true);
      if(finalScore > 2){
        setTimeout(() => {
          Speech.speak(
            `Congratulations! Your final score is ${finalScore} out of ${questions.length}.`,
            {
              onDone: () => {
                setSpeekDone(true);
                Speech.stop();
                if (preTestScore !== null && preTestScore !== 0) {
                  setPostTestScore(finalScore);
                }
              },
            }
          );
        }, 3000);
      }else{
        setTimeout(() => {
          Speech.speak(
            `Your final score is ${finalScore} out of ${questions.length}. Better Luck Next Time`,
            {
              onDone: () => {
                setSpeekDone(true);
                Speech.stop();
                if (preTestScore !== null && preTestScore !== 0) {
                  setPostTestScore(finalScore);
                }
              },
            }
          );
        }, 3000);
      }
    } catch (error) {
      console.error("Error playing correct sound:", error);
    }
  };
  useEffect(() => {
    if (questions.length > 0) {
      let questionText = questions[currentQuestion].question;
      if (questionText.includes("-")) {
        questionText = questionText.replace(/-/g, " minus ");
      } else if (questionText.includes("*")) {
        questionText = questionText.replace(/\*/g, " times ");
      } else if (questionText.includes("/")) {
        questionText = questionText.replace(/\//g, " divided by ");
      }
      speak(questionText);
    }
  }, [currentQuestion, questions]);

  const handleCloseModal = (score: number) => {
    router.push({ pathname: "/content/content", params: { score } });
    setTimer(-1);
    Speech.stop();
  };
  if (questions.length === 0) return null;
  const currentQuestionData = questions[currentQuestion];
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {preTestScore === null || preTestScore === 0 ? (
          <TextBold style={[styles.title, { fontSize: 50 }]}>
            Pre - Test
          </TextBold>
        ) : (
          <TextBold style={[styles.title, { fontSize: 50 }]}>
            Post - Test
          </TextBold>
        )}

        <TextNormal style={[styles.title, { fontSize: 20 }]}>
          Let us test what you know.
        </TextNormal>
        <TextBold style={styles.question}>
          {currentQuestionData.question}
        </TextBold>
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
      <Modal visible={showResultsModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image
              source={require("../../assets/images/confetti.gif")}
              style={styles.backgroundGif}
              contentFit="fill"
              transition={1000}
            />
            <TextBold style={styles.modalTitle}>Congratulations!</TextBold>
            <TextNormal style={styles.modalText}>
              Your final score is {score}/{questions.length}.
            </TextNormal>
            <View style={styles.images}>
              <Image
                source={require("../../assets/images/3fr.gif")}
                style={styles.gif}
                contentFit="fill"
                transition={1000}
              />
            </View>
            {speekDone &&
             <TouchableOpacity
             style={styles.modalButton}
             onPress={() => handleCloseModal(score)}
             disabled={!speekDone}
           >
             <TextBold style={styles.modalButtonText}>Proceed</TextBold>
           </TouchableOpacity>
            }
          </View>
        </View>
      </Modal>
    </View>
  );
}
