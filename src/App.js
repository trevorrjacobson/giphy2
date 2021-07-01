import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Favs from "./components/Favs";
import Login from "./components/Login";
import ProtectedRoute from "./shared/ProtectedRoute";
import Search from "./components/Search";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const addFavorite = useCallback((toAdd) => {
    setFavorites((curr) => [...curr, toAdd]);
  }, []);
  const deleteFavorite = useCallback(
    (id) => {
      let filtered = favorites.filter((val) => val.id !== id);
      setFavorites(filtered);
    },
    [favorites]
  );
  return (
    <Router>
      <nav className="flexWrap">
         {!loggedInUser && ( 
        <NavLink
          activeClassName="active"
          className="link textCenter"
          to="/login"
        >
          Login
        </NavLink>
         )} 
        {loggedInUser && (
        <>
          <NavLink
            activeClassName="active"
            className="link textCenter"
            to="/search"
          >
            Search
          </NavLink>

          <NavLink
            activeClassName="active"
            className="link textCenter"
            to="/favs"
          >
            Favorites
          </NavLink>
          <NavLink
            className="link textCenter"
            to="/login"
            onClick={() => {
              setLoggedInUser(null);
            }}
          >
            Logout
          </NavLink>
        </>
         )} 
      </nav>
      <main>
        <Switch>
          <ProtectedRoute
            path="/login"
            reqUser={false}
            loggedInUser={loggedInUser}
          >
            <Login setLoggedInUser={setLoggedInUser} />
          </ProtectedRoute>
          <ProtectedRoute
            path="/search"
            reqUser={true}
            loggedInUser={loggedInUser}
          >
            <Search
              loggedInUser={loggedInUser}
              addFavorite={addFavorite}
              deleteFavorite={deleteFavorite}
              favorites={favorites}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path="/favs"
            reqUser={true}
            loggedInUser={loggedInUser}
          >
            <Favs
              loggedInUser={loggedInUser}
              favorites={favorites}
              deleteFavorite={deleteFavorite}
            />
          </ProtectedRoute>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
