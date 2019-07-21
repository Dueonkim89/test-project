import {
  REGISTER_EMAIL_LIST,
  UPDATE_PAGINATION,
  DELETE_EMAIL
} from "../actions/index.js";
import { combineReducers } from "redux";

function emails(state = [], action) {
  const { date, name, message } = action;
  if (action.type === REGISTER_EMAIL_LIST) {
    return [
      ...state,
      {
        date: date
          .split(" ")
          .slice(1, 4)
          .join(" "),
        name,
        message
      }
    ];
  } else if (action.type === DELETE_EMAIL) {
    // filter out the email based on message and name.
    console.log("to be completed");
  } else {
    return state;
  }
}

// startPagination
function startPagination(state = 1, action) {
  const { start } = action;
  if (action.type === UPDATE_PAGINATION) {
    return (state += start);
  } else {
    return state;
  }
}

// endPagination
function endPagination(state = 50, action) {
  const { end } = action;
  if (action.type === UPDATE_PAGINATION) {
    return (state += end);
  } else {
    return state;
  }
}

export default combineReducers({
  emails,
  startPagination,
  endPagination
});
