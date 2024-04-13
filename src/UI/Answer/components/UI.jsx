import React from "react";

function UI({
  answerText,
  selectAnswer,
  index,
  currentAnswer,
}) {
  const letterMapping = ["A", "B", "C", "D"];
  const isAnswerSelected = currentAnswer === answerText;
  return (
    <div
      className={`answer ${isAnswerSelected && "answer--selected"}`}
      onClick={() => selectAnswer(answerText)}
    >
      <div className="answer__letter">{letterMapping[index]}</div>
      <div className="answer__text">{answerText}</div>
    </div>
  );
}

UI.propTypes = {};

export default UI;
