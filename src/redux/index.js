// API
export { API } from "../api";

// store
export {
  store,
  persistor,
} from "./store";

// auth
export { userLogout } from "./store/auth/slice";
export {
  userLogin,
  userRegister,
  checkAuth,
} from "./store/auth/thunks";

// profile
export { clearTestResults } from "./store/profile/slice.js";
export {
  getProfile,
  sendTestAnswers,
} from "./store/profile/thunks";

// test
export {
  selectAnswer,
  nextQuestion,
  restart,
} from "./store/test/slice";