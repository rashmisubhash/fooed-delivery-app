import { io } from "socket.io-client";
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

  // const [messageHistory, setMessageHistory] = useState([]);

  // const {
  //   sendMessage,
  //   sendJsonMessage,
  //   lastMessage,
  //   lastJsonMessage,
  //   readyState,
  //   getWebSocket,
  // } = useWebSocket("wss://g0m7cr37nf.execute-api.eu-west-2.amazonaws.com/dev", {
  //   onOpen: () => console.log("opened"),
  //   shouldReconnect: (closeEvent) => true,
  //   queryParams: {
  //     user_id: "c40f70ee-437e-4883-ba73-42e159f69e8d",
  //   },
  // });

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessageHistory((prev) => prev.concat(lastMessage));
  //   }
  // }, [lastMessage, setMessageHistory]);

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: "Connecting",
  //   [ReadyState.OPEN]: "Open",
  //   [ReadyState.CLOSING]: "Closing",
  //   [ReadyState.CLOSED]: "Closed",
  //   [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  // }[readyState];

  // ----------------------------------------------------------

  // const [varThatNeedHooks, setVar] = useState({});
  // const [serverMessage, setServerMessage] = useState("");
  // const [webSocketReady, setWebSocketReady] = useState(false);

  // const [webSocket, setWebSocket] = useState(
  //   new WebSocket("ws://127.0.0.1:3000/ws")
  // );

  // const getSockets = () => {
  //   // const webSocket = new WebSocket("ws://127.0.0.1:3000/ws");

  //   webSocket.onopen = (event) => {
  //     setWebSocketReady(true);
  //   };

  //   webSocket.onmessage = function (event) {
  //     setServerMessage(JSON.parse(event.data));
  //   };

  //   webSocket.onclose = function (event) {
  //     setWebSocketReady(false);
  //     setTimeout(() => {
  //       setWebSocket(new WebSocket("ws://127.0.0.1:3000/ws"));
  //     }, 1000);
  //   };

  //   webSocket.onerror = function (err) {
  //     console.log("Socket encountered error: ", err.message, "Closing socket");
  //     setWebSocketReady(false);
  //     webSocket.close();
  //   };

  //   return () => {
  //     webSocket.close();
  //   };
  // };

  // ----------------------------------------------------------

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
    if (order) {
      getAllOrders();
      setSocketUrl("wss://g0m7cr37nf.execute-api.eu-west-2.amazonaws.com/dev");
    } else {
      setSocketUrl(null);
    }
  }, [order]);

  const getAllOrders = () => {
    getAllOrdersForCustomer(getUserData().idToken.payload.phone_number.slice(1))
      .then((res) => {
        const tempOrders = res.data;
        SetAllOrders(
          tempOrders.filter((item) => {
            item.items = item.items.split(",");
            return item;
          })
        );
        SetOrdersAPI(true);
        let count = 0;
        tempOrders.filter((item) => {
          if (item.order_status != "Order Delivered") count += 1;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {console.log("connectionStatus", connectionStatus)}
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
      `}</style>
    </div>
  );
};

export default OrderModal;
