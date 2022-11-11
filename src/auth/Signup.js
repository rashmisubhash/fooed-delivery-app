import React, { useState } from "react";

import { CognitoUserAttribute } from "amazon-cognito-identity-js";

import Verify from "./Verify";
import UserPool from "../UserPool";
import { successToaster, errorToaster } from "../reusable/Toast";

const Signup = ({ setOpenModal, setLogin }) => {
  const [verification, setVerification] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
  });
  const [apiError, setApiError] = useState("");

  const doValidate = () => {
    const errors = {};

    if (name === undefined || name === "")
      errors.name = "Please enter your name";

    if (email === undefined || email === "")
      errors.email = "Please enter your email";
    else if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    )
      errors.email = "Please enter a valid email address";

    if (password === undefined || password === "")
      errors.password = "Please enter your password";

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password))
      errors.password = "Please enter a valid password";

    if (
      !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone_number)
    )
      errors.phone_number = "Please enter a valid phone number";

    if (address === undefined || address === "")
      errors.address = "Please enter your address";

    setErrors(errors);
    if (Object.entries(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!doValidate()) return;

    const attributeList = [];

    const dataName = {
      Name: "name",
      Value: name,
    };
    const attributeName = new CognitoUserAttribute(dataName);

    const dataAdd = {
      Name: "address",
      Value: address,
    };
    const attributeAdd = new CognitoUserAttribute(dataAdd);

    const dataPhoneNumber = {
      Name: "phone_number",
      Value: "+919449202402",
    };
    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

    attributeList.push(attributeName);
    attributeList.push(attributeAdd);
    attributeList.push(attributePhoneNumber);

    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) setApiError(err.toString());
      else {
        console.log(data);
        setApiError("");
        setVerification(true);
        successToaster(` Please check your email,
        you would have recieved a verification code`);
      }
    });
  };
  return (
    <div>
      {verification ? (
        <Verify email={email} setLogin={setLogin} />
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="user"
            className="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}

          <input
            type="text"
            name="user"
            className="input"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}

          <input
            type="password"
            name="pass"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}

          <input
            type="number"
            name="user"
            className="input"
            placeholder="+919449202402"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phone_number && (
            <p className="text-danger">{errors.phone_number}</p>
          )}

          <textarea
            rows="4"
            className="w-100 input area-input"
            placeholder="Address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          {errors.address && <p className="text-danger">{errors.address}</p>}
          {apiError && (
            <p className="text-danger">
              {apiError
                .toString()
                .includes(" An account with the given email already exist")
                ? "An account with the given email already exist"
                : "Error"}
            </p>
          )}
          <button
            type="submit"
            name="login"
            class="button-primary btn-custom w-100"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
