import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "react-modal";
import ListAllOrders from "./ListAllOrders";

import { AccountContext } from "../../auth/Account";

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
    overflowY: "auto",
    maxHeight: "80%",
  },
  overlay: {
    background: "rgba(0,0,0,0.75)",
    zIndex: "100",
    overflow: "hidden",
  },
};

const OrderModal = ({ order, setOrder }) => {
  const [allorders, SetAllOrders] = useState([]);

  const { getUserData } = useContext(AccountContext);

  useEffect(() => {
    if (order) getAllOrders();
  }, [order]);

  const getAllOrders = () => {
    axios
      .get(
        `https://n39qrnkqc9.execute-api.eu-west-2.amazonaws.com/dev/order?customer_mobile=+${
          getUserData().idToken.payload.phone_number
        }`
      )
      .then((res) => {
        SetAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={order}
        onRequestClose={() => {
          setOrder(false);
        }}
        style={customStyles}
      >
        <div className="px-5 py-4">
          <h1 className="restaurent-name text-center mb-0">All Orders</h1>
          <hr className="my-0" />
          <hr className="mt-0" />
          <div>
            {allorders.length > 0 ? (
              allorders.map((orderInfo, index) => {
                return (
                  <div>
                    <ListAllOrders orderInfo={orderInfo} index={index} />
                    <hr style={{ borderTop: "2px dashed black" }} />
                  </div>
                );
              })
            ) : (
              <p class="h5 text-muted mb-0 mb-lg-0 text-center">
                No order placed
              </p>
            )}
          </div>
        </div>
      </Modal>

      <style jsx>{`
        .ReactModal__Content--after-open {
          width: ${allorders.length > 0 ? "60%" : "80"};
        }
      `}</style>
    </div>
  );
};

export default OrderModal;
