export const REGISTER_EMAIL_LIST = "REGISTER_EMAIL_LIST";
export const UPDATE_PAGINATION = "UPDATE_PAGINATION";
export const DELETE_EMAIL = "DELETE_EMAIL";

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
