import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";


const Login = ({ setUser: setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  return (
    <>
      <h2 className="text-center">Login</h2>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-field flex-wrap">
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
              setUser(username);
              // history.push("/search");
            }
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};
function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  setUser,
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
