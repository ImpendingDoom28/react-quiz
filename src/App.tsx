import React, { useState } from 'react';
import { fetchQuizQuestions } from "./API";
//Components
import QuestionCard from "./components/QuestionCard";
import Settings from './components/Settings';
//Types
import { Difficulty, Type, Category, QuestionState } from "./API";
//Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {

  const TOTAL_QUESTIONS = 10;

  const [loading, setLoading] = useState(false);
  //Tell the code that the initialState array is a type of array of Question states
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //Quiz settings
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.HARD);
  const [type, setType] = useState<Type>(Type.MULTIPLE);
  const [category, setCategory] = useState<Category>(Category.ANIME);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty,
      type,
      category
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const reset = () => {
    setLoading(false);
    setQuestions([]);
    setNumber(0);
    setUserAnswers([]);
    setScore(0);
    setGameOver(true);
    setDifficulty(Difficulty.HARD);
    setType(Type.MULTIPLE);
    setCategory(Category.ANIME);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //Users answer
      const answer = e.currentTarget.value;
      // Check answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      // Save answer in the array
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {
          (gameOver || userAnswers.length === TOTAL_QUESTIONS) &&
          <h1>React Quiz</h1>
        }
        {
          (gameOver || userAnswers.length === TOTAL_QUESTIONS) &&
          (
            <>
              {
                userAnswers.length === TOTAL_QUESTIONS ? (
                  <button className="start" onClick={reset}>
                    Change Settings
                  </button>
                ) : (
                    <Settings
                      setCategory={setCategory}
                      setType={setType}
                      setDifficulty={setDifficulty}
                    />
                  )
              }
              <button className="start" onClick={startTrivia}>
                {userAnswers.length > 1 ? "Try again!!!" : "Start Quiz!!!"}
              </button>
            </>
          )
        }
        {
          !gameOver &&
          <p className="score">
            {userAnswers.length === TOTAL_QUESTIONS ? "Final score: " : "Score: "}{score}
          </p>
        }
        {
          loading &&
          <p className="loading">Loading Questions...</p>
        }
        {
          !loading &&
          !gameOver &&
          (
            <QuestionCard
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )
        }
        {
          !gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          userAnswers.length < TOTAL_QUESTIONS &&
          (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )
        }
      </Wrapper>
    </>
  );
}

export default App;
