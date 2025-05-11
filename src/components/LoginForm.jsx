import React, { useRef } from "react";
import api from "../apiFacade.js";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    api.login(usernameRef.current.value, passwordRef.current.value);
  };

  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    api.logout();
  };

  if (api.loggedIn() === false) {
    return (
      <form onSubmit={handleLoginSubmit}>
        <label>Username: </label>
        <input type="text" ref={usernameRef} />
        <label> Password: </label>
        <input type="password" ref={passwordRef} />{" "}
        <button type="submit">Login</button>
      </form>
    );
  }
  if (api.loggedIn() === true) {
    return (
      <form onSubmit={handleLogoutSubmit}>
        <button type="submit">Logout</button>
      </form>
    );
  }
}
