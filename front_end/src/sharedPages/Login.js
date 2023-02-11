import * as React from "react";
import LoginForm from "../components/LoginForm"

export default function Login () {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};
