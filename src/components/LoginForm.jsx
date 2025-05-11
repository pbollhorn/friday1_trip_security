import React, { useRef } from "react";

export default function LoginForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input type="text" ref={nameRef} />


        <label>Email: </label>
        <input type="email" ref={emailRef} />

      <button type="submit">Login</button>
    </form>
  );
}
