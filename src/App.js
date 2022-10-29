import React, { Component } from "react";
import "./App.css";
import Nav from "./pages/nav";
import LandingPage from "./pages/LandingPage";
import RestaurentTemplate from "./pages/RestaurentMenu/RestaurentTemplate";

// import { LastLocationProvider } from "react-router-last-location";
import { HashRouter, Switch, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <HashRouter
        basename="/
zometoe-workshop"
      >
        {/* <LastLocationProvider> */}
        {/* //  <LandingPage /> */}
        {/* <Routes> */}
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/order" element={<RestaurentTemplate />}></Route>
        {/* </Routes> */}
        {/* </LastLocationProvider> */}
      </HashRouter>
    </>
  );
}

export default App;
