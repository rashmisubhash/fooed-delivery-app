import React, { useState, useEffect, createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

import Pool from "../UserPool";

const AccountContext = createContext();

const Account = (props) => {
  const [userData, setUserData] = useState(null);

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) reject();
          else {
            resolve(session);
            setUserData(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      setUserData(null);
    }
  };

  const getUserData = () => {
    return userData;
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
          setUserData(data);
        },
        onFailure: (err) => {
          console.error(err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          resolve(data);
          setUserData(data);
        },
      });
    });
  };
  return (
    <AccountContext.Provider
      value={{ authenticate, getSession, logout, getUserData }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
