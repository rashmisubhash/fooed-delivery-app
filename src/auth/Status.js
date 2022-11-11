import React, { useState, useEffect, useContext } from "react";

import { AccountContext } from "./Account";
import { setJwtToken } from "../crud/axios";

const Status = ({ setStatus }) => {
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then((session) => {
        setJwtToken(session.idToken.jwtToken);
        setStatus(session);
      })
      .catch((err) => setStatus(false));
  }, []);
  return;
  //  (
  //   <div>
  //     {status ? (
  //       <button
  //         onClick={() => {
  //           logout();
  //         }}
  //       >
  //         Logout
  //       </button>
  //     ) : (
  //       "Please log in "
  //     )}
  //   </div>
  // );
};

export default Status;
