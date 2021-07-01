export const CLEAR_SEARCH = "Clear Search";
export const SET_SEARCH = "Set Search";

export function clearSearch() {
  return { type: CLEAR_SEARCH };
}

export function setSearch(search) {
  return { type: SET_SEARCH, search };
}
