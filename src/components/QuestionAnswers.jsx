import React from "react";

function QuestionAnswers() {
  const [questionAnswers, setQuestionAnswers] = React.useState([]);

  React.useEffect(() => {
    // console.log("called");
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => {
        setQuestionAnswers(res.results);
      });
  }, []);

  function shuffleArray(arr) {
    const shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  }

  function decodeHtmlCharCodes(str) {
    return str.replace(/(&#(\d+);)/g, function (match, capture, charCode) {
      return String.fromCharCode(charCode);
    });
  }

  const questionAnswersComponents = questionAnswers.map((obj, index) => (
    <div key={index}>
      <h3 className="question">{decodeHtmlCharCodes(obj.question)}</h3>
      <div className="options">
        {shuffleArray([obj.correct_answer, ...obj.incorrect_answers]).map(
          (value, index) => (
            <h3
              key={index}
              className="option"
              // style={{ backgroundColor: "#F8BCBC" }}
              // style={{
              //   backgroundColor: "#94D7A2",
              //   fontWeight: 500,
              //   opacity: 1,
              // }}
            >
              {decodeHtmlCharCodes(value)}
            </h3>
          )
        )}
      </div>
      <hr />
    </div>
  ));

  return (
    <section className="questionAnswers">{questionAnswersComponents}</section>
  );
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
