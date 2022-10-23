import React from "react";
import QA from "./QA";

function AllQAs() {
  const [questionAnswers, setQuestionAnswers] = React.useState([]);

  React.useEffect(() => {
    // console.log("called");
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
          obj.allOptions = shuffledArray.map((value) => {
            return { text: decodeHtmlCharCodes(value), isSelected: false };
          });
        });
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
    return str.replace(
      /(&#(\d+);)|(&(\w+);)/g,
      function (match, capture, charCode) {
        return String.fromCharCode(charCode);
      }
    );
  }

  const qaComponents = questionAnswers.map((obj, index) => {
    return <QA key={index} question={obj.question} options={obj.allOptions} />;
  });

  return <section className="questionAnswers">{qaComponents}</section>;
}

export default AllQAs;

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

// {
//   shuffleArray([obj.correct_answer, ...obj.incorrect_answers]).map(
//     (value, index) => (
//       <button
//         key={index}
//         className="option"
//         onClick={onOptionTap}
//         // style={{ backgroundColor: "#F8BCBC" }}
//         // style={{
//         //   backgroundColor: "#94D7A2",
//         //   fontWeight: 500,
//         //   opacity: 1,
//         // }}
//       >
//         {decodeHtmlCharCodes(value)}
//       </button>
//     )
//   );
// }
