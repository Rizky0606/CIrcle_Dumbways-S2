import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// const theme = extendBaseTheme({
//   styles: {
//     global: {
//       body: {
//         bg: "darkBackground",
//         color: "white",
//       },
//     },
//   },
//   colors: {
//     darkBackground: "#1D1D1D",
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);
