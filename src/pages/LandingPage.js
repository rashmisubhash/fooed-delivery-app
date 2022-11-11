import React from "react";
import Restaurents from "./Restaurents";

import landingPageImage from "../assets/images/landingPageImage.jpg";
import zomatoWhiteLogog from "../assets/images/delivery-logo.png";

const LandingPage = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="dev">
          <div className="landingPage">
            <div className="landingPageImageContainer">
              <img
                src={landingPageImage}
                alt="Landing Page Pic"
                className="landingPageImage"
              />
            </div>
            <div className="contentWrapper">
              {/* <div className="zomatoImageContainer"> */}
              <h1>Store To Door</h1>
              {/* <img
                src={zomatoWhiteLogog}
                alt="Zomato Logo"
                className="zomatoImage"
              /> */}
              {/* </div> */}
              <h2 className="description">Discover the best food & drinks</h2>
            </div>
          </div>
        </div>
      </div>
      <Restaurents />
      <style jsx>{`
        .header__image {
          width: 127px;
          height: 27px;
          margin-left: 15px;
          margin-top: 5px;
        }

        .dev {
          position: relative;
        }
        .landingPage {
          height: calc(100vh - 15rem);
          min-height: 30rem;
          max-height: 57rem;
          width: 100%;
          position: relative;
        }
        .landingPageImageContainer {
          overflow: hidden;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
        }

        .landingPageImage {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          background-size: cover;
          // transform: scale(1.3);
        }

        .contentWrapper {
          position: absolute;
          background: none;
          bottom: calc(50% - 5rem);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .contentWrapper h1 {
          position: absolute;
          background: none;
          bottom: calc(50% + 6rem);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          color: white;
          font-weight: 400;
          font-family: "Poppins";
          background: none;

          text-align: center;
          font-size: 3.6rem;
          font-style: italic;
        }

        .zomatoImageContainer {
          height: 65px;
          width: 18rem;
          position: absolute;
          top: -100px;
          background: none;
        }

        .zomatoImage {
          transform: translateY(-115px);
          height: 4rem;
          width: 16rem;
          background-size: contain;
          background: none;
        }
        .description {
          color: white;
          text-align: center;
          font-weight: 400;
          font-family: "Poppins";
          position: absolute;
          background: none;
          bottom: calc(50% + 1rem);
          color: white;
          text-align: center;
          font-size: 3.6rem;
        }

        // .header {
        //   position: absolute;
        //   background: none;
        // }
      `}</style>
    </div>
  );
};

export default LandingPage;
