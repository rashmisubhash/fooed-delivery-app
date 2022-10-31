import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Restaurents = () => {
  const history = useNavigate();
  const [restaurentList, setRestaurentList] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState([
    {
      id: 1,
      hotelName: "Pizza Hut",
      hotelUrl: "https://source.unsplash.com/random/300×300/?pizza",
      hotelType: "North India, Chinese",
      hotelRating: "4.6",
      discount: "₹120 OFF",
      time: "10 min",
      price: "₹400 for One",
      description: "A common pizza in the United States",
    },
    {
      id: 2,
      hotelName: "Burger King",
      hotelUrl: "https://source.unsplash.com/random/300×300/?burger",
      hotelType: "South India, Veg",
      hotelRating: "4.8",
      discount: "₹100 OFF",
      time: "10 min",
      price: "₹100 for One",
    },
    {
      id: 3,
      hotelName: "Caramel Shake",
      hotelUrl: "https://source.unsplash.com/random/300×300/?milkshake",
      hotelType: "South India, Veg",
      hotelRating: "3.6",
      discount: "₹50 OFF",
      time: "10 min",
      price: "₹100 for One",
      description: "A common burger in the United States",
    },
    {
      id: 4,
      hotelName: "FreshMenu",
      hotelUrl: "https://source.unsplash.com/random/300×300/?noodles",
      hotelType: "South India, Veg",
      hotelRating: "3.6",
      discount: "₹250 OFF",
      time: "10 min",
      price: "₹100 for One",
      description: "A common burger in the United States",
    },
    {
      id: 3,
      hotelName: "Caramel Shake",
      hotelUrl: "https://source.unsplash.com/random/300×300/?milkshake",
      hotelType: "South India, Veg",
      hotelRating: "3.6",
      discount: "₹50 OFF",
      time: "10 min",
      price: "₹100 for One",
      description: "A common burger in the United States",
    },
    {
      id: 4,
      hotelName: "FreshMenu",
      hotelUrl: "https://source.unsplash.com/random/300×300/?noodles",
      hotelType: "South India, Veg",
      hotelRating: "3.6",
      discount: "₹250 OFF",
      time: "10 min",
      price: "₹100 for One",
      description: "A common burger in the United States",
    },
  ]);

  const fetchURL =
    "https://n39qrnkqc9.execute-api.eu-west-2.amazonaws.com/dev/restaurant";
  // "https://raw.githubusercontent.com/euhidaman/Fake_APIs/main/restaurant_details.json";

  useEffect(() => {
    getAllResDetails();
  }, []);

  const getAllResDetails = () => {
    axios
      .get(fetchURL)
      .then((res) => {
        const allDetails = res.data;
        console.log("allDetails", allDetails);
        setRestaurentList(allDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    restaurentList != null && (
      <div className="m-5 p-5">
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {restaurentList.map((element, k) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-2 py-3"
                  onClick={() => {
                    history(`/${element.restaurant_id}/menu`);
                  }}
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.restaurant_logo_image}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.restaurant_name}</h4>
                      <span>{additionalInfo[k].hotelRating}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex  justify-content-between">
                      {/* <h5>{element.address}</h5> */}
                      <span>{element.restaurant_address}</span>
                    </div>

                    <div className="extra"></div>

                    {/* <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={element.arrimg} className="limg" alt="" />
                                        <p>{element.somedata}</p>
                                        <img src={element.delimg} className="laimg" alt="" />
                                    </div> */}
                  </div>
                </Card>
              </>
            );
          })}
        </div>
        <style jsx>{`
          .foods-container {
            justify-content: center;
            padding: 0;
            margin: 1rem;
          }

          .upper_data span {
            background-color: #24963f;
            border-radius: 6px;
            color: #fff;
            font-size: 13px;
            font-weight: 600;
            padding: 2px 1px;
            text-align: center;
            width: 45px;
          }

          .h-60 {
            height: 15rem;
          }

          .w-5 {
            width: 1.25rem;
          }
          .h-5 {
            height: 1.25rem;
          }

          .body-font {
            margin-top: 80px;
          }

          .food-container {
            width: 300px;
            margin: 0.75rem 0.5rem;
          }

          .cd {
            border-radius: 16px;
            height: 16rem;
            margin-top: 10px;
          }

          .hove:hover {
            box-shadow: 0 0 10px 2px rgb(0 0 0 / 10%);
            transition: 0.2s;
            cursor: pointer;
          }

          @media screen and (max-width: 500px) {
            .foods-container {
              margin: 1rem 0;
            }

            .food-container {
              margin: 0.75rem 0;
            }

            .food-body {
              padding: 0 1rem !important;
            }
          }

          @media screen and (max-width: 300px) {
            .hotel-info-wrapper,
            .hotel-type-price-container {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 0.5rem;
            }

            .hotel-type-price-container {
              margin-bottom: 0;
            }
          }
        `}</style>
      </div>
    )
  );
};

export default Restaurents;
