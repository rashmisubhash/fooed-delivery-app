// import { createContext, useState } from "react";
// import io from "socket.io-client";
// let socket;

// export const initiateSocket = () => {
//   socket = io("wss://g0m7cr37nf.execute-api.eu-west-2.amazonaws.com/dev", {
//     extraHeaders: {
//       user_id: "c40f70ee-437e-4883-ba73-42e159f69e8d",
//     },
//   });
//   console.log(`Connecting socket...`);
//   //   if (socket && room) socket.emit("join", room);
// };

// export const disconnectSocket = () => {
//   console.log("Disconnecting socket...");
//   if (socket) socket.disconnect();
// };

// export const subscribeToChat = (cb) => {
//   if (!socket) return true;
//   socket.on("chat", (msg) => {
//     console.log("Websocket event received!");
//     return cb(null, msg);
//   });
// };

// export const sendMessage = (room, message) => {
//   if (socket) socket.emit("chat", { message, room });
// };

// export const SocketContext = createContext();

// export const SocketContextProvider = (props) => {
//   const [sock, setSocket] = useState(null);

//   let socket = async () => {
//     if (sock) {
//       return Promise.resolve(sock); // If already exists resolve
//     }
//     return new Promise((resolve, reject) => {
//       // socket = io("wss://g0m7cr37nf.execute-api.eu-west-2.amazonaws.com/dev", {
//       //     extraHeaders: {
//       //       user_id: "c40f70ee-437e-4883-ba73-42e159f69e8d",
//       //     },
//       //   });
//       let newSock = io(
//         "wss://g0m7cr37nf.execute-api.eu-west-2.amazonaws.com/dev",
//         {
//           extraHeaders: {
//             user_id: "c40f70ee-437e-4883-ba73-42e159f69e8d",
//           },
//         }
//       );
//       // {
//       //   query: {
//       //     // Options
//       //   },
//       // }; // Try to connect

//       let didntConnectTimeout = setTimeout(() => {
//         reject();
//       }, 15000); // Reject if didn't connect within 15 seconds

//       newSock.once("connect", () => {
//         clearTimeout(didntConnectTimeout); // It's connected so we don't need to keep waiting 15 seconds
//         setSocket(newSock); // Set the socket
//         resolve(newSock); // Return the socket
//       });
//     });
//   };

//   return (
//     <SocketContext.Provider value={{ socket }}>
//       {props.children}
//     </SocketContext.Provider>
//   );
// };
