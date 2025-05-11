import React, { useRef } from "react";
import api from "../apiFacade.js";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.login(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input type="text" ref={usernameRef} />
      <label> Password: </label>
      <input type="password" ref={passwordRef} />{" "}
      <button type="submit">Login</button>
    </form>
  );
}
