export const SET_SEARCH = "Set User";
export const CLEAR_SEARCH = "Clear User";

export function setSearch(search) {
  return { type: SET_USER, search };
}

export function clearSearch() {
  return { type: CLEAR_USER };
}
