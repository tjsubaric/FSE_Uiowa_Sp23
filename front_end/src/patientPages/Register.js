import * as React from "react";
import RegisterForm from "../components/RegisterForm"

export default function Register () {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2>Register</h2>
      <RegisterForm />
    </div>
  );
};
