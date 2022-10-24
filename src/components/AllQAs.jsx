import React from "react";
import ActionButton from "./ActionButton";
import QA from "./QA";

function AllQAs() {
  const [questionAnswers, setQuestionAnswers] = React.useState([]);
  const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0);
  const [checkAnswer, setCheckAnswer] = React.useState(false);

  React.useEffect(() => {
    // console.log("called");
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => {
        res.results.map((obj) => {
          const shuffledArray = shuffleArray([
            obj.correct_answer,
            ...obj.incorrect_answers,
          ]);

          obj.question = decodeHtmlCharCodes(obj.question);
          obj.isCorrect = false;
          obj.allOptions = shuffledArray.map((value) => {
            return {
              text: decodeHtmlCharCodes(value),
              isSelected: false,
              isCorrectAnswer: value === obj.correct_answer,
            };
          });
        });
        setQuestionAnswers(res.results);
      });
  }

  function shuffleArray(arr) {
    const shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  }

  function decodeHtmlCharCodes(str) {
    return str.replace(
      /(&#(\d+);)|(&(\w+);)/g,
      function (match, capture, charCode) {
        return String.fromCharCode(charCode);
      }
    );
  }

  function onOptionTap(questionIndex, optionIndex) {
    setQuestionAnswers((prevValue) => {
      let value = [...prevValue];

      value[questionIndex].allOptions = value[questionIndex].allOptions.map(
        (option, index) => {
          if (index == optionIndex) {
            return { ...option, isSelected: true };
          } else {
            return { ...option, isSelected: false };
          }
        }
      );
      return value;
    });
  }

  function onCheckAnswerTap() {
    let correctAnswersCount = 0;

    questionAnswers.map((obj, index) => {
      const correctAnswer = obj.correct_answer;

      obj.allOptions.map((option, index) => {
        if (option.isSelected && option.text === correctAnswer) {
          obj.isCorrect = true;
          correctAnswersCount++;
        }
      });
    });
    
    setCorrectAnswersCount(correctAnswersCount);
    setCheckAnswer(true);
  }

  function onPlayAgain() {
    fetchData();
    setCheckAnswer(false);
  }

  const qaComponents = questionAnswers.map((obj, index) => {
    return (
      <QA
        key={index}
        question={obj.question}
        options={obj.allOptions}
        handleOptionClick={(optionIndex) => onOptionTap(index, optionIndex)}
        checkAnswer={checkAnswer}
        isCorrect={obj.isCorrect}
      />
    );
  });

  return (
    <section className="questionAnswers">
      {qaComponents}
      {checkAnswer ? (
        <div className="score">
          <h3>You scored {correctAnswersCount}/5 answers</h3>
          <ActionButton text="Play again" handleClick={onPlayAgain} />
        </div>
      ) : (
        <ActionButton text="Check Answers" handleClick={onCheckAnswerTap} />
      )}
    </section>
  );
}

export default AllQAs;
