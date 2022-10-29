import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phno: "",
    address: "",
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    phno: "",
    address: "",
    password: "",
  });

  return (
    <div>
      {login ? (
        <div class="" id="login-modal">
          <div class="">
            <div class="loginmodal-container">
              <h1>Log in</h1>
              <br />
              <input
                type="text"
                name="user"
                placeholder="Email ID"
                value={input.email}
                onChange={(event) =>
                  setInput({ ...input, email: event.target.value })
                }
              />
              <input
                type="password"
                name="pass"
                placeholder="Password"
                value={input.password}
                onChange={(event) =>
                  setInput({ ...input, password: event.target.value })
                }
              />
              <button
                type="submit"
                name="login"
                class="button-primary btn-custom w-100"
              >
                Log in
              </button>

              <div class="login-help mt-2">
                <button className="" onClick={() => setLogin(false)}>
                  Don't have an account? Sign-up
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="" id="signup-modal">
          <div class="">
            <div class="loginmodal-container">
              <h1>Sign Up</h1>
              <br />
              <input
                type="text"
                name="user"
                className="input"
                placeholder="Email ID"
                value={input.email}
                onChange={(event) =>
                  setInput({ ...input, email: event.target.value })
                }
              />
              <input
                type="password"
                name="pass"
                className="input"
                placeholder="Password"
                value={input.password}
                onChange={(event) =>
                  setInput({ ...input, password: event.target.value })
                }
              />
              <input
                type="text"
                name="user"
                className="input"
                placeholder="Phone number"
                value={input.phno}
                onChange={(event) =>
                  setInput({ ...input, phno: event.target.value })
                }
              />

              <textarea
                rows="4"
                className="w-100 input area-input"
                placeholder="Address..."
                value={inputData.address}
                onChange={(event) =>
                  setInput({
                    ...inputData,
                    address: event.target.value,
                  })
                }
              ></textarea>

              <button
                type="submit"
                name="login"
                class="button-primary btn-custom w-100"
              >
                Sign up
              </button>

              <div className="login-help mt-2">
                <button className="" onClick={() => setLogin(true)}>
                  Already have an account? Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .input {
          margin-bottom: 10px;
        }
        .area-input {
          padding: 10px;
        }
        .btn-custom {
          padding: 10px 15px;
          display: block;
          margin: 0px;
        }
        .loginmodal-container {
          padding: 30px;
          max-width: 350px;
          width: 100% !important;
          background-color: #f7f7f7;
          margin: 0 auto;
          border-radius: 2px;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          font-family: roboto;
        }

        .loginmodal-container h1 {
          text-align: center;
          font-size: 1.8em;
          font-family: roboto;
        }

        .loginmodal-container input[type="submit"] {
          width: 100%;
          display: block;
          margin-bottom: 10px;
          position: relative;
        }

        .loginmodal-container input[type="text"],
        input[type="password"] {
          height: 44px;
          font-size: 16px;
          width: 100%;
          margin-bottom: 10px;
          -webkit-appearance: none;
          background: #fff;
          border: 1px solid #d9d9d9;
          border-top: 1px solid #c0c0c0;
          /* border-radius: 2px; */
          padding: 0 8px;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
        }

        .loginmodal-container input[type="text"]:hover,
        input[type="password"]:hover {
          border: 1px solid #b9b9b9;
          border-top: 1px solid #a0a0a0;
          -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .loginmodal {
          text-align: center;
          font-size: 14px;
          font-family: "Arial", sans-serif;
          font-weight: 700;
          height: 36px;
          padding: 0 8px;
          /* border-radius: 3px; */
          /* -webkit-user-select: none;
        user-select: none; */
        }

        .loginmodal-submit {
          /* border: 1px solid #3079ed; */
          border: 0px;
          color: #fff;
          text-shadow: 0 1px rgba(0, 0, 0, 0.1);
          background-color: #4d90fe;
          padding: 17px 0px;
          font-family: roboto;
          font-size: 14px;
          /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */
        }

        .loginmodal-submit:hover {
          /* border: 1px solid #2f5bb7; */
          border: 0px;
          text-shadow: 0 1px rgba(0, 0, 0, 0.3);
          background-color: #357ae8;
          /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */
        }

        .loginmodal-container a {
          text-decoration: none;
          color: #666;
          font-weight: 400;
          text-align: center;
          display: inline-block;
          opacity: 0.6;
          transition: opacity ease 0.5s;
        }

        .login-help {
          font-size: 12px;
        }

        .login-btn {
          text-align: center;
          margin-top: 50px;
        }

        .button {
          line-height: 55px;
          padding: 0 30px;
          background: #004a80;
          color: #fff;
          display: inline-block;
          font-family: roboto;
          text-decoration: none;
          font-size: 18px;
        }

        .button:hover,
        .button:visited {
          background: #006cba;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Login;
