import { socketurl } from "../../crud/axios.config";
import React, { useState, useCallback, useEffect, useContext } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import Modal from "react-modal";
import ListAllOrders from "./ListAllOrders";

import { AccountContext } from "../../auth/Account";

import { getAllOrdersForCustomer } from "../../crud/orders.crud";

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
  const [ordersAPI, SetOrdersAPI] = useState(false);
  const { getUserData } = useContext(AccountContext);
  const [countOrder, setCountOrder] = useState(0);

  const [socketUrl, setSocketUrl] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    queryParams: {
      user_id: getUserData() !== null && getUserData().accessToken.payload.sub,
    },
  });

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl("wss://demos.kaazing.com/echo"),
    []
  );

  const handleClickSendMessage = useCallback(() => sendMessage("Hello"), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    (async () => {
      if (order) {
        const tempOrders = await getAllOrders();
        const count = await countCollect(tempOrders);
        setCountOrder(count);
        (connectionStatus !== "Connecting" || connectionStatus !== "Open") &&
          count > 0 &&
          setSocketUrl(
            socketurl.apiUrl
            // "wss://g0m7cr37nf.execute-api.eu-west-2.amazonaws.com/dev"
          );

        console.log("socketurl.apiUrl", socketurl.apiUrl);
        // setSocketUrl(socketurl.apiUrl);
      } else {
        setSocketUrl(null);
      }
    })();
  }, [order]);

  useEffect(() => {
    lastMessage && lastMessage.data && getAllOrders();
  }, [lastMessage]);

  function countCollect(tempOrders) {
    let count = 0;
    for (let item = 0; item < tempOrders.length; item++) {
      if (item.order_status != "Order Delivered") count = count + 1;
    }
    return count;
  }

  const getAllOrders = async () => {
    try {
      const res = await getAllOrdersForCustomer(
        getUserData().idToken.payload.phone_number.slice(1)
      );
      if (res) {
        const tempOrders = res.data;
        SetAllOrders(
          tempOrders.filter((item) => {
            item.items = item.items.split(",");
            return item;
          })
        );
        SetOrdersAPI(true);

        return tempOrders;
      }
    } catch (err) {
      console.log(err);
    }
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
        <div className="modal-container">
          <h1 className="restaurent-name text-center mb-0">All Orders</h1>
          <hr className="my-0" />
          <hr className="mt-0" />
          <div>
            {ordersAPI === false ? (
              <div className="text-center">
                <div className="spinner-border text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : allorders.length > 0 ? (
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

        .modal-container {
          padding: 2rem 2rem 3rem;
        }

        @media screen and (max-width: 1065px) {
          .modal-container {
            padding: 1rem 0rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderModal;
