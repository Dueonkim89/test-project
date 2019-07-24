export const REGISTER_EMAIL_LIST = "REGISTER_EMAIL_LIST";
export const UPDATE_PAGINATION = "UPDATE_PAGINATION";
export const DELETE_EMAIL = "DELETE_EMAIL";
export const SELECTED_EMAIL = "SELECTED_EMAIL";
export const DESELECTED_EMAIL = "DESELECTED_EMAIL";
export const SEARCH_KEYWORD = 'SEARCH_KEYWORD';

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

export function selectedEmail({ name, message }) {
  return {
    type: SELECTED_EMAIL,
    name,
    message
  };
}

export function deselectedEmail({ name, message }) {
  return {
    type: DESELECTED_EMAIL,
    name,
    message
  };
}

export function searchKeyword({keyword}) {
	return {
		type: SEARCH_KEYWORD,
		keyword
	}
}
