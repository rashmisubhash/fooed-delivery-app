import React, { useState } from "react";
import logo from "../assets/logo.png";

import Modal from "react-modal";
import Login from "./Login/Login";

const customStyles = {
  // Style for the Modal
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    overflow: "hidden",
  },
  overlay: {
    background: "rgba(0,0,0,0.75)",
    zIndex: "100",
    overflow: "hidden",
  },
};

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* <div className="header py-2 px-4">
        <img
          className="header__image"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato"
        />
      </div> */}

      <header>
        <nav className="navbar px-5 py-0">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" class="brand-logo" />
          </div>
          <div class="navbar-nav-items">
            <div class="navbar-nav-item">
              <p className="login" onClick={() => setOpenModal(true)}>
                Log In / Sign Up
              </p>
            </div>
          </div>
        </nav>
      </header>

      <Modal
        ariaHideApp={false}
        isOpen={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}
        style={customStyles}
      >
        <Login />
      </Modal>

      <style jsx>{`
        .login {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Nav;
