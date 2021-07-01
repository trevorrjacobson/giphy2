import React from "react";
import { connect } from "react-redux";
import { clearFavorites, clearUser, clearSearch } from "./redux/actions";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favs";
import Login from "./components/Login";
import ProtectedRoute from "./shared/ProtectedRoute";
import Search from "./components/Search";

function App({ username, clearFavorites, clearSearch, clearUser }) {
  return (
    <Router>
      <nav className="flex-wrap">
        {!username && (
          <NavLink
            activeClassName="active"
            className="link text-center"
            to="/login"
          >
            Login
          </NavLink>
        )}
        {username && (
          <>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/search"
            >
              Search
            </NavLink>

            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/favorites"
            >
              Favorites
            </NavLink>
            <NavLink
              className="link text-center"
              to="/login"
              onClick={() => {
                clearFavorites();
                clearSearch();
                clearUser();
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />
          <ProtectedRoute path="/search" reqUser={true} component={Search} />
          <ProtectedRoute
            path="/favorites"
            reqUser={true}
            component={Favorites}
          />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}

const mapDispatchToProps = {
  clearFavorites,
  clearUser,
  clearSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
