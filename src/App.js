import React, { Component } from "react";
import "./App.css";
import Nav from "./pages/nav";
import LandingPage from "./pages/LandingPage";
import RestaurentTemplate from "./pages/RestaurentMenu/RestaurentTemplate";

// import { LastLocationProvider } from "react-router-last-location";
import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        {/* <LastLocationProvider> */}
        {/* //  <LandingPage /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/:restuarnet_id/menu" element={<RestaurentTemplate />}></Route>
        </Routes>
        {/* </LastLocationProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
