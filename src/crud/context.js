// import { createContext, useState } from "react";
// import io from "socket.io-client";

// export const SocketContext = createContext();

// export default function SocketContextProvider(props) {
//   const [sock, setSocket] = useState(null);

//   let socket = async () => {
//     if (sock) {
//       return Promise.resolve(sock); // If already exists resolve
//     }
//     // return new Promise((resolve, reject) => {
//       let newSock = io(
//         "wss://g0m7cr37nf.execute-api.eu-west-2.amazonaws.com/dev",
//         {
//           extraHeaders: {
//             user_id: "c40f70ee-437e-4883-ba73-42e159f69e8d",
//           },
//         }
//       );

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
// }
