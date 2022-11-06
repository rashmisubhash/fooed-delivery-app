import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";

import UserPool from "../UserPool";
// import customToast from "../reusable/Toast";
import { successToaster, errorToaster } from "../reusable/Toast";

const Verify = ({ email, setOpenModal }) => {
  const [verification, setVerfification] = useState("");
  const [apiError, setApiError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    var userData = {
      Username: email,
      Pool: UserPool,
    };

    var cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(verification, true, (error, success) => {
      if (success) {
        console.log(success.toString());
        if (success.toString().includes("error")) {
          errorToaster("Something went wrong");
        } else {
          console.log("success", success);
          successToaster("Signed up successfully");
          setOpenModal(false);
        }
      } else {
        console.log(error.toString().split(":")[1]);
        errorToaster(error.toString().split(":")[1]);
      }
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
          disabled={true}
        />

        <input
          type="text"
          name="user"
          className="input"
          placeholder="Verification code"
          value={verification}
          onChange={(e) => setVerfification(e.target.value)}
        />
        <button
          type="submit"
          name="login"
          class="button-primary btn-custom w-100"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default Verify;
