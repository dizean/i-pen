
const grade2question =[
  { question: "1 + 0 =", answer: 1, grade: 2, operation: "+" },
  { question: "1 + 1 =", answer: 2, grade: 2, operation: "+" },
  { question: "1 + 2 =", answer: 3, grade: 2, operation: "+" },
  { question: "2 + 2 =", answer: 4, grade: 2, operation: "+" },
  { question: "3 + 2 =", answer: 5, grade: 2, operation: "+" },
  { question: "3 + 3 =", answer: 6, grade: 2, operation: "+" },
  { question: "6 + 3 =", answer: 9, grade: 2, operation: "+" },
  { question: "2 + 6 =", answer: 8, grade: 2, operation: "+" },
  { question: "5 - 2 =", answer: 3, grade: 2, operation: "-" },
  { question: "7 - 3 =", answer: 4, grade: 2, operation: "-" },
  { question: "2 - 9 =", answer: 7, grade: 2, operation: "-" },
  { question: "8 - 2 =", answer: 6, grade: 2, operation: "-" },
  { question: "6 - 6 =", answer: 0, grade: 2, operation: "-" },
  { question: "8 - 3 =", answer: 5, grade: 2, operation: "-" },
  { question: "9 - 1 =", answer: 8, grade: 2, operation: "-" },
]

const grade3questions =[
    { question: "3 + 6 =", answer: 9, grade: 3, operation: "+" },
    { question: "9 + 0 =", answer: 9, grade: 3, operation: "+" },
    { question: "4 + 7 =", answer: 11, grade: 3, operation: "+" },
    { question: "6 + 2 =", answer: 8, grade: 3, operation: "+" },
    { question: "7 + 3 =", answer: 10, grade: 3, operation: "+" },
    { question: "9 - 5 =", answer: 4, grade: 3, operation: "-" },
    { question: "7 - 4 =", answer: 3, grade: 3, operation: "-" },
    { question: "8 - 6 =", answer: 2, grade: 3, operation: "-" },
    { question: "5 - 2 =", answer: 3, grade: 3, operation: "-" },
    { question: "8 - 5 =", answer: 3, grade: 3, operation: "-" },
    { question: "2 x 7 =", answer: 14, grade: 3, operation: "x" },
    { question: "3 x 4 =", answer: 12, grade: 3, operation: "x" },
    { question: "6 x 2 =", answer: 12, grade: 3, operation: "x" },
    { question: "4 x 2 =", answer: 8, grade: 3, operation: "x" },
    { question: "9 x 9 =", answer: 81, grade: 3, operation: "x" }
]

const grade4questions =[
  { question: "11 + 7 =", answer: 18, grade: 4, operation: "+" },
  { question: "12 + 4 =", answer: 16, grade: 4, operation: "+" },
  { question: "6 + 5 =", answer: 11, grade: 4, operation: "+" },
  { question: "9 + 3 =", answer: 12, grade: 4, operation: "+" },
  { question: "14 - 2 =", answer: 12, grade: 4, operation: "-" },
  { question: "5 - 3 =", answer: 2, grade: 4, operation: "-" },
  { question: "6 - 2 =", answer: 4, grade: 4, operation: "-" },
  { question: "7 - 4 =", answer: 3, grade: 4, operation: "-" },
  { question: "4 x 2 =", answer: 8, grade: 4, operation: "x" },
  { question: "5 x 3 =", answer: 15, grade: 4, operation: "x" },
  { question: "23 x 2 =", answer: 46, grade: 4, operation: "x" },
  { question: "7 x 0 =", answer: 0, grade: 4, operation: "x" },
  { question: "6 ÷ 2 =", answer: 3, grade: 4, operation: "÷" },
  { question: "0 ÷ 9 =", answer: 0, grade: 4, operation: "÷" },
  { question: "1 ÷ 1 =", answer: 1, grade: 4, operation: "÷" },
]

const grade5questions =[
  { question: "35 + 5 =", answer: 40, grade: 4, operation: "+" },
  { question: "30 + 9 =", answer: 39, grade: 4, operation: "+" },
  { question: "44 + 6 =", answer: 50, grade: 4, operation: "+" },
  { question: "25 - 3 =", answer: 22, grade: 4, operation: "-" },
  { question: "28 - 5 =", answer: 23, grade: 4, operation: "-" },
  { question: "36 - 6 =", answer: 30, grade: 4, operation: "-" },
  {question: "9 x 5 =", answer: 45, grade: 4, operation: "x" },
  { question: "8 x 6 =", answer: 48, grade: 4, operation: "x" },
  { question: "7 x 2 =", answer: 14, grade: 4, operation: "x" },
  { question: "12 x 3 =", answer: 36, grade: 4, operation: "x" },
  { question: "19 x 1 =", answer: 19, grade: 4, operation: "x" },
  { question: "10 ÷ 2 =", answer: 5, grade: 4, operation: "÷" },
  { question: "12 ÷ 4 =", answer: 3, grade: 4, operation: "÷" },
  { question: "26 ÷ 2 =", answer: 13, grade: 4, operation: "÷" },
]

const grade6questions =[
  { question: "65 + 3 =", answer: 68, grade: 4, operation: "+" },
  { question: "72 + 7 =", answer: 79, grade: 4, operation: "+" },
  { question: "42 + 13 =", answer: 55, grade: 4, operation: "+" },
  { question: "49 - 7 =", answer: 42, grade: 4, operation: "-" },
  { question: "57 - 8 =", answer: 49, grade: 4, operation: "-" },
  { question: "32 - 21 =", answer: 11, grade: 4, operation: "-" },
  { question: "51 x 8 =", answer: 408, grade: 4, operation: "x" },
  { question: "62 x 3 =", answer: 186, grade: 4, operation: "x" },
  { question: "14 x 12 =", answer: 168, grade: 4, operation: "x" },
  { question: "42 x 4 =", answer: 168, grade: 4, operation: "x" },
  { question: "49 ÷ 7 =", answer: 7, grade: 4, operation: "÷" },
  { question: "36 ÷ 6 =", answer: 6, grade: 4, operation: "÷" },
  { question: "90 ÷ 30 =", answer: 3, grade: 4, operation: "÷" },
  { question: "27 ÷ 9 =", answer: 3, grade: 4, operation: "÷" },
  { question: "35 ÷ 5 =", answer: 7, grade: 4, operation: "÷" },
]

const questions = {grade2question,grade3questions,
  grade4questions,grade5questions,grade6questions}
export default questions;