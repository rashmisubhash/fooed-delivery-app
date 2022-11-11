import React, { useState, useContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

import { setJwtToken } from '../crud/axios';
import { AccountContext } from "./Account";
import UserPool from "../UserPool";
import { successToaster, errorToaster } from "../reusable/Toast";

const Login = ({ setOpenModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { authenticate } = useContext(AccountContext);
  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        setJwtToken(data.idToken.jwtToken);
        successToaster("Successfully logged in");
        setOpenModal(false);
      })
      .catch((error) => {
        // errorToaster(error.toString().split(":")[1]);
        setError(error.toString().split(":")[1]);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="user"
          className="input"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="pass"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-danger">{error.toString()}</p>}
        <button
          type="submit"
          name="login"
          class="button-primary btn-custom w-100"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
