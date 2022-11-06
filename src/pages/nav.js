import React, { useState, useContext, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";
import LoginModal from "./Login/Login";
import OrderModal from "./Orders/OrderModal";

import { AccountContext } from "../auth/Account";
import { successToaster, errorToaster } from "../reusable/Toast";

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
    zIndex: "100000",
  },
  overlay: {
    background: "rgba(0,0,0,0.75)",
    zIndex: "100",
    overflow: "hidden",
  },
};

const Nav = () => {
  const history = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { getUserData, logout } = useContext(AccountContext);

  const [order, setOrder] = useState(false);

  function logoutCall() {
    logout();
    successToaster("Successfully logged out");
  }
  return (
    <div>
      <header>
        <nav className="navbar px-5 py-0">
          <div className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              class="brand-logo"
              onClick={() => {
                history(`/`);
              }}
            />
          </div>
          <div class="navbar-nav-items">
            <div class="navbar-nav-item">
              {getUserData() !== null && (
                <span className="login" onClick={() => setOrder(true)}>
                  Cart
                </span>
              )}
              <span
                className="login"
                onClick={() =>
                  getUserData() == null ? setOpenModal(true) : logoutCall()
                }
              >
                {getUserData() == null ? "Log in / Sign up" : "Log out"}
              </span>
            </div>
          </div>
        </nav>
      </header>

      <OrderModal order={order} setOrder={setOrder} />
      <Modal
        ariaHideApp={false}
        isOpen={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}
        style={customStyles}
      >
        <LoginModal getUserData={getUserData} setOpenModal={setOpenModal} />
      </Modal>

      <style jsx>{`
        .login {
          cursor: pointer;
        }

        .navbar-nav-items {
          transform: translateY(-18px);
        }
      `}</style>
    </div>
  );
};

export default Nav;
