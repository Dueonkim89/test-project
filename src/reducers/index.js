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
        date,
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
    return Math.abs((state += start));
  } else {
    return state;
  }
}

// endPagination
function endPagination(state = 50, action) {
  let { end, reference } = action;
  if (action.type === UPDATE_PAGINATION) {
    if (end + state > reference) {
      return reference;
    } else if (state === reference) {
      return (state -= state % 50);
    } else {
      return Math.abs((state += end));
    }
  } else {
    return state;
  }
}

export default combineReducers({
  emails,
  startPagination,
  endPagination
});
