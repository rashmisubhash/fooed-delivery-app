import React, { Component } from "react";
import "./App.css";
import Nav from "./pages/nav";
import LandingPage from "./pages/LandingPage";
import RestaurentTemplate from "./pages/RestaurentMenu/RestaurentTemplate";

// import { LastLocationProvider } from "react-router-last-location";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Router
        getUserConfirmation={() => {
          /* Empty callback to block the default browser prompt */
        }}
      >
        {/* <LastLocationProvider> */}
        {/* //  <LandingPage /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/order" element={<RestaurentTemplate />}></Route>
        </Routes>
        {/* </LastLocationProvider> */}
      </Router>
    </>
  );
}

export default App;
