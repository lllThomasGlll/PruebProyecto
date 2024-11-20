import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/router";
import MyNavBar from "./components/UI/MyNavbar";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MyNavBar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
