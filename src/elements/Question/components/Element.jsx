// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { AnswerUI } from "../index.js";

function Element({
  state,
  selectAnswer
}) {
  const currentQuestion = state.questions[state.currentQuestionIndex];

  return (
    <div className="question">
      <div className="question__title">{currentQuestion.question}</div>
      <div className="question__answers">
        {state.questionAnswers.map((answer, index) => (
          <AnswerUI
            answerText={answer}
            index={index}
            key={index}
            currentAnswer={state.currentAnswer}
            selectAnswer={selectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

Element.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Element;
