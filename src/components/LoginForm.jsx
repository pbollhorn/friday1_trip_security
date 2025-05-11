import React, { useRef } from "react";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);
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
