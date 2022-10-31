import { useState, useEffect } from "react";
import axios from "axios";

import "./templace.css";

import hero from "../../assets/hero.jpg";
import heroShape from "../../assets/svg/heroShape.svg";
import heroPattern from "../../assets/svg/herobgpattren.svg";
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";

import iceCream from "../../assets/iceCream.jpg";
import restaurant1 from "../../assets/restaurant1.jpg";
import restaurant2 from "../../assets/restaurant2.jpg";
import restaurant3 from "../../assets/restaurant3.jpg";
import restaurant4 from "../../assets/restaurant4.jpg";
import logo from "../../assets/logo.png";

const RestaurentTemplate = () => {
  const [restaurentList, setRestaurentList] = useState(null);
  const [restaurentMenu, setRestaurentMenu] = useState(null);

  const fetchURL =
    "https://n39qrnkqc9.execute-api.eu-west-2.amazonaws.com/dev/restaurant";
  // "https://raw.githubusercontent.com/euhidaman/Fake_APIs/main/restaurant_details.json";

  useEffect(() => {
    getResDetails();
    console.log(document.location.pathname.substring(1, 6));
  }, []);

  const getResDetails = () => {
    axios
      .get(fetchURL)
      .then((res) => {
        const allDetails = res.data;
        res.data.map((item) => {
          if (item.restaurant_id === document.location.pathname.substring(1, 6))
            setRestaurentList(item);
        });
        console.log("allDetails", allDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllResDetails();
  }, []);

  const getAllResDetails = () => {
    axios
      .get(
        "https://n39qrnkqc9.execute-api.eu-west-2.amazonaws.com/dev/menuitem?restaurant_id=R0001"
      )
      .then((res) => {
        const allDetails = res.data;
        console.log("allDetails", allDetails);
        setRestaurentMenu(allDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    restaurentMenu != null &&
    restaurentList != null && (
      <div>
        {/* <header>
        <nav class="navbar">
          <div class="navbar-brand">
            <img src={logo} alt="Logo" class="brand-logo" />
          </div>
           <div class="navbar-nav-items">
          <div class="navbar-nav-item">
            <button class="button-primary">Order Food</button>
          </div>
        </div> 
        </nav>
      </header> */}
        <main class="container">
          <section class="hero-container">
            <div class="hero-image-container">
              <img src={hero} alt="hero image" className="hero-image" />
              <img src={heroShape} alt="hero shape" class="hero-image-shape" />
              <img
                src={heroPattern}
                alt="hero bg pattern"
                class="hero-image-pattern"
              />
            </div>
            <div className="hero-description">
              <h1 className="restaurent-name text-center">
                {restaurentList.restaurant_name}
              </h1>
              {/* <p>{restaurentList.restaurant_type}</p>
              <p>{restaurentList.restaurant_description}</p>
              <p>{restaurentList.restaurant_address}</p> */}
              <h1 className="hero-text">
                Order food from your favourite restaurant.
              </h1>

              <div className="video-footage-text mt-3">
                <p>
                  Your food will be prepared safely with an experienced chef,
                  without compromising on the quality and hygiene.
                </p>
              </div>
            </div>
          </section>
          {/* <section class="video-footage-container">
          <div class="video-footage"></div>
          
        </section> */}
          <section class="food-list-container">
            <h1 class="hero-text" style={{ textAlign: "center" }}>
              Explore Our Menu
            </h1>
            <div class="food-list-container-diagonal"></div>
            <div class="food-menu-card-list row">
              {restaurentMenu.map((item, index) => {
                return (
                  <div className="col-md-4">
                    <div class="food-menu-card">
                      <div className="image-container-food">
                        <button class="button-primary">Order Now</button>
                        <img
                          src={item.image_url}
                          alt="burger"
                          class="food-menu-card-image"
                        />
                      </div>
                      <div class="food-menu-card-description">
                        <h4 class="food-menu-card-title">{item.item_name}</h4>
                        {/* <h4 class="food-menu-card-title">
                          {"Rs " + item.item_price}
                        </h4> */}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div class="food-menu-card">
                <div className="image-container-food">
                  <button class="button-primary">Order Now</button>
                  <img src={pizza} alt="pizza" class="food-menu-card-image" />
                </div>
                <div class="food-menu-card-description">
                  <h4 class="food-menu-card-title">Pizza</h4>
                </div>
              </div> */}
              {/* <div class="food-menu-card">
                <div className="image-container-food">
                  <button class="button-primary">Order Now</button>
                  <img
                    src={iceCream}
                    alt="icecream"
                    class="food-menu-card-image"
                  />
                </div>
                <div class="food-menu-card-description">
                  <h4 class="food-menu-card-title">Ice Cream</h4>
                </div>
              </div> */}
            </div>
          </section>
          <section class="restaurant-list-container">
            <div class="restaurant-list-text">
              <h1 class="hero-text">
                Order food from favourite restaurants near you.
              </h1>
            </div>
            <div class="restaurant-list-image-container">
              <div class="restaurant-list-row-1">
                <img
                  src={restaurant1}
                  alt="resstaurant1"
                  className="restaurant1"
                />
                <img
                  src={restaurant2}
                  alt="resstaurant2"
                  className="restaurant2"
                />
              </div>
              <div class="restaurant-list-row-2">
                <img
                  src={restaurant3}
                  alt="resstaurant3"
                  className="restaurant3"
                />
                <img
                  src={restaurant4}
                  alt="resstaurant4"
                  className="restaurant4"
                />
              </div>
            </div>
          </section>
          {/* <section class="email-subscribe-container">
          <div>
            <h1 class="hero-text">Stay Updated</h1>
            <div class="email-subscribe-input-field">
              <div>
                <input
                  type="email"
                  placeholder="email@email.com"
                  class="email-input"
                />
              </div>
              <button class="button-primary">Get Updates</button>
            </div>
          </div>
        </section> */}
          <section class="quote-container">
            <div class="quote-image-overlay"></div>
            <h3 class="quote-image-text">
              When a man's stomach is full it makes no difference whether he is
              rich or poor.
            </h3>
          </section>
        </main>
      </div>
    )
  );
};

export default RestaurentTemplate;
