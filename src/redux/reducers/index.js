import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
