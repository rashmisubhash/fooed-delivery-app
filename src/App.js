import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Nav from "./pages/nav";
import LandingPage from "./pages/LandingPage";
import RestaurentTemplate from "./pages/RestaurentMenu/RestaurentTemplate";

import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

import { Account } from "./auth/Account";
import Status from "./auth/Status";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [status, setStatus] = useState(null);

  return (
    <>
      <Account>
        <Status setStatus={setStatus} />
        {status != null && (
          <>
            <BrowserRouter>
              <Nav />

              <Routes>
                <Route
                  exact
                  path="/"
                  element={<LandingPage status={status} />}
                ></Route>
                <Route
                  exact
                  path="/:restuarnet_id/menu"
                  element={<RestaurentTemplate status={status} />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </>
        )}
      </Account>
    </>
  );
}

export default App;

