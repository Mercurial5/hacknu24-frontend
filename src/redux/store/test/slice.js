import { createSlice } from "@reduxjs/toolkit";
import data from "./data.js";

const initialState = {
  currentQuestionIndex: 0,
  questions: data,
  showResults: false,
  questionAnswers: data[0].answers,
  userAnswers: [],
  currentAnswer: "",
  isFetching: false,
  error: null,
};


const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const answer = action.payload;
      const currentQuestionIndex = state.currentQuestionIndex;
      const userAnswers = state.userAnswers;
      state.currentAnswer = answer;
      if (!userAnswers.some((obj) => obj.questionId === currentQuestionIndex)) {
        state.userAnswers.push({
          questionId: state.currentQuestionIndex,
          answer,
        })
      } else {
        userAnswers[currentQuestionIndex].answer = answer
      }
    },
    nextQuestion: (state) => {
      state.showResults = state.currentQuestionIndex === state.questions.length - 1;
      state.currentQuestionIndex =
        state.showResults
          ? state.currentQuestionIndex
          : state.currentQuestionIndex + 1;
      state.questionAnswers =
        state.showResults
          ? []
          : state.questions[state.currentQuestionIndex].answers;
    },
    restart: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getProfile.fulfilled, (state, action) => {
      //   state.user = action.payload;
      // })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.isFetching = true;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isFetching = false;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.isFetching = false;
        },
      );
  },
});


export default slice.reducer;
export const {
  selectAnswer,
  nextQuestion,
  restart,
} = slice.actions;
