import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  nextQuestion,
  QuestionElement,
  restart,
  selectAnswer,
  sendTestAnswers,
} from "../index.js";

function Module({
  // store props
  user,
  test,
  // dispatch props
  restart,
  selectAnswer,
  nextQuestion,
  sendTestAnswers,
}) {
  const navigate = useNavigate();
  const {
    currentQuestionIndex,
    questions,
    showResults,
    userAnswers,
  } = test;
  useEffect(() => {
    restart();
    if (Object.keys(user.testResults).length !== 0) {
      navigate("/profile");
    }
    if (showResults) {
      sendTestAnswers(userAnswers);
      navigate("/profile");
    }
  }, [user, showResults]);



  return (
    <section className="test">
      {showResults && (
        <div className="test__results">
          <div className="test__congratulations">Congratulations</div>
          <div className="test__results-info">
            <div className="test__results-text"> You've finished quiz!</div>
            <div
              className="test__next-button"
              onClick={restart}
            >
              Restart
            </div>
          </div>
        </div>
      )}
      {!showResults && questions.length > 0 && (
        <div className="test__questions">
          <div className="test__score">
            Question {currentQuestionIndex + 1}/{questions.length}
          </div>
          <QuestionElement
            state={test}
            selectAnswer={selectAnswer}
          />
          <button
            className="test__next-button"
            onClick={nextQuestion}
            disabled={!userAnswers.some((obj) => obj.questionId === currentQuestionIndex)}
          >
            Next question →
          </button>
        </div>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
  test: state.test,
});
const mapDispatchToProps = (dispatch) => ({
  selectAnswer: (answerText) => dispatch(selectAnswer(answerText)),
  restart: () => dispatch(restart()),
  nextQuestion: () => dispatch(nextQuestion()),
  sendTestAnswers: (userAnswers) => dispatch(sendTestAnswers(userAnswers))
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
