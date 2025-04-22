import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Animated,
  Pressable,
  ScrollView,
} from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
import * as Speech from "expo-speech";
import { Image } from "expo-image";
import { Text } from "@/context/FontContent";
import { RFPercentage } from "react-native-responsive-fontsize";
import { getUserByName, updateScores } from "@/database/dbservice";
interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}

export default function Test() {
  const {
    username,
    setUser,
    grade,
    preTestScore,
    setPreTestScore,
    setPostTestScore,
  } = useUser();
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
  const [speaking, setSpeaking] = useState(true);
  useEffect(() => {
    const generatedQuestions = generateQuestions();
    setQuestions(generatedQuestions);
  }, []);
  useEffect(() => {
    if (isTimerPaused || timer <= 0) {
      if (timer === 0 && !isProcessing && currentQuestion < questions.length) {
        handleTimeout();
      }
      return;
    }
    if (!speaking) {
      const countdown = setTimeout(() => {
        setTimer((prev) => prev - 1);
        playBeepSound();
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer, isTimerPaused, isProcessing, currentQuestion, speaking]);

  const generateQuestions = (): Question[] => {
    const questionSet = new Set<string>();

    if (grade === null) {
      console.error("Grade is null");
      return [];
    }

    let num1Min: number, num1Max: number, num2Min: number, num2Max: number;
    let operations: string[] = [];

    switch (+grade) {
      case 2:
        num1Min = num2Min = 1;
        num1Max = num2Max = 10;
        operations = ["+", "-"];
        break;
      case 3:
        num1Min = num2Min = 5;
        num1Max = num2Max = 20;
        operations = ["+", "-", "×"];
        break;
      case 4:
        num1Min = num2Min = 10;
        num1Max = num2Max = 30;
        operations = ["+", "-", "×", "÷"];
        break;
      case 5:
        num1Min = num2Min = 15;
        num1Max = num2Max = 60;
        operations = ["+", "-", "×", "÷"];
        break;
      case 6:
        num1Min = num2Min = 20;
        num1Max = num2Max = 90;
        operations = ["+", "-", "×", "÷"];
        break;
      default:
        throw new Error("Invalid grade level");
    }

    const operationQuestions: Record<string, Question[]> = {};
    operations.forEach((op) => (operationQuestions[op] = []));

    while (operations.some((op) => operationQuestions[op].length < 15)) {
      let num1 = Math.floor(Math.random() * (num1Max - num1Min + 1)) + num1Min;
      let num2 = Math.floor(Math.random() * (num2Max - num2Min + 1)) + num2Min;
      const operation =
        operations[Math.floor(Math.random() * operations.length)];

      let correctAnswer: number | null = null;
      if (operation === "+") {
        correctAnswer = num1 + num2;
      } else if (operation === "-") {
        if (num2 > num1) continue;
        correctAnswer = num1 - num2;
      } else if (operation === "×") {
        correctAnswer = num1 * num2;
      } else if (operation === "÷") {
        do {
          num2 = Math.floor(Math.random() * (num2Max - num2Min + 1)) + num2Min;
          num1 = num2 * Math.floor(Math.random() * (num1Max / num2) + 2);
        } while (num1 % num2 !== 0 || num1 / num2 === 1);

        correctAnswer = num1 / num2;
      }

      if (correctAnswer !== null) {
        const questionText = `${num1} ${operation} ${num2}`;
        if (
          !questionSet.has(questionText) &&
          operationQuestions[operation].length < 15
        ) {
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
          operationQuestions[operation].push({
            question: questionText,
            correctAnswer,
            options: Array.from(options).sort(() => Math.random() - 0.5),
          });
        }
      }
    }

    return Object.values(operationQuestions)
      .flat()
      .sort(() => Math.random() - 0.5);
  };
  const playBeepSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(beepSound, {
        shouldPlay: true,
      });
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status && (status as AVPlaybackStatusSuccess).didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Error playing correct sound:", error);
    }
  };
  const speak = (message: string) => {
    if (grade === "2" || grade === "3") {
      Speech.speak(message, {
        voice: "en-us-x-iol-local",
        onDone: () => {
          setSpeaking(false);
        },
        onStart: () => setSpeaking(true),
        rate: 0.8,
      });
    } else {
      Speech.speak(message, {
        voice: "en-us-x-iol-local",
        onDone: () => {
          setSpeaking(false);
        },
        onStart: () => setSpeaking(true),
      });
    }
  };
  const [result, setResult] = useState({
    modal: false,
    correct: false,
  });
  const handleTimeout = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setSpeaking(true);
    const currentQuestionData = questions[currentQuestion];
    setCorrectAnswer(currentQuestionData.correctAnswer);
    playWrongSound(String(currentQuestionData.correctAnswer), 0);
    setResult({ modal: true, correct: false });
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        cheer(score);
        setTimer(-1);
      }
      
      setResult({ modal: false, correct: false });
      setIsProcessing(false);
    }, 3000);
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
        setSpeaking(true);
        resetStateForNextQuestion();
      } else {
        // setShowResultsModal(true);
      }
      setResult({...result,modal:false})
      setIsProcessing(false);
    }, 3000);
  };

  const resetStateForNextQuestion = () => {
    setAnswerSelected(null);
    setCorrectAnswer(null);
    setWrongAnswer(null);
    setTimer(15);
    setIsTimerPaused(false);
  };

  const playCorrectSound = async (answer: string) => {
    setResult({ modal: true, correct: true });
    try {
      const { sound } = await Audio.Sound.createAsync(correctSound, {
        shouldPlay: true,
      });
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status && (status as AVPlaybackStatusSuccess).didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Error playing correct sound:", error);
    }
  };
  const playWrongSound = async (answer: string, selected: any) => {
    setResult({ modal: true, correct: false });
    try {
      const { sound } = await Audio.Sound.createAsync(wrongSound, {
        shouldPlay: true,
      });
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status && (status as AVPlaybackStatusSuccess).didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Error playing correct sound:", error);
    }
  };

  const [speekDone, setSpeekDone] = useState(false);
  const cheer = async (finalScore: number) => {
    setIsTimerPaused(true);
    setIsProcessing(true);
    const totalQuestions = questions.length;
    const passingScore = Math.ceil(totalQuestions * 0.70);
    try {
      setShowResultsModal(true);
      if (finalScore >= passingScore) {
        setTimeout(() => {
          Speech.speak(
            `Congratulations! Your final score is ${finalScore} out of ${questions.length}.`,
            {
              voice: "en-us-x-iol-local",
              onDone: () => {
                setSpeekDone(true);
                Speech.stop();
                if (preTestScore !== null && preTestScore !== 0) {
                  setPostTestScore(finalScore);
                }
              },
            }
          );
        }, 1000);
      } else {
        setTimeout(() => {
          Speech.speak(
            `Your final score is ${finalScore} out of ${questions.length}. Better Luck Next Time`,
            {
              voice: "en-us-x-iol-local",
              onDone: () => {
                setSpeekDone(true);
                Speech.stop();
                if (preTestScore !== null && preTestScore !== 0) {
                  setPostTestScore(finalScore);
                }
              },
            }
          );
        }, 1000);
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
  const [donepretest, setDonepretest] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = await getUserByName(String(username), Number(grade));
        setPreTestScore(query?.pretestscore ?? 0);
        setPostTestScore(query?.posttestscore ?? 0);
        setDonepretest(query?.pretestDone ?? "false");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [preTestScore, donepretest]);
  const handleCloseModal = (score: number) => {
    try {
      if (donepretest === "true") {
        const insertquery = updateScores(
          String(username),
          Number(preTestScore),
          score,
          Number(grade)
        );
      } else {
        const insertquery = updateScores(
          String(username),
          score,
          0,
          Number(grade)
        );
      }
      setUser(username, grade);
      router.push({ pathname: "/content/content", params: { score } });
      setTimer(-1);
      Speech.stop();
      setShowResultsModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  if (questions.length === 0) return null;
  const currentQuestionData = questions[currentQuestion];
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.wrapper}>
          {preTestScore === null || preTestScore === 0 ? (
            <Text style={[styles.title, { fontSize: RFPercentage(12) }]}>
              Pre - Test
            </Text>
          ) : (
            <Text style={[styles.title, { fontSize: RFPercentage(12) }]}>
              Post - Test
            </Text>
          )}
          <Text style={[styles.question, { fontSize: RFPercentage(8) }]}>
            What is {"\n"} {currentQuestionData.question} ?
          </Text>
          <Text style={[styles.count]}>
          Question {currentQuestion + 1}/{questions.length} {"\n"}
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
                  speaking && styles.speaking,
                ]}
                onPress={() => handleAnswer(option)}
                disabled={answerSelected !== null || speaking}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.score}>Current Score: {score}</Text>
        </View>
      </ScrollView>
      <Modal visible={showResultsModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* <Image
              source={require("../../assets/images/confetti.gif")}
              style={styles.backgroundGif}
              contentFit="fill"
              transition={1000}
            /> */}
            <Text style={styles.modalText}>
              Your final score is {score}/{questions.length}.
            </Text>
            <View style={styles.images}>
              <Image
                source={require("../../assets/images/3fr.gif")}
                style={styles.gif}
                contentFit="fill"
                transition={1000}
              />
            </View>
            {speekDone && (
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleCloseModal(score)}
                disabled={!speekDone}
              >
                <Text style={styles.modalButtonText}>Proceed</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
      {result.modal && (
        <Modal visible={result.modal} transparent={true} animationType="fade">
              <Image
                source={
                  result.correct
                    ? require("../../assets/images/checked.png")
                    : require("../../assets/images/no.png")
                }
                style={[styles.gif,{backgroundColor: 'none'}]}
                contentFit="scale-down"
              />
        </Modal>
      )}
    </View>
  );
}
