export const REGISTER_EMAIL_LIST = "REGISTER_EMAIL_LIST";
export const UPDATE_PAGINATION = "UPDATE_PAGINATION";
export const DELETE_EMAIL = "DELETE_EMAIL";
export const SELECTED_EMAIL = "SELECTED_EMAIL";
export const DESELECTED_EMAIL = "DESELECTED_EMAIL";
//export const GLOBAL_DELETE = 'GLOBAL_DELETE';

export function createEmailList({ date, name, message }) {
  return {
    type: REGISTER_EMAIL_LIST,
    date,
    name,
    message
  };
}

export function updatePagination({ start, end, reference }) {
  return {
    type: UPDATE_PAGINATION,
    start,
    end,
    reference
  };
}

export function deleteEmail({ name, message, index }) {
  return {
    type: DELETE_EMAIL,
    name,
    message,
    index
  };
}

export function selectedEmail({ index }) {
  return {
    type: SELECTED_EMAIL,
    index
  };
}

export function deselectedEmail({ index }) {
  return {
    type: DESELECTED_EMAIL,
    index
  };
}
