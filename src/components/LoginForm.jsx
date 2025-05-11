import React, { useRef } from "react";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input type="email" ref={emailRef} />
      <label> Password: </label>
      <input type="password" ref={passwordRef} />{" "}
      <button type="submit">Login</button>
    </form>
  );
}
