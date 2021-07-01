import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  return (
    <>
      <h2 className="textCenter">Login</h2>
      <form className="form">
        <div className="formField flexWrap">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="formField flexWrap">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (username.length > 4 && password.length > 4) {
              setLoggedInUser(username);
              history.push("/search");
            }
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
