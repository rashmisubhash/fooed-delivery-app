/** @format */

// customToast.js
/* eslint-disable */

import React from "react";
import { toast } from "react-toastify";
import { Fragment } from "react";

toast.configure();

// Can give Id to toaster messages to prevent duplication
export const successToaster = (message, id = null) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...(id != null && { toastId: id })
  })
}

// Can give Id to toaster messages to prevent duplication
export const errorToaster = (error, id = null) => {
  toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...(id != null && { toastId: id })
  });
}


