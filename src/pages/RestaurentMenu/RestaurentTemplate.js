import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAllRestaurents,
  getAllMenus,
  getMenuItems,
  getMenuType,
} from "../../crud/apis.crud";
import { placeOrder } from "../../crud/orders.crud";

import OrderModal from "../Orders/OrderModal";
import "./templace.css";

import Dropdown from "../../components/Dropdown";
import { AccountContext } from "../../auth/Account";
import { successToaster, errorToaster } from "../../reusable/Toast";

const RestaurentTemplate = ({ status }) => {
  const history = useNavigate();

  const [restaurentInfo, setRestaurentInfo] = useState(null);
  const [menuItemsForRes, setMenuItemsForRes] = useState(null);
  const [menu, setMenu] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [order, setOrder] = useState(false);

  const { getUserData } = useContext(AccountContext);

  useEffect(() => {
    getResDetails();
    getMenuDetails();
    getMenuItemsForRes();
  }, []);

  const getResDetails = () => {
    getAllRestaurents()
      .then((res) => {
        const allDetails = res.data;
        res.data.map((item) => {
          if (item.restaurant_id === document.location.pathname.substring(1, 6))
            setRestaurentInfo(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMenuDetails = () => {
    getAllMenus(document.location.pathname.substring(1, 6))
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMenuItemsForRes = () => {
    getMenuItems(document.location.pathname.substring(1, 6))
      .then((res) => {
        const allDetails = res.data;
        setMenuItemsForRes(allDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Filter change
    if (selectedType != null) {
      getMenuType(selectedType.value)
        .then((res) => {
          // setMenuItemsForRes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedType]);

  function setOrderFunction(item) {
    const body = {
      restaurant_id: item.restaurant_id,
      order_amount: item.item_price,
      order_discount: 0,
      order_placed_at: new Date().toISOString(),
      order_amount_final: item.item_price,
      items:
        item.item_id +
        "," +
        item.item_name +
        "," +
        item.item_price +
        "," +
        item.image_url,
      Type: "Order",
      customer_mobile: getUserData().idToken.payload.phone_number.slice(1),
      order_status: "Order Placed",
      menu_id: item.menu_id,
      customer_name: getUserData().idToken.payload.name,
      user_id: getUserData().accessToken.payload.sub,
    };

    placeOrder(body)
      .then((res) => {
        if (res.status == 200);
        successToaster("Successfully placed the order");
        setOrder(true);

        // setMenuItemsForRes(res.data);
      })
      .catch((err) => {
        console.log(err);
        errorToaster("Something went wrong!");
      });
  }

  return (
    menuItemsForRes != null &&
    restaurentInfo != null &&
    menu != null && (
      <div>
        <OrderModal order={order} setOrder={setOrder} status={status} />
        <main className="container">
          <section className="hero-container">
            <div className="hero-image-container">
              <img
                src={
                  "https://imagesforwebsite.s3.eu-west-2.amazonaws.com/hero.jpg"
                }
                alt="hero"
                className="hero-image"
              />
              <img
                src={
                  "https://imagesforwebsite.s3.eu-west-2.amazonaws.com/heroShape.svg"
                }
                alt="hero shape"
                className="hero-image-shape"
              />
              <img
                src={
                  "https://imagesforwebsite.s3.eu-west-2.amazonaws.com/herobgpattren.svg"
                }
                alt="hero bg pattern"
                className="hero-image-pattern"
              />
            </div>
            <div className="hero-description">
              <h1 className="restaurent-name text-center">
                {restaurentInfo.restaurant_name}
              </h1>
              {/* <p>{restaurentInfo.restaurant_type}</p>
              <p>{restaurentInfo.restaurant_description}</p>
              <p>{restaurentInfo.restaurant_address}</p> */}
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

          <section className="food-list-container">
            <h1 className="hero-text" style={{ textAlign: "center" }}>
              Explore Our Menu
            </h1>
            <div className="food-list-container-diagonal"></div>
            {menu.length > 0 && (
              <div className="d-flex justify-content-center mb-4 mt-5">
                <div className="">
                  <Dropdown
                    menu={menu}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                  />
                </div>
              </div>
            )}

            <div className="food-menu-card-list row mx-0">
              {menuItemsForRes.map((item, index) => {
                return (
                  (selectedType == null ||
                    (selectedType != null &&
                      selectedType.value == item.menu_id)) && (
                    <div className="col-md-4">
                      <div className="food-menu-card">
                        <div className="image-container-food">
                          <button
                            className="button-primary"
                            onClick={() =>
                              getUserData() !== null
                                ? setOrderFunction(item)
                                : errorToaster(
                                    "Please log in to place the order"
                                  )
                            }
                          >
                            Order Now at ₹{item.item_price}
                          </button>
                          <img
                            src={item.image_url}
                            alt="burger"
                            className="food-menu-card-image"
                          />
                        </div>
                        <div className="food-menu-card-description">
                          <h4 className="food-menu-card-title">
                            {item.item_name}
                          </h4>
                          {/* <h4 className="food-menu-card-title">
                          {"Rs " + item.item_price}
                        </h4> */}
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
              {/* <div className="food-menu-card">
                <div className="image-container-food">
                  <button className="button-primary">Order Now</button>
                  <img src={pizza} alt="pizza" className="food-menu-card-image" />
                </div>
                <div className="food-menu-card-description">
                  <h4 className="food-menu-card-title">Pizza</h4>
                </div>
              </div> */}
              {/* <div className="food-menu-card">
                <div className="image-container-food">
                  <button className="button-primary">Order Now</button>
                  <img
                    src={iceCream}
                    alt="icecream"
                    className="food-menu-card-image"
                  />
                </div>
                <div className="food-menu-card-description">
                  <h4 className="food-menu-card-title">Ice Cream</h4>
                </div>
              </div> */}
            </div>
          </section>
          <section className="restaurant-list-container">
            <div className="restaurant-list-text">
              <h1 className="hero-text">
                Order food from favourite restaurants near you.
              </h1>
            </div>
            <div className="restaurant-list-image-container">
              <div className="restaurant-list-row-1">
                <img
                  src={
                    "https://imagesforwebsite.s3.eu-west-2.amazonaws.com/restaurant1.jpg"
                  }
                  alt="resstaurant1"
                  className="restaurant1"
                />
                <img
                  src={
                    "https://imagesforwebsite.s3.eu-west-2.amazonaws.com/restaurant2.jpg"
                  }
                  alt="resstaurant2"
                  className="restaurant2"
                />
              </div>
              <div className="restaurant-list-row-2">
                <img
                  src={
                    "https://imagesforwebsite.s3.eu-west-2.amazonaws.com/restaurant3.jpg"
                  }
                  alt="resstaurant3"
                  className="restaurant3"
                />
                <img
                  src={
                    "https://imagesforwebsite.s3.eu-west-2.amazonaws.com/restaurant4.jpg"
                  }
                  alt="resstaurant4"
                  className="restaurant4"
                />
              </div>
            </div>
          </section>
          {/* <section className="email-subscribe-container">
          <div>
            <h1 className="hero-text">Stay Updated</h1>
            <div className="email-subscribe-input-field">
              <div>
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="email-input"
                />
              </div>
              <button className="button-primary">Get Updates</button>
            </div>
          </div>
        </section> */}
          <section className="quote-container">
            <div className="quote-image-overlay"></div>
            <h3 className="quote-image-text">
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
