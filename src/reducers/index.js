import {
  REGISTER_EMAIL_LIST,
  UPDATE_PAGINATION,
  DELETE_EMAIL,
  SELECTED_EMAIL,
  DESELECTED_EMAIL,
  SEARCH_KEYWORD,
  STARTING_PAGINATION
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
    let newState = [...state].filter(
      (x, indx) => x.message !== message && x.name !== name
    );
    return newState;
  } else {
    return state;
  }
}

// startPagination
function startPagination(state = null, action) {
  const { start } = action;
  if (action.type === UPDATE_PAGINATION) {
    return Math.abs((state += start));
  } else if (action.type === STARTING_PAGINATION) {
    return start;
  }
  return state;
}

// endPagination
function endPagination(state = null, action) {
  let { end, reference } = action;
  if (action.type === UPDATE_PAGINATION) {
    if (end + state > reference) {
      return reference;
    } else if (state === reference) {
      return (state -= state % 50);
    } else {
      return Math.abs((state += end));
    }
  } else if (action.type === STARTING_PAGINATION) {
    return end;
  }
  return state;
}

function selectedEmails(state = [], action) {
  let { name, message } = action;
  if (action.type === SELECTED_EMAIL) {
    let newState = [...state];
    newState.push({ name, message });
    return newState;
  } else if (action.type === DESELECTED_EMAIL || action.type === DELETE_EMAIL) {
    let newState = [...state];
    return newState.filter(x => x.name !== name && x.message !== message);
  }
  return state;
}

function theKeyWord(state = null, action) {
  let { keyword } = action;
  if (action.type === SEARCH_KEYWORD) {
    return keyword;
  }
  return state;
}

export default combineReducers({
  emails,
  startPagination,
  endPagination,
  selectedEmails,
  theKeyWord
});
