import React from "react";

function QuestionAnswers() {
  const [questionAnswers, setQuestionAnswers] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((obj) => setQuestionAnswers(obj.results));
  }, []);

  const questionAnswersComponents = questionAnswers.map((obj, index) => (
    <div key={index}>{obj.category}</div>
  ));

  return <section>{questionAnswersComponents}</section>;
}

export default QuestionAnswers;

// category: "General Knowledge"
// correct_answer: "Hats"
// difficulty: "medium"
// incorrect_answers: Array(3)
// 0: "Shoes"
// 1: "Belts"
// 2: "Shirts"
// length: 3
// question: "What does a milliner make and sell?"
// type: "multiple"
