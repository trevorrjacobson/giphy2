import { ADD_FAVORITE, DELETE_FAVORITE, CLEAR_FAVORITES } from "../actions";

const initialFavoritesState = [];

export function searchReducer(state = initialFavoritesState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.gif];

    case DELETE_FAVORITE:
      return state.filter((gif) => gif.id !== action.id);

    case CLEAR_FAVORITE:
      return [];

    default:
      return state;
  }
}
