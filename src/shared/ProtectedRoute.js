import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ loggedInUser, path, reqUser, children }) {
  if ((loggedInUser && reqUser) || (!loggedInUser && !reqUser)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return <Redirect to={reqUser ? "/login" : "/search"} />;
  }
}

export default ProtectedRoute;
